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
        en:      { title: 'Website Privacy',    body: 'We use cookies to analyze <strong>website traffic</strong>.',       note: '(The App itself is 100% private and tracks nothing).', accept: 'Accept', decline: 'Decline' },
        es:      { title: 'Privacidad del sitio', body: 'Usamos cookies para analizar el <strong>tráfico del sitio web</strong>.', note: '(La aplicación es 100% privada y no rastrea nada).', accept: 'Aceptar', decline: 'Rechazar' },
        fr:      { title: 'Confidentialité',    body: 'Nous utilisons des cookies pour analyser le <strong>trafic du site</strong>.', note: "(L'application est 100% privée et ne suit rien).", accept: 'Accepter', decline: 'Refuser' },
        de:      { title: 'Website-Datenschutz', body: 'Wir verwenden Cookies zur Analyse des <strong>Website-Traffics</strong>.', note: '(Die App selbst ist 100 % privat und verfolgt nichts).', accept: 'Akzeptieren', decline: 'Ablehnen' },
        it:      { title: 'Privacy del sito',   body: 'Utilizziamo cookie per analizzare il <strong>traffico del sito</strong>.', note: "(L'app è 100% privata e non traccia nulla).", accept: 'Accetta', decline: 'Rifiuta' },
        pt:      { title: 'Privacidade do site', body: 'Utilizamos cookies para analisar o <strong>tráfego do site</strong>.', note: '(A aplicação é 100% privada e não rastreia nada).', accept: 'Aceitar', decline: 'Recusar' },
        ru:      { title: 'Конфиденциальность', body: 'Мы используем cookies для анализа <strong>трафика сайта</strong>.', note: '(Приложение полностью приватно и ничего не отслеживает).', accept: 'Принять', decline: 'Отклонить' },
        uk:      { title: 'Конфіденційність',   body: 'Ми використовуємо файли cookie для аналізу <strong>трафіку сайту</strong>.', note: '(Застосунок повністю приватний і нічого не відстежує).', accept: 'Прийняти', decline: 'Відхилити' },
        pl:      { title: 'Prywatność witryny', body: 'Używamy plików cookie do analizy <strong>ruchu na stronie</strong>.', note: '(Aplikacja jest w 100% prywatna i niczego nie śledzi).', accept: 'Akceptuj', decline: 'Odrzuć' },
        nl:      { title: 'Websiteprivacy',     body: 'We gebruiken cookies om het <strong>websiteverkeer</strong> te analyseren.', note: '(De app zelf is 100% privé en volgt niets).', accept: 'Accepteren', decline: 'Weigeren' },
        sv:      { title: 'Webbplatssekretess', body: 'Vi använder cookies för att analysera <strong>webbplatstrafik</strong>.', note: '(Appen är 100% privat och spårar ingenting).', accept: 'Acceptera', decline: 'Avvisa' },
        da:      { title: 'Webstedets privatliv', body: 'Vi bruger cookies til at analysere <strong>websitetrafik</strong>.', note: '(Appen er 100% privat og sporer ingenting).', accept: 'Accepter', decline: 'Afvis' },
        no:      { title: 'Personvern',         body: 'Vi bruker informasjonskapsler for å analysere <strong>nettstedstrafikk</strong>.', note: '(Appen er 100% privat og sporer ingenting).', accept: 'Godta', decline: 'Avvis' },
        fi:      { title: 'Verkkosivuston tietosuoja', body: 'Käytämme evästeitä <strong>verkkosivuliikenteen</strong> analysointiin.', note: '(Sovellus itse on 100-prosenttisesti yksityinen eikä seuraa mitään).', accept: 'Hyväksy', decline: 'Hylkää' },
        tr:      { title: 'Web Sitesi Gizliliği', body: '<strong>Web sitesi trafiğini</strong> analiz etmek için çerezler kullanıyoruz.', note: '(Uygulamanın kendisi %100 özeldir ve hiçbir şeyi izlemez).', accept: 'Kabul Et', decline: 'Reddet' },
        ko:      { title: '웹사이트 개인정보',   body: '<strong>웹사이트 트래픽</strong>을 분석하기 위해 쿠키를 사용합니다.', note: '(앱 자체는 100% 비공개이며 어떠한 것도 추적하지 않습니다).', accept: '동의', decline: '거부' },
        ar:      { title: 'خصوصية الموقع',      body: 'نستخدم ملفات تعريف الارتباط لتحليل <strong>حركة مرور الموقع</strong>.', note: '(التطبيق نفسه خاص 100% ولا يتتبع أي شيء).', accept: 'قبول', decline: 'رفض' },
        th:      { title: 'ความเป็นส่วนตัวของเว็บไซต์', body: 'เราใช้คุกกี้เพื่อวิเคราะห์<strong>การเข้าชมเว็บไซต์</strong>', note: '(แอปเองเป็นส่วนตัว 100% และไม่ติดตามสิ่งใด)', accept: 'ยอมรับ', decline: 'ปฏิเสธ' },
        vi:      { title: 'Quyền riêng tư trang web', body: 'Chúng tôi sử dụng cookie để phân tích <strong>lưu lượng truy cập</strong>.', note: '(Bản thân ứng dụng hoàn toàn riêng tư và không theo dõi gì cả).', accept: 'Chấp nhận', decline: 'Từ chối' },
        id:      { title: 'Privasi Situs Web',  body: 'Kami menggunakan cookie untuk menganalisis <strong>lalu lintas situs web</strong>.', note: '(Aplikasi itu sendiri 100% pribadi dan tidak melacak apa pun).', accept: 'Terima', decline: 'Tolak' },
        'zh-Hans': { title: '网站隐私',          body: '我们使用 Cookie 来分析<strong>网站流量</strong>。', note: '（应用本身 100% 私密，不追踪任何信息）。', accept: '接受', decline: '拒绝' },
        'zh-Hant': { title: '網站隱私',          body: '我們使用 Cookie 來分析<strong>網站流量</strong>。', note: '（應用程式本身 100% 私密，不追蹤任何資訊）。', accept: '接受', decline: '拒絕' },
        ja:      { title: 'ウェブサイトのプライバシー', body: 'ウェブサイトのトラフィックを分析するためにCookieを使用しています。', note: '（アプリ自体は100%プライベートで何も追跡しません）。', accept: '同意する', decline: '拒否する' },
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
                background: rgba(17, 25, 40, 0.85); /* Glass dark */
                backdrop-filter: blur(16px);
                -webkit-backdrop-filter: blur(16px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 16px;
                padding: 20px;
                display: flex;
                flex-direction: column;
                gap: 16px;
                z-index: 9999;
                box-shadow: 0 20px 50px rgba(0,0,0,0.5);
                transform: translateY(150%);
                transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
                font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
            }
            
            #cookie-banner.visible {
                transform: translateY(0);
            }

            .cb-content {
                color: #e2e8f0; /* slate-200 */
                font-size: 0.9rem;
                line-height: 1.5;
            }

            .cb-title {
                font-weight: 600;
                color: white;
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
                border-radius: 99px;
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
                color: #94a3b8; /* slate-400 */
                border: 1px solid rgba(255,255,255,0.1);
            }

            .cb-btn-decline:hover {
                background-color: rgba(255,255,255,0.05);
                color: white;
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
})();
