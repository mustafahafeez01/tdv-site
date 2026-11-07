/**
 * Cookie Consent Manager for Travel Document Vault
 * Handles GDPR/ePrivacy compliance by conditionally loading Google Analytics.
 * Supports translated banner text for all 22 supported languages.
 */

(function() {
    'use strict';

    const GA_MEASUREMENT_ID = 'G-NDB2TZPVDS';
    const CONSENT_KEY = 'cookie_consent_status'; // 'granted' or 'denied'

    // Translated cookie banner strings keyed by BCP-47 language code.
    // Falls back to English for any missing language.
    const BANNER_TRANSLATIONS = {
        en:      { title: 'Website Privacy',    body: 'We use cookies to analyse <strong>website traffic</strong>.',       note: '(This covers the website only. The app itself doesn’t track you.)', accept: 'Accept', decline: 'Decline' },
        es:      { title: 'Privacidad del sitio', body: 'Usamos cookies para analizar el <strong>tráfico del sitio web</strong>.', note: '(Esto solo afecta al sitio web. La aplicación no te rastrea.)', accept: 'Aceptar', decline: 'Rechazar' },
        fr:      { title: 'Confidentialité',    body: 'Nous utilisons des cookies pour analyser le <strong>trafic du site</strong>.', note: "(Cela concerne uniquement le site. L'application ne vous suit pas.)", accept: 'Accepter', decline: 'Refuser' },
        de:      { title: 'Website-Datenschutz', body: 'Wir verwenden Cookies zur Analyse des <strong>Website-Traffics</strong>.', note: '(Das betrifft nur die Website. Die App selbst verfolgt Sie nicht.)', accept: 'Akzeptieren', decline: 'Ablehnen' },
        it:      { title: 'Privacy del sito',   body: 'Utilizziamo cookie per analizzare il <strong>traffico del sito</strong>.', note: "(Riguarda solo il sito. L'app non ti traccia.)", accept: 'Accetta', decline: 'Rifiuta' },
        pt:      { title: 'Privacidade do site', body: 'Utilizamos cookies para analisar o <strong>tráfego do site</strong>.', note: '(Isto aplica-se apenas ao site. A aplicação não o rastreia.)', accept: 'Aceitar', decline: 'Recusar' },
        ru:      { title: 'Конфиденциальность', body: 'Мы используем cookies для анализа <strong>трафика сайта</strong>.', note: '(Это касается только сайта. Само приложение вас не отслеживает.)', accept: 'Принять', decline: 'Отклонить' },
        uk:      { title: 'Конфіденційність',   body: 'Ми використовуємо файли cookie для аналізу <strong>трафіку сайту</strong>.', note: '(Це стосується лише сайту. Сам застосунок вас не відстежує.)', accept: 'Прийняти', decline: 'Відхилити' },
        pl:      { title: 'Prywatność witryny', body: 'Używamy plików cookie do analizy <strong>ruchu na stronie</strong>.', note: '(Dotyczy to tylko strony. Sama aplikacja Cię nie śledzi.)', accept: 'Akceptuj', decline: 'Odrzuć' },
        nl:      { title: 'Websiteprivacy',     body: 'We gebruiken cookies om het <strong>websiteverkeer</strong> te analyseren.', note: '(Dit geldt alleen voor de website. De app zelf volgt u niet.)', accept: 'Accepteren', decline: 'Weigeren' },
        sv:      { title: 'Webbplatssekretess', body: 'Vi använder cookies för att analysera <strong>webbplatstrafik</strong>.', note: '(Detta gäller bara webbplatsen. Appen spårar dig inte.)', accept: 'Acceptera', decline: 'Avvisa' },
        da:      { title: 'Webstedets privatliv', body: 'Vi bruger cookies til at analysere <strong>websitetrafik</strong>.', note: '(Dette gælder kun hjemmesiden. Appen sporer dig ikke.)', accept: 'Accepter', decline: 'Afvis' },
        no:      { title: 'Personvern',         body: 'Vi bruker informasjonskapsler for å analysere <strong>nettstedstrafikk</strong>.', note: '(Dette gjelder bare nettstedet. Appen sporer deg ikke.)', accept: 'Godta', decline: 'Avvis' },
        fi:      { title: 'Verkkosivuston tietosuoja', body: 'Käytämme evästeitä <strong>verkkosivuliikenteen</strong> analysointiin.', note: '(Tämä koskee vain verkkosivustoa. Sovellus ei seuraa sinua.)', accept: 'Hyväksy', decline: 'Hylkää' },
        tr:      { title: 'Web Sitesi Gizliliği', body: '<strong>Web sitesi trafiğini</strong> analiz etmek için çerezler kullanıyoruz.', note: '(Bu yalnızca web sitesi için geçerlidir. Uygulama sizi izlemez.)', accept: 'Kabul Et', decline: 'Reddet' },
        ko:      { title: '웹사이트 개인정보',   body: '<strong>웹사이트 트래픽</strong>을 분석하기 위해 쿠키를 사용합니다.', note: '(웹사이트에만 해당됩니다. 앱은 사용자를 추적하지 않습니다.)', accept: '동의', decline: '거부' },
        ar:      { title: 'خصوصية الموقع',      body: 'نستخدم ملفات تعريف الارتباط لتحليل <strong>حركة مرور الموقع</strong>.', note: '(ينطبق هذا على الموقع فقط. التطبيق نفسه لا يتتبعك.)', accept: 'قبول', decline: 'رفض' },
        th:      { title: 'ความเป็นส่วนตัวของเว็บไซต์', body: 'เราใช้คุกกี้เพื่อวิเคราะห์<strong>การเข้าชมเว็บไซต์</strong>', note: '(ใช้กับเว็บไซต์เท่านั้น ตัวแอปไม่ติดตามคุณ)', accept: 'ยอมรับ', decline: 'ปฏิเสธ' },
        vi:      { title: 'Quyền riêng tư trang web', body: 'Chúng tôi sử dụng cookie để phân tích <strong>lưu lượng truy cập</strong>.', note: '(Điều này chỉ áp dụng cho trang web. Ứng dụng không theo dõi bạn.)', accept: 'Chấp nhận', decline: 'Từ chối' },
        id:      { title: 'Privasi Situs Web',  body: 'Kami menggunakan cookie untuk menganalisis <strong>lalu lintas situs web</strong>.', note: '(Ini hanya berlaku untuk situs web. Aplikasinya tidak melacak Anda.)', accept: 'Terima', decline: 'Tolak' },
        'zh-Hans': { title: '网站隐私',          body: '我们使用 Cookie 来分析<strong>网站流量</strong>。', note: '（仅适用于网站。应用本身不会追踪您。）', accept: '接受', decline: '拒绝' },
        'zh-Hant': { title: '網站隱私',          body: '我們使用 Cookie 來分析<strong>網站流量</strong>。', note: '（僅適用於網站。應用程式本身不會追蹤您。）', accept: '接受', decline: '拒絕' },
        ja:      { title: 'ウェブサイトのプライバシー', body: 'ウェブサイトのトラフィックを分析するためにCookieを使用しています。', note: '（これはウェブサイトのみが対象です。アプリ自体はあなたを追跡しません。）', accept: '同意する', decline: '拒否する' },
    };

    /**
     * Get the current page language from the <html lang> attribute.
     * Falls back to 'en' if not set or unrecognised.
     */
    function getPageLang() {
        return (document.documentElement.lang || 'en').toLowerCase();
    }

    /**
     * Get banner translations for the current page language.
     */
    function getBannerText() {
        var lang = getPageLang();
        // Try exact match first, then base language
        if (BANNER_TRANSLATIONS[lang]) { return BANNER_TRANSLATIONS[lang]; }
        var base = lang.split('-')[0];
        if (BANNER_TRANSLATIONS[base]) { return BANNER_TRANSLATIONS[base]; }
        return BANNER_TRANSLATIONS['en'];
    }
    
    // Check if user has already made a choice
    const consentStatus = localStorage.getItem(CONSENT_KEY);

    if (consentStatus === 'granted') {
        loadAnalytics();
    } else if (consentStatus === null) {
        showConsentBanner();
    }

    // Function to load Google Analytics dynamically
    function loadAnalytics() {
        // Live site only: local previews (localhost, 127.0.0.1) must not count as visits.
        if (!/(^|\.)traveldocumentvault\.com$/.test(location.hostname)) return;

        // Load the gtag.js script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);

        // Initialize DataLayer
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag; // Make globally available
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID, { 'anonymize_ip': true });

        // Set site language dimension so GA reports can be segmented by language
        const siteLang = document.documentElement.lang || 'en';
        gtag('set', { 'site_language': siteLang });

        console.log('Analytics loaded (Consent Granted), language:', siteLang);
    }

    // Function to show the UI
    function showConsentBanner() {
        // Create styles
        const style = document.createElement('style');
        style.textContent = `
            #cookie-banner {
                position: fixed;
                bottom: 20px;
                left: 20px;
                right: 20px;
                max-width: 600px;
                margin: 0 auto;
                background: rgba(255, 255, 255, 0.92); /* light panel (--f-paper .92) */
                backdrop-filter: saturate(180%) blur(20px);
                -webkit-backdrop-filter: saturate(180%) blur(20px);
                border: 1px solid rgba(0, 58, 135, 0.09); /* --f-line */
                border-radius: 22px;
                padding: 20px;
                display: flex;
                flex-direction: column;
                gap: 16px;
                z-index: 9999;
                box-shadow: 0 2px 6px rgba(10,25,47,.05), 0 18px 44px rgba(10,25,47,.10); /* --f-shadow-2 */
                transform: translateY(150%);
                transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
                font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
            }
            
            #cookie-banner.visible {
                transform: translateY(0);
            }

            .cb-content {
                color: #33425A; /* --f-ink-2 */
                font-size: 0.9rem;
                line-height: 1.5;
            }

            .cb-title {
                font-weight: 600;
                color: #0A192F; /* --f-ink */
                margin-bottom: 4px;
                font-size: 1rem;
            }

            .cb-actions {
                display: flex;
                gap: 12px;
                justify-content: flex-end;
            }

            .cb-btn {
                padding: 8px 20px;
                min-height: 44px;
                border-radius: 980px;
                font-size: 0.875rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .cb-btn-accept {
                background-color: #FFB000; /* Brand Gold */
                color: #003A87; /* Brand Blue */
                border: none;
            }
            
            .cb-btn-accept:hover {
                background-color: #e69f00;
                transform: translateY(-1px);
            }

            .cb-btn-decline {
                background-color: transparent;
                color: #33425A; /* --f-ink-2 */
                border: 1px solid rgba(0,58,135,0.16); /* --f-line-2 */
            }

            .cb-btn-decline:hover {
                background-color: #EEF3FB; /* --f-cloud */
                color: #0A192F;
            }

            @media (min-width: 640px) {
                #cookie-banner {
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                }
                .cb-actions {
                    flex-shrink: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Get translated banner text for the current page language
        const t = getBannerText();

        // Create HTML
        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.innerHTML = `
            <div class="cb-text">
                <div class="cb-title">${t.title}</div>
                <div class="cb-content">
                    ${t.body}
                </div>
                <div class="cb-content" style="font-size: 0.8rem; margin-top:4px; opacity: 0.7;">
                    ${t.note}
                </div>
            </div>
            <div class="cb-actions">
                <button id="cb-decline" class="cb-btn cb-btn-decline">${t.decline}</button>
                <button id="cb-accept" class="cb-btn cb-btn-accept">${t.accept}</button>
            </div>
        `;
        document.body.appendChild(banner);

        // Animate in
        requestAnimationFrame(() => {
            banner.classList.add('visible');
        });

        // Event Listeners
        document.getElementById('cb-accept').addEventListener('click', () => {
            localStorage.setItem(CONSENT_KEY, 'granted');
            banner.classList.remove('visible');
            setTimeout(() => banner.remove(), 500);
            loadAnalytics();
        });

        document.getElementById('cb-decline').addEventListener('click', () => {
            localStorage.setItem(CONSENT_KEY, 'denied');
            banner.classList.remove('visible');
            setTimeout(() => banner.remove(), 500);
        });
    }

    // GDPR Article 7(3): withdrawing consent has to be as easy as giving it.
    // Giving it is one click, so withdrawing is one click too - the footer
    // link clears the stored choice and puts the banner back.
    window.tdvCookieSettings = function () {
        localStorage.removeItem(CONSENT_KEY);
        var existing = document.getElementById('cookie-banner');
        if (existing) { existing.remove(); }
        showConsentBanner();
    };

    document.addEventListener('click', function (e) {
        var trigger = e.target.closest ? e.target.closest('[data-cookie-settings]') : null;
        if (!trigger) { return; }
        e.preventDefault();
        window.tdvCookieSettings();
    });
})();
