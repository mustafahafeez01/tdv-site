/**
 * Language Picker for Travel Document Vault
 *
 * - Auto-detects browser language on first visit and redirects
 * - Renders a flag+name dropdown in the desktop nav and a grid in the mobile menu
 * - Fires GA language_switch event on manual language change (if consent granted)
 * - Stores the user's language preference in localStorage (key: tdv_lang)
 */

(function () {
  'use strict';

  const LANG_STORAGE_KEY = 'tdv_lang';
  const CONSENT_KEY = 'cookie_consent_status';

  // LIVE LANGUAGES — a language is only added here after:
  //   1. All 7 pages >= 90% of English source line count (completeness check)
  //   2. Deep linguistic audit passes (see docs/translations/DEEP_LINGUISTIC_AUDIT_PROMPT.md)
  //
  // Status last updated: 2026-03-29
  // Live (16): en, fr, de, pt, sv, da, th, zh-Hans, es, it, ru, uk, nl, id, ko, ja
  // Pending audit: no, fi, tr, pl, zh-Hant, vi
  const LANGUAGES = [
    { code: 'en',      flag: '🇬🇧', name: 'English' },
    { code: 'fr',      flag: '🇫🇷', name: 'Français' },
    { code: 'de',      flag: '🇩🇪', name: 'Deutsch' },
    { code: 'pt',      flag: '🇵🇹', name: 'Português' },
    { code: 'sv',      flag: '🇸🇪', name: 'Svenska' },
    { code: 'da',      flag: '🇩🇰', name: 'Dansk' },
    { code: 'th',      flag: '🇹🇭', name: 'ภาษาไทย' },
    { code: 'zh-Hans', flag: '🇨🇳', name: '简体中文' },
    { code: 'es',      flag: '🇪🇸', name: 'Español' },
    { code: 'it',      flag: '🇮🇹', name: 'Italiano' },
    { code: 'ru',      flag: '🇷🇺', name: 'Русский' },
    { code: 'uk',      flag: '🇺🇦', name: 'Українська' },
    { code: 'nl',      flag: '🇳🇱', name: 'Nederlands' },
    { code: 'id',      flag: '🇮🇩', name: 'Bahasa Indonesia' },
    { code: 'ko',      flag: '🇰🇷', name: '한국어' },
    { code: 'ja',      flag: '🇯🇵', name: '日本語' },
    // --- NOT YET LIVE (pending full audit + user approval) ---
    // { code: 'no',      flag: '🇳🇴', name: 'Norsk' },
    // { code: 'fi',      flag: '🇫🇮', name: 'Suomi' },
    // { code: 'tr',      flag: '🇹🇷', name: 'Türkçe' },
    // { code: 'pl',      flag: '🇵🇱', name: 'Polski' },
    // { code: 'zh-Hant', flag: '🇹🇼', name: '繁體中文' },
    // { code: 'vi',      flag: '🇻🇳', name: 'Tiếng Việt' },
  ];

  const LANG_CODES = LANGUAGES.map(function (l) { return l.code; });

  // Pages that are permanently English-only and should never be redirected
  // to a translated equivalent, and should always show English as active in the picker.
  var ENGLISH_ONLY_PATHS = [
    '/privacy-policy/',
    '/terms/',
    '/pricing-policy/',
    '/privacy-verification/',
  ];

  function isEnglishOnlyPage() {
    var path = window.location.pathname;
    for (var i = 0; i < ENGLISH_ONLY_PATHS.length; i++) {
      if (path.indexOf(ENGLISH_ONLY_PATHS[i]) === 0) { return true; }
    }
    return false;
  }

  /**
   * Detect the current language from the URL path prefix.
   * Returns 'en' for the English root (no prefix).
   */
  function detectCurrentLang() {
    var parts = window.location.pathname.split('/').filter(Boolean);
    if (parts.length > 0 && LANG_CODES.indexOf(parts[0]) !== -1) {
      return parts[0];
    }
    return 'en';
  }

  /**
   * Build the URL for a given target language based on the current URL.
   * English is at root (/), all others are at /<code>/...
   */
  function buildLangUrl(targetCode) {
    var pathname = window.location.pathname;
    var parts = pathname.split('/').filter(Boolean);

    // Strip current lang prefix if present
    if (parts.length > 0 && LANG_CODES.indexOf(parts[0]) !== -1) {
      parts.shift();
    }

    // Build new path
    var newPath;
    if (targetCode === 'en') {
      newPath = '/' + parts.join('/');
      if (parts.length > 0) {
        newPath += '/';
      }
    } else {
      newPath = '/' + targetCode + (parts.length > 0 ? '/' + parts.join('/') + '/' : '/');
    }

    // Preserve query string and hash if any
    return newPath + window.location.search + window.location.hash;
  }

  /**
   * Match a browser language tag to the best supported language code.
   * Returns null if no match found.
   */
  function matchBrowserLang(browserLangs) {
    for (var i = 0; i < browserLangs.length; i++) {
      var tag = browserLangs[i].toLowerCase();

      // Exact match first (e.g. 'zh-hans')
      for (var j = 0; j < LANGUAGES.length; j++) {
        if (LANGUAGES[j].code.toLowerCase() === tag) {
          return LANGUAGES[j].code;
        }
      }

      // Base language match (e.g. 'de-AT' matches 'de')
      var base = tag.split('-')[0];
      for (var k = 0; k < LANGUAGES.length; k++) {
        if (LANGUAGES[k].code.toLowerCase() === base) {
          return LANGUAGES[k].code;
        }
      }

      // Chinese variants: zh-TW / zh-HK → zh-Hant, zh-CN → zh-Hans
      if (tag === 'zh-tw' || tag === 'zh-hk' || tag === 'zh-mo') {
        return 'zh-Hant';
      }
      if (tag === 'zh-cn' || tag === 'zh-sg' || tag === 'zh') {
        return 'zh-Hans';
      }
    }
    return null;
  }

  /**
   * Fetch the list of languages that have a translated homepage available.
   * Uses a HEAD request to /[code]/index.html — if it returns 200 the lang is live.
   * Falls back to showing all languages if fetch is unavailable (e.g. file:// protocol).
   * Results are cached in memory for the page lifetime.
   */
  var _liveLanguageCache = null;

  function getLiveLanguages(callback) {
    if (_liveLanguageCache !== null) { callback(_liveLanguageCache); return; }

    // English is always live
    var liveCodes = ['en'];

    if (typeof fetch === 'undefined') {
      _liveLanguageCache = LANGUAGES;
      callback(LANGUAGES);
      return;
    }

    var nonEnglish = LANGUAGES.filter(function (l) { return l.code !== 'en'; });
    var pending = nonEnglish.length;

    nonEnglish.forEach(function (lang) {
      fetch('/' + lang.code + '/', { method: 'HEAD' })
        .then(function (r) {
          if (r.ok) { liveCodes.push(lang.code); }
        })
        .catch(function () { /* not available */ })
        .finally(function () {
          pending--;
          if (pending === 0) {
            _liveLanguageCache = LANGUAGES.filter(function (l) {
              return liveCodes.indexOf(l.code) !== -1;
            });
            callback(_liveLanguageCache);
          }
        });
    });
  }

  /**
   * Auto-detect on first visit.
   * If tdv_lang is not set and browser language matches a supported lang,
   * redirect and store preference.
   */
  function autoDetect() {
    var stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored !== null) {
      return; // User has already chosen or been redirected
    }

    var currentLang = detectCurrentLang();

    // Mark current lang as stored to prevent redirect loops
    localStorage.setItem(LANG_STORAGE_KEY, currentLang);

    // If already on a non-English page, user arrived there directly — respect it
    if (currentLang !== 'en') {
      return;
    }

    var browserLangs = (navigator.languages && navigator.languages.length)
      ? Array.from(navigator.languages)
      : [navigator.language || navigator.userLanguage || 'en'];

    var matched = matchBrowserLang(browserLangs);

    if (matched && matched !== 'en') {
      // Only redirect if the translated homepage actually exists
      getLiveLanguages(function (liveLanguages) {
        var isLive = liveLanguages.some(function (l) { return l.code === matched; });
        if (isLive) {
          localStorage.setItem(LANG_STORAGE_KEY, matched);
          window.location.replace(buildLangUrl(matched));
        }
      });
    }
  }

  /**
   * Restore preferred language when on an English-only page (e.g. a blog post
   * that hasn't been translated yet). If the user previously chose a non-English
   * language, check whether the translated equivalent of this page exists.
   * If it does, redirect silently. If it doesn't, stay — but the picker will
   * still show the user's preferred language as active.
   */
  function restorePreferredLang() {
    var currentLang = detectCurrentLang();

    // Only applies when we're on an English-only page (no lang prefix in URL)
    if (currentLang !== 'en') { return; }

    // Never redirect away from permanently-English legal/policy pages
    if (isEnglishOnlyPage()) { return; }

    var stored = localStorage.getItem(LANG_STORAGE_KEY);

    // No preference stored, or preference is English — nothing to do
    if (!stored || stored === 'en') { return; }

    // Check if this specific page has a translated version
    var translatedUrl = buildLangUrl(stored);
    if (typeof fetch === 'undefined') { return; }

    fetch(translatedUrl, { method: 'HEAD' })
      .then(function (r) {
        if (r.ok) {
          window.location.replace(translatedUrl);
        }
        // Not available (blog post not translated) — stay on English, picker
        // will still show preferred lang as active via getPreferredDisplayLang()
      })
      .catch(function () { /* network error — stay */ });
  }

  /**
   * Fire a GA language_switch event if the user has granted analytics consent.
   */
  function fireGaEvent(fromLang, toLang) {
    var consent = localStorage.getItem(CONSENT_KEY);
    if (consent !== 'granted') { return; }
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'language_switch', {
        from_lang: fromLang,
        to_lang: toLang,
      });
    }
  }

  /**
   * Navigate to a new language, firing a GA event first.
   */
  function switchLang(targetCode) {
    var currentLang = detectCurrentLang();
    if (targetCode === currentLang) { return; }

    fireGaEvent(currentLang, targetCode);
    localStorage.setItem(LANG_STORAGE_KEY, targetCode);

    // On permanently-English pages (privacy-policy, terms, etc.) there is no
    // translated equivalent — send the user to the target language homepage instead.
    if (isEnglishOnlyPage()) {
      window.location.href = targetCode === 'en' ? '/' : '/' + targetCode + '/';
      return;
    }

    window.location.href = buildLangUrl(targetCode);
  }

  /**
   * Build a single dropdown item element.
   */
  function buildDropdownItem(lang, currentLang) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('role', 'option');
    btn.setAttribute('aria-selected', lang.code === currentLang ? 'true' : 'false');

    var isActive = lang.code === currentLang;
    btn.className = [
      'flex items-center gap-2 w-full px-3 py-2 text-sm text-left transition-colors',
      isActive
        ? 'text-brand-gold bg-white/5 font-semibold'
        : 'text-slate-200 hover:text-white hover:bg-white/5',
    ].join(' ');

    btn.innerHTML = '<span aria-hidden="true">' + lang.flag + '</span>'
      + '<span>' + lang.name + '</span>'
      + (isActive ? '<span class="ml-auto text-brand-gold text-xs" aria-hidden="true">✓</span>' : '');

    btn.addEventListener('click', function () {
      switchLang(lang.code);
    });

    return btn;
  }

  /**
   * Build a compact mobile grid item.
   */
  function buildMobileItem(lang, currentLang) {
    var btn = document.createElement('button');
    btn.type = 'button';
    var isActive = lang.code === currentLang;
    btn.className = [
      'flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors',
      isActive
        ? 'bg-brand-gold/20 text-brand-gold font-semibold'
        : 'text-slate-200 hover:text-white hover:bg-white/5',
    ].join(' ');
    btn.innerHTML = '<span aria-hidden="true">' + lang.flag + '</span>'
      + '<span class="truncate">' + lang.name + '</span>';

    btn.addEventListener('click', function () {
      switchLang(lang.code);
    });

    return btn;
  }

  /**
   * Render the desktop dropdown content.
   */
  function renderDesktopDropdown(dropdown, currentLang) {
    dropdown.innerHTML = '';
    LANGUAGES.forEach(function (lang) {
      dropdown.appendChild(buildDropdownItem(lang, currentLang));
    });
  }

  /**
   * Render the mobile language list.
   */
  function renderMobileList(container, currentLang) {
    container.innerHTML = '';
    LANGUAGES.forEach(function (lang) {
      container.appendChild(buildMobileItem(lang, currentLang));
    });
  }

  /**
   * Update the desktop button label to show the current language.
   */
  function updateDesktopButton(currentLang) {
    var flagEl = document.getElementById('lang-flag-desktop');
    var nameEl = document.getElementById('lang-name-desktop');
    if (!flagEl || !nameEl) { return; }

    var lang = LANGUAGES.find(function (l) { return l.code === currentLang; });
    if (!lang) { return; }

    flagEl.textContent = lang.flag;
    nameEl.textContent = lang.name;
  }

  /**
   * Position the dropdown below the button using fixed coords.
   * This escapes backdrop-filter stacking contexts in the nav.
   */
  function positionDropdown(btn, dropdown) {
    var rect = btn.getBoundingClientRect();
    dropdown.style.top = (rect.bottom + 6) + 'px';
    // Align right edge of dropdown to right edge of button
    dropdown.style.left = 'auto';
    dropdown.style.right = (window.innerWidth - rect.right) + 'px';
  }

  /**
   * Wire up desktop dropdown toggle.
   * The dropdown is moved to <body> to escape the nav's backdrop-filter
   * stacking context, which would otherwise clip its z-index.
   */
  function initDesktopPicker(currentLang) {
    var btn = document.getElementById('lang-btn-desktop');
    // The inline placeholder div may or may not exist — we create a fresh one on body
    var placeholder = document.getElementById('lang-dropdown-desktop');
    if (!btn) { return; }

    // Create the floating dropdown on <body> so it is not clipped by nav stacking context
    var dropdown = document.createElement('div');
    dropdown.id = 'lang-dropdown-body';
    dropdown.setAttribute('role', 'listbox');
    dropdown.setAttribute('aria-label', 'Language selection');
    dropdown.style.cssText = [
      'position: fixed',
      'width: 13rem',
      'max-height: 18rem',
      'overflow-y: auto',
      'z-index: 9999',
      'border-radius: 0.75rem',
      'border: 1px solid rgba(255,255,255,0.10)',
      'background: rgba(17,25,40,0.92)',
      'backdrop-filter: blur(12px)',
      '-webkit-backdrop-filter: blur(12px)',
      'box-shadow: 0 20px 40px rgba(0,0,0,0.5)',
      'padding: 4px 0',
      'display: none',
    ].join(';');
    document.body.appendChild(dropdown);

    // Inject scrollbar styles for the dropdown (dark thin scrollbar to match glass panel)
    if (!document.getElementById('lang-picker-scrollbar-style')) {
      var style = document.createElement('style');
      style.id = 'lang-picker-scrollbar-style';
      style.textContent = [
        '#lang-dropdown-body::-webkit-scrollbar { width: 4px; }',
        '#lang-dropdown-body::-webkit-scrollbar-track { background: transparent; }',
        '#lang-dropdown-body::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.18); border-radius: 2px; }',
        '#lang-dropdown-body::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.32); }',
        '#lang-dropdown-body { scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.18) transparent; }',
      ].join('\n');
      document.head.appendChild(style);
    }

    // Remove the inline placeholder (it was just an anchor, no longer needed)
    if (placeholder) { placeholder.remove(); }

    updateDesktopButton(currentLang);

    // Only show languages that have a translated homepage live
    getLiveLanguages(function (liveLanguages) {
      dropdown.innerHTML = '';
      liveLanguages.forEach(function (lang) {
        dropdown.appendChild(buildDropdownItem(lang, currentLang));
      });
    });

    function openDropdown() {
      positionDropdown(btn, dropdown);
      dropdown.style.display = 'block';
      btn.setAttribute('aria-expanded', 'true');
    }

    function closeDropdown() {
      dropdown.style.display = 'none';
      btn.setAttribute('aria-expanded', 'false');
    }

    function isOpen() {
      return dropdown.style.display !== 'none';
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (isOpen()) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });

    // Reposition on scroll/resize in case user scrolls while open
    window.addEventListener('scroll', function () {
      if (isOpen()) { positionDropdown(btn, dropdown); }
    }, { passive: true });

    window.addEventListener('resize', function () {
      if (isOpen()) { positionDropdown(btn, dropdown); }
    });

    // Close on outside click
    document.addEventListener('click', function () {
      if (isOpen()) { closeDropdown(); }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) {
        closeDropdown();
        btn.focus();
      }
    });
  }

  /**
   * Wire up mobile language list.
   */
  function initMobilePicker(currentLang) {
    var container = document.getElementById('lang-mobile-list');
    if (!container) { return; }
    // Only show languages that have a translated homepage live
    getLiveLanguages(function (liveLanguages) {
      container.innerHTML = '';
      liveLanguages.forEach(function (lang) {
        container.appendChild(buildMobileItem(lang, currentLang));
      });
    });
  }

  /**
   * Returns the language to highlight as active in the picker.
   * On translated pages this matches the URL. On English-only pages
   * (e.g. untranslated blog posts) we show the user's stored preference
   * so the picker doesn't appear to "forget" their language choice.
   */
  function getPreferredDisplayLang() {
    var currentLang = detectCurrentLang();
    if (currentLang !== 'en') { return currentLang; }
    // On permanently-English pages, always show English as active in the picker
    if (isEnglishOnlyPage()) { return 'en'; }
    var stored = localStorage.getItem(LANG_STORAGE_KEY);
    return (stored && stored !== 'en') ? stored : 'en';
  }

  /**
   * On English-only pages (terms, privacy-policy, etc.), rewrite all internal
   * nav and footer links to use the user's preferred language prefix so they
   * don't lose their language context after clicking a legal link from /es/ etc.
   *
   * Only rewrites links that point to known translatable paths (/, /features/,
   * /faq/, /why-us/, /blog/, /accessibility/, /#pricing, /blog/why-i-built-*).
   * Legal pages and external links are left untouched.
   */
  function rewriteNavLinksForPreferredLang() {
    // Run on any English-root page (no lang prefix) — covers legal pages AND
    // individual blog posts which are English-only but not in ENGLISH_ONLY_PATHS
    if (detectCurrentLang() !== 'en') { return; }

    var stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (!stored || stored === 'en') { return; }
    if (LANG_CODES.indexOf(stored) === -1) { return; }

    var prefix = '/' + stored;

    // Paths that have translated equivalents — rewrite these
    var translatablePaths = [
      '/', '/features/', '/faq/', '/why-us/', '/blog/', '/accessibility/',
      '/#pricing',
    ];

    var origin = window.location.origin;
    var links = document.querySelectorAll('a[href]');
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      // Use the resolved absolute href (DOM property), not the raw attribute
      var resolved = a.href;

      // Skip external links, mailto, and already-prefixed links
      if (!resolved || resolved.indexOf(origin) !== 0) { continue; }

      // path includes hash if present (e.g. "/#pricing")
      var path = resolved.replace(origin, '') + (a.hash && resolved.indexOf(a.hash) === -1 ? a.hash : '');
      if (path.indexOf(prefix + '/') === 0 || path === prefix) { continue; }

      // Rewrite exact translatable paths (including /#pricing)
      for (var j = 0; j < translatablePaths.length; j++) {
        var tp = translatablePaths[j];
        if (path === tp) {
          a.href = prefix + tp;
          break;
        }
      }

      // Rewrite why-i-built blog post link
      if (path.indexOf('/blog/why-i-built-travel-document-vault') !== -1) {
        a.href = prefix + '/blog/why-i-built-travel-document-vault/';
      }
    }
  }

  /**
   * Main init — runs after DOM is ready.
   */
  function init() {
    autoDetect();
    restorePreferredLang();
    rewriteNavLinksForPreferredLang();

    var displayLang = getPreferredDisplayLang();

    initDesktopPicker(displayLang);
    initMobilePicker(displayLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
