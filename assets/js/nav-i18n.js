/**
 * nav-i18n.js
 * On English-only pages (privacy, terms, blog posts), translates nav link labels
 * into the user's stored language preference (tdv_lang in localStorage).
 * Content stays English — only the nav labels change.
 * Works on both desktop nav and mobile menu.
 */
(function () {
  'use strict';

  var NAV_LABELS = {
    en: {
      home: 'Home', features: 'Features', whyUs: 'Why Us', blog: 'Blog',
      whyIBuilt: 'Why I Built This', pricing: 'Pricing', faq: 'FAQ', privacy: 'Privacy'
    },
    es: {
      home: 'Inicio', features: 'Características', whyUs: 'Por Qué Nosotros', blog: 'Blog',
      whyIBuilt: 'Por Qué Lo Construí', pricing: 'Precios', faq: 'Preguntas Frecuentes', privacy: 'Privacidad'
    },
    fr: {
      home: 'Accueil', features: 'Fonctionnalités', whyUs: 'Pourquoi Nous', blog: 'Blog',
      whyIBuilt: 'Pourquoi Je L\'ai Créé', pricing: 'Tarifs', faq: 'FAQ', privacy: 'Confidentialité'
    },
    de: {
      home: 'Startseite', features: 'Funktionen', whyUs: 'Warum Wir', blog: 'Blog',
      whyIBuilt: 'Warum Ich Das Gebaut Habe', pricing: 'Preise', faq: 'FAQ', privacy: 'Datenschutz'
    },
    it: {
      home: 'Home', features: 'Funzionalità', whyUs: 'Perché Noi', blog: 'Blog',
      whyIBuilt: 'Perché Ho Costruito Questo', pricing: 'Prezzi', faq: 'Domande Frequenti', privacy: 'Privacy'
    },
    pt: {
      home: 'Início', features: 'Funcionalidades', whyUs: 'Porquê Nós', blog: 'Blog',
      whyIBuilt: 'Porquê Construí Isto', pricing: 'Preços', faq: 'Perguntas Frequentes', privacy: 'Privacidade'
    },
    ru: {
      home: 'Главная', features: 'Функции', whyUs: 'Почему Мы', blog: 'Блог',
      whyIBuilt: 'Почему Я Это Создал', pricing: 'Цены', faq: 'Вопросы и Ответы', privacy: 'Конфиденциальность'
    },
    uk: {
      home: 'Головна', features: 'Функції', whyUs: 'Чому Ми', blog: 'Блог',
      whyIBuilt: 'Чому Я Це Створив', pricing: 'Ціни', faq: 'Питання та Відповіді', privacy: 'Конфіденційність'
    },
    pl: {
      home: 'Strona główna', features: 'Funkcje', whyUs: 'Dlaczego My', blog: 'Blog',
      whyIBuilt: 'Dlaczego To Zbudowałem', pricing: 'Cennik', faq: 'Pytania i Odpowiedzi', privacy: 'Prywatność'
    },
    nl: {
      home: 'Start', features: 'Functies', whyUs: 'Waarom Wij', blog: 'Blog',
      whyIBuilt: 'Waarom Ik Dit Bouwde', pricing: 'Prijzen', faq: 'Veelgestelde Vragen', privacy: 'Privacy'
    },
    sv: {
      home: 'Hem', features: 'Funktioner', whyUs: 'Varför Vi', blog: 'Blogg',
      whyIBuilt: 'Varför Jag Byggde Det', pricing: 'Priser', faq: 'Vanliga Frågor', privacy: 'Integritet'
    },
    da: {
      home: 'Startside', features: 'Funktioner', whyUs: 'Hvorfor Os', blog: 'Blog',
      whyIBuilt: 'Hvorfor Jeg Byggede Det', pricing: 'Priser', faq: 'Ofte Stillede Spørgsmål', privacy: 'Privatliv'
    },
    no: {
      home: 'Hjem', features: 'Funksjoner', whyUs: 'Hvorfor Oss', blog: 'Blogg',
      whyIBuilt: 'Hvorfor Jeg Bygde Det', pricing: 'Priser', faq: 'Vanlige Spørsmål', privacy: 'Personvern'
    },
    fi: {
      home: 'Etusivu', features: 'Ominaisuudet', whyUs: 'Miksi Me', blog: 'Blogi',
      whyIBuilt: 'Miksi Rakensin Tämän', pricing: 'Hinnat', faq: 'Usein Kysytyt Kysymykset', privacy: 'Tietosuoja'
    },
    tr: {
      home: 'Anasayfa', features: 'Özellikler', whyUs: 'Neden Biz', blog: 'Blog',
      whyIBuilt: 'Neden Bunu Yaptım', pricing: 'Fiyatlar', faq: 'Sıkça Sorulan Sorular', privacy: 'Gizlilik'
    },
    ko: {
      home: '홈', features: '기능', whyUs: '왜 우리인가', blog: '블로그',
      whyIBuilt: '제가 만든 이유', pricing: '요금제', faq: '자주 묻는 질문', privacy: '개인정보'
    },
    th: {
      home: 'หน้าแรก', features: 'ฟีเจอร์', whyUs: 'ทำไมต้องเรา', blog: 'บล็อก',
      whyIBuilt: 'ทำไมฉันถึงสร้างสิ่งนี้', pricing: 'ราคา', faq: 'คำถามที่พบบ่อย', privacy: 'ความเป็นส่วนตัว'
    },
    vi: {
      home: 'Trang Chủ', features: 'Tính Năng', whyUs: 'Tại Sao Chọn Chúng Tôi', blog: 'Blog',
      whyIBuilt: 'Tại Sao Tôi Xây Dựng Điều Này', pricing: 'Giá Cả', faq: 'Câu Hỏi Thường Gặp', privacy: 'Quyền Riêng Tư'
    },
    id: {
      home: 'Beranda', features: 'Fitur', whyUs: 'Mengapa Kami', blog: 'Blog',
      whyIBuilt: 'Mengapa Saya Membangun Ini', pricing: 'Harga', faq: 'Pertanyaan Umum', privacy: 'Privasi'
    },
    'zh-Hans': {
      home: '首页', features: '功能', whyUs: '为何选择我们', blog: '博客',
      whyIBuilt: '我为何创建这个', pricing: '定价', faq: '常见问题', privacy: '隐私'
    },
    'zh-Hant': {
      home: '首頁', features: '功能', whyUs: '為何選擇我們', blog: '部落格',
      whyIBuilt: '我為何創建這個', pricing: '定價', faq: '常見問題', privacy: '隱私'
    },
    ja: {
      home: 'ホーム', features: '機能', whyUs: '選ばれる理由', blog: 'ブログ',
      whyIBuilt: '作った理由', pricing: '料金', faq: 'よくある質問', privacy: 'プライバシー'
    }
  };

  // Maps aria-label patterns to label keys
  var LABEL_MAP = [
    { pattern: /Home page/i,             key: 'home' },
    { pattern: /Features page/i,         key: 'features' },
    { pattern: /Why Us page/i,           key: 'whyUs' },
    { pattern: /^Blog page/i,            key: 'blog' },
    { pattern: /Why I Built/i,           key: 'whyIBuilt' },
    { pattern: /Pricing/i,               key: 'pricing' },
    { pattern: /FAQ page/i,              key: 'faq' },
    { pattern: /Privacy/i,               key: 'privacy' },
  ];

  function applyNavLabels(labels) {
    // Find all nav links (desktop + mobile) by aria-label
    var links = document.querySelectorAll('a[aria-label]');
    links.forEach(function (link) {
      var ariaLabel = link.getAttribute('aria-label') || '';
      for (var i = 0; i < LABEL_MAP.length; i++) {
        if (LABEL_MAP[i].pattern.test(ariaLabel)) {
          var key = LABEL_MAP[i].key;
          if (labels[key]) {
            // Replace only the text node content, preserving any child elements
            var childNodes = link.childNodes;
            for (var j = 0; j < childNodes.length; j++) {
              if (childNodes[j].nodeType === 3 && childNodes[j].textContent.trim().length > 0) {
                childNodes[j].textContent = labels[key];
                break;
              }
            }
          }
          break;
        }
      }
    });
  }

  function init() {
    var stored = localStorage.getItem('tdv_lang');
    if (!stored || stored === 'en') { return; }

    var labels = NAV_LABELS[stored];
    if (!labels) { return; }

    applyNavLabels(labels);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
