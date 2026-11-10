/* Why-us screenshot carousel: gentle autoplay (owner 2026-11-10).
 * Advances every 5 s while the carousel is on screen. WCAG 2.2.2 (Pause, Stop, Hide):
 * a visible Pause/Play button. Pauses while hovered or focused, stops for good once the
 * visitor uses the arrows, dots, swipe or keys, and never starts under reduced motion.
 * Drives the page's own carousel by clicking its dots, so the inline carousel code is unchanged. */
(function () {
  'use strict';
  var DELAY = 5000;
  var LABELS = {
    en: ['Pause slideshow', 'Play slideshow'],
    fr: ['Mettre le diaporama en pause', 'Lancer le diaporama'],
    es: ['Pausar la presentación', 'Reproducir la presentación'],
    de: ['Diashow anhalten', 'Diashow abspielen'],
    pt: ['Pausar a apresentação', 'Reproduzir a apresentação'],
    sv: ['Pausa bildspelet', 'Spela upp bildspelet'],
    da: ['Sæt diasshowet på pause', 'Afspil diasshowet'],
    it: ['Metti in pausa la presentazione', 'Avvia la presentazione'],
    ja: ['スライドショーを一時停止', 'スライドショーを再生'],
    zh: ['暂停幻灯片', '播放幻灯片'],
    id: ['Jeda tayangan slide', 'Putar tayangan slide'],
    ru: ['Приостановить слайд-шоу', 'Запустить слайд-шоу'],
    uk: ['Призупинити слайд-шоу', 'Запустити слайд-шоу'],
    nl: ['Diavoorstelling pauzeren', 'Diavoorstelling afspelen'],
    ko: ['슬라이드쇼 일시 정지', '슬라이드쇼 재생'],
    th: ['หยุดสไลด์โชว์ชั่วคราว', 'เล่นสไลด์โชว์']
  };
  var ICON_PAUSE = '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>';
  var ICON_PLAY = '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z"/></svg>';

  function init() {
    var stage = document.getElementById('carousel');
    var controls = document.querySelector('.carousel-controls');
    var dots = Array.prototype.slice.call(document.querySelectorAll('.carousel-dot'));
    if (!stage || !controls || dots.length < 2) return;
    var section = stage.closest('section') || stage;

    var lang = (document.documentElement.lang || 'en').toLowerCase().split('-')[0];
    var text = LABELS[lang] || LABELS.en;
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var playing = !reduced;   // the visitor's choice (Pause/Play button or taking control)
    var held = false;         // hovered or focused
    var visible = false;      // on screen
    var timer = null;

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'carousel-pause';
    controls.appendChild(btn);

    function current() {
      for (var i = 0; i < dots.length; i++) if (dots[i].getAttribute('aria-selected') === 'true') return i;
      return 0;
    }
    function running() { return playing && !held && visible && !document.hidden; }
    function render() {
      btn.innerHTML = playing ? ICON_PAUSE : ICON_PLAY;
      btn.setAttribute('aria-label', playing ? text[0] : text[1]);
      // Do not announce every automatic change to screen readers.
      stage.setAttribute('aria-live', running() ? 'off' : 'polite');
    }
    function schedule() {
      clearTimeout(timer);
      timer = null;
      if (running()) {
        timer = setTimeout(function () {
          dots[(current() + 1) % dots.length].click();
          schedule();
        }, DELAY);
      }
      render();
    }
    function stop() { playing = false; schedule(); }

    btn.addEventListener('click', function () { playing = !playing; schedule(); });

    // The visitor takes control: stop autoplay. Programmatic dot clicks are not trusted events.
    function takeover(e) { if (e.isTrusted) stop(); }
    dots.forEach(function (d) { d.addEventListener('click', takeover); });
    ['carousel-prev', 'carousel-next'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('click', takeover);
    });
    stage.addEventListener('keydown', takeover);
    stage.addEventListener('touchend', takeover, { passive: true });

    section.addEventListener('mouseenter', function () { held = true; schedule(); });
    section.addEventListener('mouseleave', function () { held = false; schedule(); });
    section.addEventListener('focusin', function (e) { if (e.target !== btn) { held = true; schedule(); } });
    section.addEventListener('focusout', function () { held = false; schedule(); });
    document.addEventListener('visibilitychange', schedule);

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        schedule();
      }, { threshold: 0.5 }).observe(stage);
    } else {
      visible = true;
    }
    schedule();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
}());
