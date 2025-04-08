const platforms = [
    { 
        id: 0, 
        name: "AdSpend", 
        platform: "Web+Mobile",
        section: "OLV",
        format: "Видео",
        CPM: 320, 
        CTR: 2.5, 
        VTR: 70, 
        BR: 45, 
        CR: 4.0, 
        frequency: 4, 
        icon: "fas fa-video", 
        budgetLimit: 3000000,
        description: "Видеореклама на платформе AdSpend с широким охватом аудитории.",
        formatExample: "https://example.com/adspend-video.jpg"
    },
    { 
        id: 1, 
        name: "AdSpend", 
        platform: "Web+Mobile",
        section: "Баннеры",
        format: "Баннеры разных ресайзов",
        CPM: 280, 
        CTR: 1.8, 
        VTR: 0, 
        BR: 40, 
        CR: 3.5, 
        frequency: 3, 
        icon: "fas fa-ad", 
        budgetLimit: 2500000,
        description: "Баннерная реклама различных форматов на платформе AdSpend.",
        formatExample: "https://example.com/adspend-banners.jpg"
    },
    { 
        id: 2, 
        name: "AstraLab", 
        platform: "Web+Mobile",
        section: "OLV",
        format: "Видео",
        CPM: 350, 
        CTR: 2.8, 
        VTR: 75, 
        BR: 50, 
        CR: 5.0, 
        frequency: 5, 
        icon: "fas fa-film", 
        budgetLimit: 4000000,
        description: "Видеореклама на платформе AstraLab с высоким охватом.",
        formatExample: "https://example.com/astralab-video.jpg"
    },
    { 
        id: 3, 
        name: "AstraLab", 
        platform: "Web+Mobile",
        section: "Баннеры",
        format: "Крупный заметный баннер",
        CPM: 300, 
        CTR: 2.0, 
        VTR: 0, 
        BR: 35, 
        CR: 4.5, 
        frequency: 4, 
        icon: "fas fa-bullhorn", 
        budgetLimit: 3500000,
        description: "Крупные заметные баннеры на платформе AstraLab.",
        formatExample: "https://example.com/astralab-banner.jpg"
    },
    { 
        id: 4, 
        name: "Avito", 
        platform: "Web+Mobile",
        section: "OLV",
        format: "Видео",
        CPM: 380, 
        CTR: 3.0, 
        VTR: 80, 
        BR: 55, 
        CR: 6.0, 
        frequency: 6, 
        icon: "fas fa-video", 
        budgetLimit: 5000000,
        description: "Видеореклама на платформе Avito с высокой конверсией.",
        formatExample: "https://example.com/avito-video.jpg"
    },
    { 
        id: 5, 
        name: "Avito", 
        platform: "Web+Mobile",
        section: "Баннеры",
        format: "300х600 +320х250+ native xl+root",
        CPM: 290, 
        CTR: 2.2, 
        VTR: 0, 
        BR: 30, 
        CR: 4.0, 
        frequency: 3, 
        icon: "fas fa-ad", 
        budgetLimit: 4000000,
        description: "Различные форматы баннеров на платформе Avito.",
        formatExample: "https://example.com/avito-banners.jpg"
    },
    { 
        id: 6, 
        name: "Banki.ru", 
        platform: "Web+Mobile",
        section: "Баннеры",
        format: "Предложение месяца",
        CPM: 310, 
        CTR: 2.5, 
        VTR: 0, 
        BR: 25, 
        CR: 5.5, 
        frequency: 4, 
        icon: "fas fa-money-bill-wave", 
        budgetLimit: 2000000,
        description: "Специальные баннерные предложения на Banki.ru.",
        formatExample: "https://example.com/banki-banner.jpg"
    },
    { 
        id: 7, 
        name: "Digital Alliance", 
        platform: "SmartTV",
        section: "OLV",
        format: "Видео",
        CPM: 400, 
        CTR: 0, 
        VTR: 85, 
        BR: 0, 
        CR: 0, 
        frequency: 7, 
        icon: "fas fa-tv", 
        budgetLimit: 6000000,
        description: "Видеореклама на SmartTV через Digital Alliance.",
        formatExample: "https://example.com/da-smarttv.jpg"
    },
    { 
        id: 8, 
        name: "Digital Audio", 
        platform: "Web+Mobile",
        section: "Audio",
        format: "Аудиоролик+ Баннер-компаньон",
        CPM: 250, 
        CTR: 1.5, 
        VTR: 0, 
        BR: 40, 
        CR: 3.0, 
        frequency: 2, 
        icon: "fas fa-music", 
        budgetLimit: 1500000,
        description: "Аудиореклама с баннером-компаньоном на Digital Audio.",
        formatExample: "https://example.com/digital-audio.jpg"
    },
    { 
        id: 9, 
        name: "Dzen.ru", 
        platform: "Web+Mobile",
        section: "Соц. Сети",
        format: "Медийный баннер",
        CPM: 270, 
        CTR: 2.0, 
        VTR: 0, 
        BR: 35, 
        CR: 4.0, 
        frequency: 3, 
        icon: "fab fa-vk", 
        budgetLimit: 3000000,
        description: "Медийные баннеры в ленте Дзен.",
        formatExample: "https://example.com/dzen-banner.jpg"
    },
    { 
        id: 10, 
        name: "Everest", 
        platform: "Web+Mobile",
        section: "OLV",
        format: "Видео",
        CPM: 360, 
        CTR: 2.7, 
        VTR: 75, 
        BR: 50, 
        CR: 5.0, 
        frequency: 5, 
        icon: "fas fa-video", 
        budgetLimit: 3500000,
        description: "Видеореклама на платформе Everest.",
        formatExample: "https://example.com/everest-video.jpg"
    },
    { 
        id: 11, 
        name: "Everest", 
        platform: "SmartTV",
        section: "OLV",
        format: "Видео",
        CPM: 420, 
        CTR: 0, 
        VTR: 80, 
        BR: 0, 
        CR: 0, 
        frequency: 8, 
        icon: "fas fa-tv", 
        budgetLimit: 5000000,
        description: "Видеореклама на SmartTV через Everest.",
        formatExample: "https://example.com/everest-smarttv.jpg"
    },
    { 
        id: 12, 
        name: "Forbes.ru", 
        platform: "Web+Mobile",
        section: "OLV",
        format: "Видео",
        CPM: 450, 
        CTR: 3.0, 
        VTR: 70, 
        BR: 55, 
        CR: 6.5, 
        frequency: 6, 
        icon: "fas fa-video", 
        budgetLimit: 4000000,
        description: "Видеореклама на Forbes.ru для премиальной аудитории.",
        formatExample: "https://example.com/forbes-video.jpg"
    },
    { 
        id: 13, 
        name: "Forbes.ru", 
        platform: "Web+Mobile",
        section: "Баннеры",
        format: "Баннер 300x600",
        CPM: 380, 
        CTR: 2.5, 
        VTR: 0, 
        BR: 40, 
        CR: 5.0, 
        frequency: 4, 
        icon: "fas fa-ad", 
        budgetLimit: 3000000,
        description: "Баннерная реклама на Forbes.ru.",
        formatExample: "https://example.com/forbes-banner.jpg"
    },
    { 
        id: 14, 
        name: "GPM", 
        platform: "SmartTV",
        section: "OLV",
        format: "Видео",
        CPM: 410, 
        CTR: 0, 
        VTR: 82, 
        BR: 0, 
        CR: 0, 
        frequency: 7, 
        icon: "fas fa-tv", 
        budgetLimit: 5500000,
        description: "Видеореклама на SmartTV через GPM.",
        formatExample: "https://example.com/gpm-smarttv.jpg"
    },
    { 
        id: 15, 
        name: "Habr.com", 
        platform: "Web+Mobile",
        section: "Баннеры",
        format: "300х600",
        CPM: 290, 
        CTR: 2.0, 
        VTR: 0, 
        BR: 30, 
        CR: 4.0, 
        frequency: 3, 
        icon: "fas fa-code", 
        budgetLimit: 2000000,
        description: "Баннерная реклама на Habr.com для IT-аудитории.",
        formatExample: "https://example.com/habr-banner.jpg"
    },
    { 
        id: 16, 
        name: "IVI", 
        platform: "SmartTV",
        section: "OLV",
        format: "Видео",
        CPM: 430, 
        CTR: 0, 
        VTR: 85, 
        BR: 0, 
        CR: 0, 
        frequency: 8, 
        icon: "fas fa-tv", 
        budgetLimit: 6000000,
        description: "Видеореклама на SmartTV через IVI.",
        formatExample: "https://example.com/ivi-smarttv.jpg"
    },
    { 
        id: 17, 
        name: "Kommersant.ru", 
        platform: "Web+Mobile",
        section: "Баннеры",
        format: "Брендирование",
        CPM: 370, 
        CTR: 2.3, 
        VTR: 0, 
        BR: 35, 
        CR: 5.0, 
        frequency: 4, 
        icon: "fas fa-newspaper", 
        budgetLimit: 3500000,
        description: "Брендированная реклама на Kommersant.ru.",
        formatExample: "https://example.com/kommersant-banner.jpg"
    },
    { 
        id: 18, 
        name: "MyTarget", 
        platform: "Web+Mobile",
        section: "OLV",
        format: "Видео",
        CPM: 340, 
        CTR: 2.6, 
        VTR: 72, 
        BR: 48, 
        CR: 4.8, 
        frequency: 5, 
        icon: "fas fa-video", 
        budgetLimit: 4000000,
        description: "Видеореклама в сети MyTarget.",
        formatExample: "https://example.com/mytarget-video.jpg"
    },
    { 
        id: 19, 
        name: "MyTarget", 
        platform: "Web+Mobile",
        section: "Баннеры",
        format: "Мультиформат",
        CPM: 300, 
        CTR: 2.1, 
        VTR: 0, 
        BR: 38, 
        CR: 4.2, 
        frequency: 4, 
        icon: "fas fa-ad", 
        budgetLimit: 3500000,
        description: "Мультиформатная баннерная реклама в сети MyTarget.",
        formatExample: "https://example.com/mytarget-banners.jpg"
    },
    { 
        id: 20, 
        name: "Mobidriven", 
        platform: "Mobile",
        section: "OLV",
        format: "Fullscreen video",
        CPM: 330, 
        CTR: 2.4, 
        VTR: 78, 
        BR: 45, 
        CR: 4.5, 
        frequency: 5, 
        icon: "fas fa-mobile-alt", 
        budgetLimit: 3000000,
        description: "Полноэкранное видео на мобильных устройствах через Mobidriven.",
        formatExample: "https://example.com/mobidriven-video.jpg"
    },
    { 
        id: 21, 
        name: "Mobidriven", 
        platform: "Mobile",
        section: "Баннеры",
        format: "Fullscreen",
        CPM: 280, 
        CTR: 1.9, 
        VTR: 0, 
        BR: 35, 
        CR: 3.8, 
        frequency: 3, 
        icon: "fas fa-mobile-alt", 
        budgetLimit: 2500000,
        description: "Полноэкранные баннеры на мобильных устройствах через Mobidriven.",
        formatExample: "https://example.com/mobidriven-banner.jpg"
    },
    { 
        id: 22, 
        name: "MTS", 
        platform: "Web+Mobile",
        section: "Соц. Сети",
        format: "TG Ads",
        CPM: 260, 
        CTR: 1.7, 
        VTR: 0, 
        BR: 30, 
        CR: 3.5, 
        frequency: 3, 
        icon: "fab fa-telegram", 
        budgetLimit: 2000000,
        description: "Реклама в Telegram-каналах через платформу MTS.",
        formatExample: "https://example.com/mts-telegram.jpg"
    },
    { 
        id: 23, 
        name: "OZON", 
        platform: "Web+Mobile",
        section: "Ecom",
        format: "Баннер на Главной",
        CPM: 350, 
        CTR: 2.7, 
        VTR: 0, 
        BR: 40, 
        CR: 5.5, 
        frequency: 5, 
        icon: "fas fa-shopping-cart", 
        budgetLimit: 4500000,
        description: "Баннерная реклама на главной странице OZON.",
        formatExample: "https://example.com/ozon-banner.jpg"
    },
    { 
        id: 24, 
        name: "Plazkart", 
        platform: "Web+Mobile",
        section: "Баннеры",
        format: "Premium Banner",
        CPM: 320, 
        CTR: 2.3, 
        VTR: 0, 
        BR: 35, 
        CR: 4.8, 
        frequency: 4, 
        icon: "fas fa-ad", 
        budgetLimit: 3000000,
        description: "Премиум баннеры на платформе Plazkart.",
        formatExample: "https://example.com/plazkart-banner.jpg"
    },
    { 
        id: 25, 
        name: "Rambler", 
        platform: "Web+Mobile",
        section: "Баннеры",
        format: "Billboard",
        CPM: 340, 
        CTR: 2.4, 
        VTR: 0, 
        BR: 38, 
        CR: 5.0, 
        frequency: 5, 
        icon: "fas fa-ad", 
        budgetLimit: 3500000,
        description: "Билборд-баннеры на Rambler.",
        formatExample: "https://example.com/rambler-banner.jpg"
    },
    { 
        id: 26, 
        name: "Rbc.ru", 
        platform: "Web+Mobile",
        section: "Баннеры",
        format: "Брендирование",
        CPM: 390, 
        CTR: 2.8, 
        VTR: 0, 
        BR: 42, 
        CR: 6.0, 
        frequency: 6, 
        icon: "fas fa-newspaper", 
        budgetLimit: 4000000,
        description: "Брендированная реклама на RBC.ru.",
        formatExample: "https://example.com/rbc-banner.jpg"
    },
    { 
        id: 27, 
        name: "Unisound", 
        platform: "Web+Mobile",
        section: "Audio",
        format: "Аудиоролик + баннер-компаньон",
        CPM: 240, 
        CTR: 1.4, 
        VTR: 0, 
        BR: 38, 
        CR: 3.0, 
        frequency: 2, 
        icon: "fas fa-microphone", 
        budgetLimit: 1800000,
        description: "Аудиореклама с баннером-компаньоном на Unisound.",
        formatExample: "https://example.com/unisound-audio.jpg"
    },
    { 
        id: 28, 
        name: "VK", 
        platform: "Web+Mobile",
        section: "Соц. Сети",
        format: "Промопост",
        CPM: 270, 
        CTR: 2.0, 
        VTR: 0, 
        BR: 35, 
        CR: 4.5, 
        frequency: 4, 
        icon: "fab fa-vk", 
        budgetLimit: 5000000,
        description: "Промопосты в социальной сети ВКонтакте.",
        formatExample: "https://example.com/vk-promo.jpg"
    },
    { 
        id: 29, 
        name: "VK", 
        platform: "Web+Mobile",
        section: "Соц. Сети",
        format: "Видео",
        CPM: 330, 
        CTR: 2.5, 
        VTR: 70, 
        BR: 45, 
        CR: 5.0, 
        frequency: 5, 
        icon: "fab fa-vk", 
        budgetLimit: 4500000,
        description: "Видеореклама в социальной сети ВКонтакте.",
        formatExample: "https://example.com/vk-video.jpg"
    },
    { 
        id: 30, 
        name: "Wildberries", 
        platform: "Web+Mobile",
        section: "Ecom",
        format: "Баннер",
        CPM: 360, 
        CTR: 2.6, 
        VTR: 0, 
        BR: 40, 
        CR: 5.5, 
        frequency: 5, 
        icon: "fas fa-shopping-bag", 
        budgetLimit: 4000000,
        description: "Баннерная реклама на Wildberries.",
        formatExample: "https://example.com/wildberries-banner.jpg"
    },
    { 
        id: 31, 
        name: "Yabbi", 
        platform: "Mobile",
        section: "OLV",
        format: "Fullscreen video",
        CPM: 340, 
        CTR: 2.5, 
        VTR: 75, 
        BR: 45, 
        CR: 4.8, 
        frequency: 5, 
        icon: "fas fa-mobile-alt", 
        budgetLimit: 3500000,
        description: "Полноэкранное видео на мобильных устройствах через Yabbi.",
        formatExample: "https://example.com/yabbi-video.jpg"
    },
    { 
        id: 32, 
        name: "Yabbi", 
        platform: "Mobile",
        section: "Баннеры",
        format: "Fullscreen",
        CPM: 290, 
        CTR: 2.0, 
        VTR: 0, 
        BR: 35, 
        CR: 4.0, 
        frequency: 4, 
        icon: "fas fa-mobile-alt", 
        budgetLimit: 3000000,
        description: "Полноэкранные баннеры на мобильных устройствах через Yabbi.",
        formatExample: "https://example.com/yabbi-banner.jpg"
    },
    { 
        id: 33, 
        name: "Yandex", 
        platform: "Web+Mobile",
        section: "Поиск",
        format: "Поиск",
        CPM: 400, 
        CTR: 3.0, 
        VTR: 0, 
        BR: 30, 
        CR: 6.0, 
        frequency: 6, 
        icon: "fab fa-yandex", 
        budgetLimit: 6000000,
        description: "Контекстная реклама в поисковой выдаче Яндекса.",
        formatExample: "https://example.com/yandex-search.jpg"
    },
    { 
        id: 34, 
        name: "Yandex", 
        platform: "Web+Mobile",
        section: "OLV",
        format: "Видео",
        CPM: 370, 
        CTR: 2.8, 
        VTR: 75, 
        BR: 50, 
        CR: 5.5, 
        frequency: 6, 
        icon: "fab fa-youtube", 
        budgetLimit: 5000000,
        description: "Видеореклама на платформе Яндекс.Видео.",
        formatExample: "https://example.com/yandex-video.jpg"
    },
    { 
        id: 35, 
        name: "Yandex", 
        platform: "Web+Mobile",
        section: "Баннеры",
        format: "РСЯ",
        CPM: 310, 
        CTR: 2.3, 
        VTR: 0, 
        BR: 35, 
        CR: 4.5, 
        frequency: 4, 
        icon: "fab fa-yandex", 
        budgetLimit: 4000000,
        description: "Баннерная реклама в рекламной сети Яндекса.",
        formatExample: "https://example.com/yandex-banner.jpg"
    }
];

let TOTAL_BUDGET = 15000000;
let selectedPlatforms = [];
let completedTasks = [];
let currentTaskIndex = 0;
let currentBrief = null;
let tutorialStep = 1;
const totalTutorialSteps = 3;
let sectionChart = null;
let platformChart = null;
let selectedSection = 'all';
let selectedPlatformIds = [];
let currentPlatformInfoId = null;
let randomEvents = [];
let randomEventsOccurred = 0;
let eventTasks = [];

const briefs = {
    traffic: {
        title: "Трафик на сайт",
        description: "Уважаемые коллеги, в рамках маркетинговой кампании по продвижению нового инвестиционного продукта VTB необходимо сформировать медиаплан, направленный на генерацию трафика на сайт. Основные KPI: количество сеансов - не менее 2 000 000 при бюджете 15 000 000 рублей. Просим учесть показатели эффективности площадок при формировании плана.",
        tasks: [
            { 
                id: 1,
                description: "Реализовать бюджет (15 млн ₽)", 
                condition: (stats) => stats.totalSpent === TOTAL_BUDGET,
                icon: "fas fa-wallet",
                hint: "Используйте весь выделенный бюджет, распределив его между площадками",
                metrics: ["totalSpent"]
            },
            { 
                id: 2,
                description: "Сеансы ≥ 2 000 000", 
                condition: (stats) => stats.totalSessions >= 2000000,
                icon: "fas fa-user-clock",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: увеличьте количество сеансов, выбирая площадки с высоким CTR и низким BR (например, Яндекс.Поиск - CTR 3.0%, BR 30%)",
                metrics: ["totalSessions"]
            },
            { 
                id: 3,
                description: "CTR ≥ 1.5%", 
                condition: (stats) => stats.avgCTR >= 1.5,
                icon: "fas fa-percentage",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: обратите внимание на площадки с высоким CTR (например, Яндекс.Поиск - 3.0%, Яндекс.Видео - 2.8%, Forbes.ru - 3.0%)",
                metrics: ["avgCTR"]
            },
            { 
                id: 4,
                description: "CPC ≤ 16 ₽", 
                condition: (stats) => stats.avgCPC <= 16,
                icon: "fas fa-money-bill-wave",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: снизьте средний CPC, выбирая площадки с высоким CTR (CTR влияет на CPC - чем выше CTR, тем ниже CPC)",
                metrics: ["avgCPC"]
            },
            { 
                id: 5,
                description: "BR ≤ 40%", 
                condition: (stats) => stats.avgBR <= 40,
                icon: "fas fa-chart-bar",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: снизьте показатель отказов, исключив площадки с высоким BR (например, Яндекс.Видео - 50%, Forbes.ru - 55%)",
                metrics: ["avgBR"]
            }
        ]
    },
    reach: {
        title: "Максимальный охват",
        description: "Уважаемые коллеги, в рамках кампании по повышению осведомленности о бренде VTB необходимо сформировать медиаплан с максимальным охватом целевой аудитории. Основные KPI: охват - не менее 20 000 000 пользователей при бюджете 15 000 000 рублей. Просим учитывать частоту контактов при выборе площадок.",
        tasks: [
            { 
                id: 1,
                description: "Реализовать бюджет (15 млн ₽)", 
                condition: (stats) => stats.totalSpent === TOTAL_BUDGET,
                icon: "fas fa-wallet",
                hint: "Используйте весь выделенный бюджет, распределив его между площадками",
                metrics: ["totalSpent"]
            },
            { 
                id: 2,
                description: "Охват ≥ 5 000 000", 
                condition: (stats) => stats.reach >= 5000000,
                icon: "fas fa-users",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: увеличьте охват, выбирая площадки с высокой частотой показа (например, Яндекс.Поиск - частота 6, IVI - частота 8)",
                metrics: ["reach"]
            },
            { 
                id: 3,
                description: "CPT ≤ 800 ₽", 
                condition: (stats) => stats.avgCPT <= 800,
                icon: "fas fa-tag",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: снизьте стоимость 1000 единиц охвата, выбирая площадки с хорошим соотношением цены и охвата (например, Digital Audio - CPM 240₽, VK - CPM 270₽)",
                metrics: ["avgCPT"]
            },
            { 
                id: 4,
                description: "CPM ≤ 280 ₽", 
                condition: (stats) => stats.avgCPM <= 280,
                icon: "fas fa-tag",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: снизьте средний CPM, комбинируя дорогие и дешевые площадки (например, добавьте Digital Audio - 240₽ и VK - 270₽)",
                metrics: ["avgCPM"]
            },
            { 
                id: 5,
                description: "Частота ≥ 2", 
                condition: (stats) => stats.avgFrequency >= 2,
                icon: "fas fa-redo",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: увеличьте среднюю частоту контактов, выбирая площадки с высокой частотой показа (например, Яндекс.Поиск - частота 6, IVI - частота 8)",
                metrics: ["avgFrequency"]
            }
        ]
    },
    brandformance: {
        title: "Brandformance",
        description: "Уважаемые коллеги, в рамках комплексной кампании по продвижению бренда VTB необходимо сформировать медиаплан, сочетающий цели брендинга и performance. Требуется достичь всех KPI одновременно: охват, клики, конверсии при оптимальных ценовых показателях. Бюджет: 15 000 000 рублей.",
        tasks: [
            { 
                id: 1,
                description: "Реализовать бюджет (15 млн ₽)", 
                condition: (stats) => stats.totalSpent === TOTAL_BUDGET,
                icon: "fas fa-wallet",
                hint: "Используйте весь выделенный бюджет, распределив его между площадками",
                metrics: ["totalSpent"]
            },
            { 
                id: 2,
                description: "Охват ≥ 10 000 000", 
                condition: (stats) => stats.reach >= 10000000,
                icon: "fas fa-users",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: увеличьте охват, выбирая площадки с высокой частотой показа (например, Яндекс.Поиск - частота 6, IVI - частота 8)",
                metrics: ["reach"]
            },
            { 
                id: 3,
                description: "Клики ≥ 500 000", 
                condition: (stats) => stats.totalClicks >= 500000,
                icon: "fas fa-mouse-pointer",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: увеличьте количество кликов, выбирая площадки с высоким CTR (например, Яндекс.Поиск - 3.0%, Яндекс.Видео - 2.8%)",
                metrics: ["totalClicks"]
            },
            { 
                id: 4,
                description: "CPM ≤ 350 ₽", 
                condition: (stats) => stats.avgCPM <= 350,
                icon: "fas fa-tag",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: снизьте средний CPM, комбинируя дорогие и дешевые площадки (например, добавьте Digital Audio - 240₽ и VK - 270₽)",
                metrics: ["avgCPM"]
            },
            { 
                id: 5,
                description: "CPVisit ≤ 25 ₽", 
                condition: (stats) => stats.avgCPVisit <= 25,
                icon: "fas fa-user-check",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: снизьте стоимость посещения, выбирая площадки с низким BR (например, Banki.ru - BR 25%, Habr.com - BR 30%)",
                metrics: ["avgCPVisit"]
            },
            { 
                id: 6,
                description: "Конверсии ≥ 50 000", 
                condition: (stats) => stats.totalConversions >= 50000,
                icon: "fas fa-bullseye",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: увеличьте количество конверсий, выбирая площадки с высоким CR (например, Яндекс.Поиск - CR 6.0%, Forbes.ru - 6.5%)",
                metrics: ["totalConversions"]
            },
            { 
                id: 7,
                description: "Доля SmartTV ≥ 15%", 
                condition: (stats) => stats.smartTVShare >= 15,
                icon: "fas fa-tv",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: добавьте площадки SmartTV (например, IVI, Digital Alliance) для достижения требуемой доли",
                metrics: ["smartTVShare"]
            },
            { 
                id: 8,
                description: "Доля OLV ≤ 30%", 
                condition: (stats) => stats.olvShare <= 30,
                icon: "fas fa-video",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: уменьшите долю видеорекламы (OLV) в пользу других форматов",
                metrics: ["olvShare"]
            },
            { 
                id: 9,
                description: "TG Ads в плане", 
                condition: (stats) => stats.hasTGAds,
                icon: "fab fa-telegram",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: добавьте рекламу в Telegram (TG Ads) через платформу MTS",
                metrics: ["hasTGAds"]
            },
            { 
                id: 10,
                description: "Доля Ecom ≥ 10%", 
                condition: (stats) => stats.ecomShare >= 10,
                icon: "fas fa-shopping-cart",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: добавьте площадки Ecom (например, OZON, Wildberries) для достижения требуемой доли",
                metrics: ["ecomShare"]
            }
        ]
    }
};

const randomEventsList = [
    {
        id: 1,
        title: "Изменение условий Яндекса",
        content: `<div class="random-event-email">
            <div class="email-header">
                <span>От: Команда Яндекс</span>
                <span>Тема: Изменение условий размещения</span>
            </div>
            <div class="email-subject">Уважаемые партнеры!</div>
            <div class="email-body">
                В связи с изменениями рыночной ситуации вынуждены сообщить об изменении ценовой политики. 
                Стоимость размещения в наших рекламных форматах увеличивается в 2 раза. 
                Надеемся на ваше понимание и дальнейшее плодотворное сотрудничество.
            </div>
        </div>`,
        action: () => {
            platforms.filter(p => p.name === "Yandex").forEach(p => {
                p.CPM *= 2;
                p.budgetLimit *= 2;
            });
            updateAllPlatformCards();
            return "CPM размещений в Яндексе повышается в 2 раза";
        }
    },
    {
        id: 2,
        title: "Сокращение бюджета",
        content: `<div class="random-event-email">
            <div class="email-header">
                <span>От: Финансовый отдел VTB</span>
                <span>Тема: Корректировка бюджета</span>
            </div>
            <div class="email-subject">Коллеги, добрый день!</div>
            <div class="email-body">
                В связи с оптимизацией маркетинговых расходов бюджет кампании сокращается до 5 000 000 рублей. 
                Просим пересмотреть медиаплан с учетом новых бюджетных ограничений. 
                Все KPI также будут скорректированы пропорционально.
            </div>
        </div>`,
        action: () => {
            TOTAL_BUDGET = 5000000;
            if (currentBrief === "brandformance") {
                briefs.brandformance.tasks[1].condition = (stats) => stats.reach >= 3333333;
                briefs.brandformance.tasks[2].condition = (stats) => stats.totalClicks >= 166666;
                briefs.brandformance.tasks[5].condition = (stats) => stats.totalConversions >= 16666;
            }
            updateBudgetProgress();
            return "Общий бюджет снижается до 5 млн рублей, метрики для выполнения задач снижаются пропорционально";
        }
    },
    {
        id: 3,
        title: "Увеличение бюджета",
        content: `<div class="random-event-email">
            <div class="email-header">
                <span>От: Руководство VTB</span>
                <span>Тема: Увеличение бюджета кампании</span>
            </div>
            <div class="email-subject">Коллеги, отличные новости!</div>
            <div class="email-body">
                По итогам Digital Brand Day принято решение увеличить бюджет вашей кампании до 20 000 000 рублей. 
                Просим скорректировать медиаплан с учетом увеличенного бюджета и более амбициозных KPI.
            </div>
        </div>`,
        action: () => {
            TOTAL_BUDGET = 20000000;
            if (currentBrief === "brandformance") {
                briefs.brandformance.tasks[1].condition = (stats) => stats.reach >= 13333333;
                briefs.brandformance.tasks[2].condition = (stats) => stats.totalClicks >= 666666;
                briefs.brandformance.tasks[5].condition = (stats) => stats.totalConversions >= 66666;
            }
            updateBudgetProgress();
            return "Бюджет планирования увеличивается до 20 млн, метрики для выполнения задач увеличиваются пропорционально";
        }
    },
    {
        id: 4,
        title: "Обязательное включение Avito",
        content: `<div class="random-event-email">
            <div class="email-header">
                <span>От: Коммерческий отдел</span>
                <span>Тема: Включение Avito в медиаплан</span>
            </div>
            <div class="email-subject">Коллеги, добрый день!</div>
            <div class="email-body">
                По итогам переговоров с Avito достигнута договоренность о включении их площадки в наш медиаплан. 
                Просим обязательно предусмотреть размещение на Avito в рамках текущей кампании.
            </div>
        </div>`,
        action: () => {
            const newTask = {
                id: 11,
                description: "Avito в плане", 
                condition: (stats) => stats.hasAvito,
                icon: "fas fa-ad",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: добавьте площадку Avito в медиаплан",
                metrics: ["hasAvito"]
            };
            eventTasks.push(newTask);
            renderAllTasks();
            return "В медиаплане теперь обязательно должен присутствовать Avito";
        }
    },
    {
        id: 5,
        title: "Обязательное включение IVI",
        content: `<div class="random-event-email">
            <div class="email-header">
                <span>От: Креативный отдел</span>
                <span>Тема: Включение IVI в медиаплан</span>
            </div>
            <div class="email-subject">Коллеги!</div>
            <div class="email-body">
                Наши коллеги увидели очень интересную рекламу на IVI, которая идеально соответствует нашему бренду. 
                Просим обязательно включить IVI в медиаплан текущей кампании.
            </div>
        </div>`,
        action: () => {
            const newTask = {
                id: 12,
                description: "IVI в плане", 
                condition: (stats) => stats.hasIVI,
                icon: "fas fa-tv",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: добавьте площадку IVI в медиаплан",
                metrics: ["hasIVI"]
            };
            eventTasks.push(newTask);
            renderAllTasks();
            return "В плане теперь обязательно должен присутствовать IVI";
        }
    },
    {
        id: 6,
        title: "Исключение Dzen",
        content: `<div class="random-event-email">
            <div class="email-header">
                <span>От: Отдел аналитики</span>
                <span>Тема: Исключение Dzen из медиаплана</span>
            </div>
            <div class="email-subject">Коллеги, важная информация!</div>
            <div class="email-body">
                По данным последних исследований, аудитория Дзен состоит преимущественно из пользователей старшего возраста, 
                что не соответствует нашей целевой аудитории. Просим исключить Dzen из текущего медиаплана.
            </div>
        </div>`,
        action: () => {
            const hasDzen = selectedPlatforms.some(p => p.name === "Dzen.ru");
            if (hasDzen) {
                const newTask = {
                    id: 13,
                    description: "Без Dzen", 
                    condition: (stats) => !stats.hasDzen,
                    icon: "fab fa-vk",
                    hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: исключите площадку Dzen из медиаплана",
                    metrics: ["hasDzen"]
                };
                eventTasks.push(newTask);
                renderAllTasks();
                return "В плане не должно быть Dzen";
            }
            return null;
        }
    },
    {
        id: 7,
        title: "Исключение Ozon",
        content: `<div class="random-event-email">
            <div class="email-header">
                <span>От: Коммерческий отдел</span>
                <span>Тема: Изменения на Ozon</span>
            </div>
            <div class="email-subject">Коллеги, срочно!</div>
            <div class="email-body">
                Ozon официально объявил о сворачивании всех click-out форматов. 
                В связи с этим просим исключить Ozon из текущего медиаплана, 
                так как мы не сможем отслеживать эффективность размещений.
            </div>
        </div>`,
        action: () => {
            const hasOzon = selectedPlatforms.some(p => p.name === "OZON");
            if (hasOzon) {
                const newTask = {
                    id: 14,
                    description: "Без Ozon", 
                    condition: (stats) => !stats.hasOzon,
                    icon: "fas fa-shopping-cart",
                    hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: исключите площадку Ozon из медиаплана",
                    metrics: ["hasOzon"]
                };
                eventTasks.push(newTask);
                renderAllTasks();
                return "В плане не должно быть Ozon";
            }
            return null;
        }
    },
    {
        id: 8,
        title: "Общее повышение цен",
        content: `<div class="random-event-email">
            <div class="email-header">
                <span>От: Финансовый отдел</span>
                <span>Тема: Корректировка цен</span>
            </div>
            <div class="email-subject">Коллеги, инфляция!</div>
            <div class="email-body">
                В связи с общим ростом цен на рекламные размещения все площадки повысили свои CPM на 20%. 
                Просим пересчитать медиаплан с учетом новых ценовых условий.
            </div>
        </div>`,
        action: () => {
            platforms.forEach(p => {
                p.CPM = Math.round(p.CPM * 1.2);
                p.budgetLimit = Math.round(p.budgetLimit * 1.2);
            });
            updateAllPlatformCards();
            if (currentBrief === "brandformance") {
                briefs.brandformance.tasks[3].condition = (stats) => stats.avgCPM <= 420;
            }
            return "Все CPM повышаются на 20%";
        }
    }
];

function updateAllPlatformCards() {
    renderPlatforms();
    updateMediaplan();
}

function initGame() {
    initModals();
    showTutorial();
}

function showTutorial() {
    const modal = document.getElementById('tutorial-modal');
    modal.style.display = 'block';
    
    document.getElementById('step-counter').textContent = `Шаг ${tutorialStep} из ${totalTutorialSteps}`;
    
    if (tutorialStep === 1) {
        document.getElementById('prev-step').style.display = 'none';
    } else {
        document.getElementById('prev-step').style.display = 'inline-block';
    }
    
    if (tutorialStep === totalTutorialSteps) {
        document.getElementById('next-step').style.display = 'none';
        document.getElementById('skip-tutorial').style.display = 'inline-block';
    } else {
        document.getElementById('next-step').style.display = 'inline-block';
        document.getElementById('skip-tutorial').style.display = 'none';
    }
    
    document.querySelectorAll('.tutorial-step').forEach(step => {
        step.classList.remove('active');
        if (parseInt(step.dataset.step) === tutorialStep) {
            step.classList.add('active');
        }
    });
}

document.getElementById('next-step').addEventListener('click', function() {
    if (tutorialStep < totalTutorialSteps) {
        tutorialStep++;
        showTutorial();
    }
});

document.getElementById('prev-step').addEventListener('click', function() {
    if (tutorialStep > 1) {
        tutorialStep--;
        showTutorial();
    }
});

document.getElementById('skip-tutorial').addEventListener('click', function() {
    document.getElementById('tutorial-modal').style.display = 'none';
    showBriefSelection();
});

function showBriefSelection() {
    const modal = document.getElementById('brief-selection-modal');
    modal.style.display = 'block';

    document.querySelectorAll('.brief-option').forEach(option => {
        option.addEventListener('click', function() {
            const briefType = this.dataset.brief;
            selectBrief(briefType);
            modal.style.display = 'none';
        });
    });
}

function selectBrief(briefType) {
    currentBrief = briefType;
    document.getElementById('brief-description').textContent = briefs[briefType].description;
    resetGameState();
    renderPlatforms();
    
    if (briefType === "traffic" || briefType === "reach") {
        currentTaskIndex = 1;
        completedTasks = [1];
    } else {
        currentTaskIndex = 0;
        completedTasks = [];
    }
    
    renderAllTasks();
    setupDragAndDrop();
    setupEventListeners();
    updateBudgetProgress();
}

function resetGameState() {
    selectedPlatforms = [];
    completedTasks = [];
    currentTaskIndex = 0;
    selectedPlatformIds = [];
    randomEvents = [];
    randomEventsOccurred = 0;
    eventTasks = [];
    TOTAL_BUDGET = 15000000;
    const mediaplan = document.getElementById("mediaplan");
    mediaplan.classList.remove("has-platforms");
    updateBudgetProgress();
    updateCharts();
}

function initModals() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        const span = modal.querySelector('.close');
        if (span) {
            span.onclick = function() {
                modal.style.display = "none";
            }
        }
    });
    
    window.onclick = function(event) {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
    
    document.getElementById('understand-btn').addEventListener('click', function() {
        document.getElementById('stats-info-modal').style.display = 'none';
    });
    
    document.getElementById('close-task-modal').addEventListener('click', function() {
        document.getElementById('new-task-modal').style.display = 'none';
    });
    
    document.getElementById('close-success-modal').addEventListener('click', function() {
        document.getElementById('success-modal').style.display = 'none';
    });
    
    document.getElementById('close-event-modal').addEventListener('click', function() {
        document.getElementById('random-event-modal').style.display = 'none';
    });
    
    document.getElementById('show-stats-info').addEventListener('click', function() {
        document.getElementById('stats-info-modal').style.display = 'block';
    });

    document.getElementById('add-platform-from-info').addEventListener('click', function() {
        if (currentPlatformInfoId !== null) {
            addPlatformToMediaplan(currentPlatformInfoId);
            document.getElementById('platform-info-modal').style.display = 'none';
        }
    });
}

function setupEventListeners() {
    document.getElementById("check-task").addEventListener("click", checkCurrentTask);
    document.getElementById("reset-plan").addEventListener("click", resetMediaplan);
    document.getElementById("add-selected-platforms").addEventListener("click", addSelectedPlatformsToMediaplan);
    
    document.querySelectorAll('.section-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.section-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            selectedSection = this.dataset.section;
            filterPlatformsBySection();
        });
    });
}

function showPlatformInfo(platformId) {
    const platform = platforms.find(p => p.id == platformId);
    if (!platform) return;
    
    currentPlatformInfoId = platformId;
    
    document.getElementById("platform-info-title").textContent = `${platform.name} (${platform.format})`;
    
    const content = `
        <p><strong>Платформа:</strong> ${platform.platform}</p>
        <p><strong>Описание:</strong> ${platform.description}</p>
        <div class="platform-stats">
            <p><i class="fas fa-tag"></i> <strong>CPM:</strong> ${platform.CPM} ₽</p>
            ${platform.platform !== 'SmartTV' ? `<p><i class="fas fa-percentage"></i> <strong>CTR:</strong> ${platform.CTR}%</p>` : ''}
            ${platform.section === 'OLV' ? `<p><i class="fas fa-video"></i> <strong>VTR:</strong> ${platform.VTR}%</p>` : ''}
            ${platform.platform !== 'SmartTV' ? `<p><i class="fas fa-chart-bar"></i> <strong>BR:</strong> ${platform.BR}%</p>` : ''}
            ${platform.platform !== 'SmartTV' ? `<p><i class="fas fa-exchange-alt"></i> <strong>CR:</strong> ${platform.CR}%</p>` : ''}
            <p><i class="fas fa-redo"></i> <strong>Частота:</strong> ${platform.frequency}</p>
            <p><i class="fas fa-money-bill-wave"></i> <strong>Лимит бюджета:</strong> ${platform.budgetLimit.toLocaleString()} ₽</p>
        </div>
    `;
    
    document.getElementById("platform-info-content").innerHTML = content;
    
    const formatExample = document.getElementById("platform-format-example");
    formatExample.innerHTML = `
        <div class="platform-format-example">
            <p><strong>Пример формата "${platform.format}":</strong></p>
            <img src="${platform.formatExample}" alt="${platform.format}" onerror="this.style.display='none'">
        </div>
    `;
    
    document.getElementById("platform-info-modal").style.display = "block";
}

function filterPlatformsBySection() {
    const platformsContainer = document.getElementById("platforms-content");
    const sectionGroups = platformsContainer.querySelectorAll(".section-group");
    
    sectionGroups.forEach(group => {
        const sectionTitle = group.querySelector('.section-title').textContent;
        const isVisible = selectedSection === 'all' || sectionTitle === selectedSection;
        group.style.display = isVisible ? 'block' : 'none';
    });
}

function renderPlatforms() {
    const container = document.getElementById("platforms-content");
    container.innerHTML = '';
    
    const sectionOrder = ['OLV', 'Баннеры', 'Соц. Сети', 'Ecom', 'Audio'];
    
    const sections = {};
    platforms.forEach(platform => {
        if (!sections[platform.section]) {
            sections[platform.section] = [];
        }
        sections[platform.section].push(platform);
    });
    
    sectionOrder.forEach(section => {
        if (sections[section]) {
            const sectionEl = document.createElement("div");
            sectionEl.className = "section-group";
            sectionEl.innerHTML = `
                <div class="section-title">${section}</div>
                <div class="platforms-grid">
                    ${sections[section].map(platform => `
                        <div class="platform" draggable="true" data-id="${platform.id}">
                            <div class="platform-header">
                                <div class="platform-selector">
                                    <input type="checkbox" class="platform-checkbox" id="platform-${platform.id}" data-id="${platform.id}">
                                    <i class="${platform.icon}"></i>
                                    <span>${platform.name}</span>
                                </div>
                                <i class="fas fa-info-circle platform-info-btn" onclick="showPlatformInfo(${platform.id})"></i>
                            </div>
                            <small>Формат: ${platform.format}</small>
                            <small>Платформа: ${platform.platform}</small>
                            <small>CPM: ${platform.CPM} ₽ ${platform.platform !== 'SmartTV' ? `| CTR: ${platform.CTR}%` : ''}</small>
                            <small>Частота: ${platform.frequency} | Лимит: ${(platform.budgetLimit/1000000).toFixed(1)}M ₽</small>
                        </div>
                    `).join('')}
                </div>
            `;
            container.appendChild(sectionEl);
        }
    });
    
    document.querySelectorAll('.platform-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const platformId = parseInt(this.dataset.id);
            if (this.checked) {
                if (!selectedPlatformIds.includes(platformId)) {
                    selectedPlatformIds.push(platformId);
                }
            } else {
                selectedPlatformIds = selectedPlatformIds.filter(id => id !== platformId);
            }
            
            const addButton = document.getElementById('add-selected-platforms');
            if (selectedPlatformIds.length > 0) {
                addButton.style.display = 'inline-flex';
            } else {
                addButton.style.display = 'none';
            }
        });
    });
    
    filterPlatformsBySection();
}

function addSelectedPlatformsToMediaplan() {
    if (selectedPlatformIds.length === 0) return;
    
    selectedPlatformIds.forEach(platformId => {
        addPlatformToMediaplan(platformId);
    });
    
    selectedPlatformIds = [];
    document.getElementById('add-selected-platforms').style.display = 'none';
    
    document.querySelectorAll('.platform-checkbox').forEach(checkbox => {
        checkbox.checked = false;
    });
}

function renderAllTasks() {
    if (!currentBrief) return;
    
    const container = document.getElementById("tasks-container");
    container.innerHTML = "";
    
    briefs[currentBrief].tasks.forEach((task, index) => {
        if (index <= currentTaskIndex || completedTasks.includes(task.id)) {
            const taskEl = document.createElement("div");
            taskEl.className = `task-item ${completedTasks.includes(task.id) ? 'completed' : ''}`;
            taskEl.dataset.taskId = task.id;
            taskEl.innerHTML = `
                <i class="${task.icon}"></i>
                <span class="task-text">${task.description}</span>
                <span class="task-status"></span>
            `;
            container.appendChild(taskEl);
        }
    });
    
    if (eventTasks.length > 0) {
        const eventTasksHeader = document.createElement("h4");
        eventTasksHeader.textContent = "Доп. пожелания";
        eventTasksHeader.style.marginTop = "20px";
        container.appendChild(eventTasksHeader);
        
        eventTasks.forEach(task => {
            const taskEl = document.createElement("div");
            taskEl.className = "task-item";
            taskEl.dataset.taskId = task.id;
            taskEl.innerHTML = `
                <i class="${task.icon}"></i>
                <span class="task-text">${task.description}</span>
                <span class="task-status"></span>
            `;
            container.appendChild(taskEl);
        });
    }
}

function setupDragAndDrop() {
    const mediaplan = document.getElementById("mediaplan");

    document.querySelectorAll("#platforms-content .platform").forEach(platform => {
        platform.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", platform.dataset.id);
            platform.classList.add("dragging");
        });

        platform.addEventListener("dragend", () => {
            platform.classList.remove("dragging");
        });
    });

    mediaplan.addEventListener("dragover", (e) => {
        e.preventDefault();
        mediaplan.classList.add("drop-zone");
    });

    mediaplan.addEventListener("dragleave", () => {
        mediaplan.classList.remove("drop-zone");
    });

    mediaplan.addEventListener("drop", (e) => {
        e.preventDefault();
        mediaplan.classList.remove("drop-zone");
        const platformId = e.dataTransfer.getData("text/plain");
        addPlatformToMediaplan(platformId);
    });
}

function addPlatformToMediaplan(platformId) {
    const platform = platforms.find(p => p.id == platformId);
    
    if (!platform) return;
    
    if (selectedPlatforms.some(p => p.id == platformId)) {
        showWarning("Эта площадка уже добавлена в медиаплан");
        return;
    }
    
    const defaultBudget = Math.min(
        Math.max(50000, Math.floor(platform.budgetLimit * 0.1 / 50000) * 50000),
        platform.budgetLimit
    );
    
    const platformCopy = {...platform, budget: defaultBudget};
    selectedPlatforms.push(platformCopy);
    updateMediaplan();
    
    const platformElement = document.querySelector(`#platforms-content .platform[data-id="${platformId}"]`);
    if (platformElement) {
        platformElement.style.display = 'none';
    }
}

function updatePlatformBudget(platformId, newBudget) {
    const platform = selectedPlatforms.find(p => p.id == platformId);
    if (!platform) return false;
    
    const originalPlatform = platforms.find(p => p.id == platformId);
    if (!originalPlatform) return false;
    
    if (newBudget > originalPlatform.budgetLimit) {
        showWarning(`Бюджет не может превышать лимит площадки (${originalPlatform.budgetLimit.toLocaleString()} ₽)`);
        return false;
    }
    
    const totalSpentWithoutCurrent = selectedPlatforms
        .filter(p => p.id != platformId)
        .reduce((sum, p) => sum + p.budget, 0);
    
    if (totalSpentWithoutCurrent + newBudget > TOTAL_BUDGET) {
        showWarning(`Превышение общего бюджета. Доступно: ${(TOTAL_BUDGET - totalSpentWithoutCurrent).toLocaleString()} ₽`);
        return false;
    }
    
    platform.budget = newBudget;
    updateMediaplan();
    return true;
}

function updatePlatformBudgetSlider(slider) {
    const platformId = parseInt(slider.dataset.id);
    const newBudget = parseInt(slider.value);
    const roundedBudget = Math.round(newBudget / 50000) * 50000;
    
    slider.value = roundedBudget;
    
    const budgetValueElement = slider.parentNode.querySelector('.budget-slider-value span:first-child');
    if (budgetValueElement) {
        budgetValueElement.textContent = roundedBudget.toLocaleString() + ' ₽';
    }
    
    const platformElement = slider.closest('.platform');
    if (platformElement) {
        const originalPlatform = platforms.find(p => p.id === platformId);
        const budgetPercentage = Math.min(100, (roundedBudget / originalPlatform.budgetLimit) * 100);
        platformElement.style.setProperty('--percentage', `${budgetPercentage}%`);
    }
}

function updatePlatformBudgetOnChange(slider) {
    const platformId = parseInt(slider.dataset.id);
    const newBudget = parseInt(slider.value);
    const roundedBudget = Math.round(newBudget / 50000) * 50000;
    updatePlatformBudget(platformId, roundedBudget);
}

function calculateStats() {
    if (selectedPlatforms.length === 0) return { 
        totalSpent: 0, 
        totalImpressions: 0, 
        totalClicks: 0,
        totalViews: 0, 
        totalSessions: 0, 
        reach: 0,
        avgCPM: 0, 
        avgCTR: 0, 
        avgCPC: 0, 
        avgCPT: 0,
        avgBR: 0, 
        avgFrequency: 0,
        totalConversions: 0,
        avgCR: 0,
        avgCPVisit: 0,
        avgCPA: 0,
        avgVTR: 0,
        smartTVShare: 0,
        olvShare: 0,
        ecomShare: 0,
        hasTGAds: false,
        hasAvito: false,
        hasIVI: false,
        hasDzen: false,
        hasOzon: false
    };

    const totalSpent = selectedPlatforms.reduce((sum, p) => sum + p.budget, 0);
    const totalImpressions = selectedPlatforms.reduce((sum, p) => sum + Math.floor((p.budget / p.CPM) * 1000), 0);
    const totalClicks = selectedPlatforms.reduce((sum, p) => {
        if (p.platform === 'SmartTV') return sum;
        return sum + Math.floor((p.budget / p.CPM) * 1000 * (p.CTR / 100));
    }, 0);
    const totalViews = selectedPlatforms.reduce((sum, p) => {
        if (p.section !== 'OLV') return sum;
        return sum + Math.floor((p.budget / p.CPM) * 1000 * (p.VTR / 100));
    }, 0);
    const totalSessions = selectedPlatforms.reduce((sum, p) => {
        if (p.platform === 'SmartTV') return sum;
        return sum + Math.floor((p.budget / p.CPM) * 1000 * (p.CTR / 100) * (1 - p.BR / 100));
    }, 0);
    const totalConversions = selectedPlatforms.reduce((sum, p) => {
        if (p.platform === 'SmartTV') return sum;
        const sessions = Math.floor((p.budget / p.CPM) * 1000 * (p.CTR / 100) * (1 - p.BR / 100));
        return sum + Math.floor(sessions * (p.CR / 100));
    }, 0);

    const reach = Math.floor(selectedPlatforms.reduce((sum, p) => {
        const impressions = Math.floor((p.budget / p.CPM) * 1000);
        return sum + (impressions / p.frequency);
    }, 0) * 0.7);

    const avgCPM = totalImpressions > 0 ? Math.round((totalSpent / totalImpressions) * 1000) : 0;
    const avgCTR = totalImpressions > 0 ? Math.round((totalClicks / totalImpressions) * 100 * 100) / 100 : 0;
    const avgCPC = totalClicks > 0 ? Math.round(totalSpent / totalClicks * 100) / 100 : 0;
    const avgCPT = reach > 0 ? Math.round((totalSpent / reach) * 1000 * 100) / 100 : 0;
    const avgBR = totalClicks > 0 ? Math.round(((totalClicks - totalSessions) / totalClicks) * 100 * 100) / 100 : 0;
    const avgFrequency = reach > 0 ? Math.round(totalImpressions / reach * 100) / 100 : 0;
    const avgCR = totalSessions > 0 ? Math.round((totalConversions / totalSessions) * 100 * 100) / 100 : 0;
    const avgCPVisit = totalSessions > 0 ? Math.round(totalSpent / totalSessions * 100) / 100 : 0;
    const avgCPA = totalConversions > 0 ? Math.round(totalSpent / totalConversions * 100) / 100 : 0;
    const avgVTR = selectedPlatforms.some(p => p.section === 'OLV') ? 
        Math.round((totalViews / selectedPlatforms.filter(p => p.section === 'OLV').reduce((sum, p) => sum + Math.floor((p.budget / p.CPM) * 1000), 0)) * 100 * 100) / 100 : 0;
    
    const smartTVBudget = selectedPlatforms.filter(p => p.platform === 'SmartTV').reduce((sum, p) => sum + p.budget, 0);
    const smartTVShare = totalSpent > 0 ? Math.round((smartTVBudget / totalSpent) * 100 * 10) / 10 : 0;
    
    const olvBudget = selectedPlatforms.filter(p => p.section === 'OLV').reduce((sum, p) => sum + p.budget, 0);
    const olvShare = totalSpent > 0 ? Math.round((olvBudget / totalSpent) * 100 * 10) / 10 : 0;
    
    const ecomBudget = selectedPlatforms.filter(p => p.section === 'Ecom').reduce((sum, p) => sum + p.budget, 0);
    const ecomShare = totalSpent > 0 ? Math.round((ecomBudget / totalSpent) * 100 * 10) / 10 : 0;
    
    const hasTGAds = selectedPlatforms.some(p => p.format === 'TG Ads');
    const hasAvito = selectedPlatforms.some(p => p.name === 'Avito');
    const hasIVI = selectedPlatforms.some(p => p.name === 'IVI');
    const hasDzen = selectedPlatforms.some(p => p.name === 'Dzen.ru');
    const hasOzon = selectedPlatforms.some(p => p.name === 'OZON');

    return { 
        totalSpent, 
        totalImpressions, 
        totalClicks, 
        totalViews, 
        totalSessions, 
        reach,
        totalConversions,
        avgCPM, 
        avgCTR, 
        avgCPC, 
        avgCPT,
        avgBR, 
        avgFrequency,
        avgCR,
        avgCPVisit,
        avgCPA,
        avgVTR,
        smartTVShare,
        olvShare,
        ecomShare,
        hasTGAds,
        hasAvito,
        hasIVI,
        hasDzen,
        hasOzon
    };
}

function updateCharts() {
    const sections = {};
    selectedPlatforms.forEach(platform => {
        if (!sections[platform.section]) {
            sections[platform.section] = 0;
        }
        sections[platform.section] += platform.budget;
    });
    
    const sectionLabels = Object.keys(sections);
    const sectionData = Object.values(sections);
    const totalBudget = sectionData.reduce((a, b) => a + b, 0);
    const sectionPercentages = sectionData.map(value => Math.round((value / totalBudget) * 100));
    
    const sectionColors = [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', 
        '#FF9F40', '#8AC24A', '#607D8B', '#E91E63', '#9C27B0'
    ];
    
    const sectionCtx = document.getElementById('section-canvas').getContext('2d');
    
    if (sectionChart) {
        sectionChart.destroy();
    }
    
    if (sectionLabels.length > 0) {
        sectionChart = new Chart(sectionCtx, {
            type: 'doughnut',
            data: {
                labels: sectionLabels,
                datasets: [{
                    data: sectionPercentages,
                    backgroundColor: sectionColors,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 12
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                const data = sectionData[context.dataIndex] || 0;
                                return `${label}: ${value}% (${data.toLocaleString()} ₽)`;
                            }
                        }
                    },
                    datalabels: {
                        display: true,
                        formatter: (value, ctx) => {
                            return `${value}%`;
                        },
                        color: '#fff',
                        font: {
                            weight: 'bold',
                            size: 12
                        }
                    }
                },
                cutout: '70%'
            },
            plugins: [ChartDataLabels]
        });
    } else {
        sectionCtx.clearRect(0, 0, sectionCtx.canvas.width, sectionCtx.canvas.height);
        sectionCtx.font = '16px Arial';
        sectionCtx.fillStyle = '#999';
        sectionCtx.textAlign = 'center';
        sectionCtx.fillText('Нет данных', sectionCtx.canvas.width / 2, sectionCtx.canvas.height / 2);
    }
    
    const platformsData = {};
    selectedPlatforms.forEach(platform => {
        if (platform.platform === 'Web+Mobile') {
            if (!platformsData['Web']) platformsData['Web'] = 0;
            if (!platformsData['Mobile']) platformsData['Mobile'] = 0;
            platformsData['Web'] += platform.budget / 2;
            platformsData['Mobile'] += platform.budget / 2;
        } else {
            if (!platformsData[platform.platform]) {
                platformsData[platform.platform] = 0;
            }
            platformsData[platform.platform] += platform.budget;
        }
    });
    
    const platformLabels = Object.keys(platformsData);
    const platformValues = Object.values(platformsData);
    const platformTotal = platformValues.reduce((a, b) => a + b, 0);
    const platformPercentages = platformValues.map(value => Math.round((value / platformTotal) * 100));
    
    const platformColors = [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', 
        '#FF9F40', '#8AC24A', '#607D8B', '#E91E63', '#9C27B0'
    ];
    
    const platformCtx = document.getElementById('platform-canvas').getContext('2d');
    
    if (platformChart) {
        platformChart.destroy();
    }
    
    if (platformLabels.length > 0) {
        platformChart = new Chart(platformCtx, {
            type: 'doughnut',
            data: {
                labels: platformLabels,
                datasets: [{
                    data: platformPercentages,
                    backgroundColor: platformColors,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 12
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                const data = platformValues[context.dataIndex] || 0;
                                return `${label}: ${value}% (${data.toLocaleString()} ₽)`;
                            }
                        }
                    },
                    datalabels: {
                        display: true,
                        formatter: (value, ctx) => {
                            return `${value}%`;
                        },
                        color: '#fff',
                        font: {
                            weight: 'bold',
                            size: 12
                        }
                    }
                },
                cutout: '70%'
            },
            plugins: [ChartDataLabels]
        });
    } else {
        platformCtx.clearRect(0, 0, platformCtx.canvas.width, platformCtx.canvas.height);
        platformCtx.font = '16px Arial';
        platformCtx.fillStyle = '#999';
        platformCtx.textAlign = 'center';
        platformCtx.fillText('Нет данных', platformCtx.canvas.width / 2, platformCtx.canvas.height / 2);
    }
}

function updateMediaplan() {
    const mediaplan = document.getElementById("mediaplan");
    const stats = calculateStats();
    
    if (selectedPlatforms.length === 0) {
        mediaplan.innerHTML = `
            <div class="section-header">
                <h3>Ваш медиаплан</h3>
            </div>
            <div class="empty-drop">Перетащите площадки сюда</div>
        `;
        document.querySelectorAll('#platforms-content .platform').forEach(el => {
            el.style.display = 'flex';
        });
        mediaplan.classList.remove('has-platforms');
        
        document.getElementById("key-metrics").innerHTML = '';
        document.getElementById("price-metrics").innerHTML = '';
        document.getElementById("postclick-metrics").innerHTML = '';
    } else {
        mediaplan.classList.add('has-platforms');
        mediaplan.innerHTML = `
            <div class="section-header">
                <h3>Ваш медиаплан</h3>
            </div>
            <div class="platforms-container">
                ${selectedPlatforms.map(platform => {
                    const impressions = Math.floor((platform.budget / platform.CPM) * 1000);
                    const clicks = platform.platform === 'SmartTV' ? 0 : Math.floor(impressions * (platform.CTR / 100));
                    const views = platform.section !== 'OLV' ? 0 : Math.floor(impressions * (platform.VTR / 100));
                    const sessions = platform.platform === 'SmartTV' ? 0 : Math.floor(clicks * (1 - platform.BR / 100));
                    const conversions = platform.platform === 'SmartTV' ? 0 : Math.floor(sessions * (platform.CR / 100));
                    const reach = Math.floor((impressions / platform.frequency) * 0.7);
                    const originalPlatform = platforms.find(p => p.id === platform.id);
                    const cpc = clicks > 0 ? Math.round(platform.budget / clicks * 100) / 100 : 0;
                    const cpvisit = sessions > 0 ? Math.round(platform.budget / sessions * 100) / 100 : 0;
                    const cpa = conversions > 0 ? Math.round(platform.budget / conversions * 100) / 100 : 0;
                    const budgetPercentage = Math.min(100, (platform.budget / originalPlatform.budgetLimit) * 100);
                    
                    return `
                        <div class="platform in-mediaplan" style="--percentage: ${budgetPercentage}%">
                            <div class="platform-header">
                                <i class="${platform.icon}"></i>
                                <span>${platform.name} (${platform.format})</span>
                                <button class="remove-btn" data-id="${platform.id}" title="Удалить">×</button>
                                <i class="fas fa-info-circle platform-info-btn" onclick="showPlatformInfo(${platform.id})"></i>
                            </div>
                            <div class="platform-stats-grid">
                                <div class="stat-item">
                                    <span class="stat-value">${platform.CPM} ₽</span>
                                    <span class="stat-label">CPM</span>
                                </div>
                                ${platform.platform !== 'SmartTV' ? `
                                <div class="stat-item">
                                    <span class="stat-value">${cpc} ₽</span>
                                    <span class="stat-label">CPC</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-value">${cpvisit} ₽</span>
                                    <span class="stat-label">CPVisit</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-value">${cpa} ₽</span>
                                    <span class="stat-label">CPA</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-value">${platform.CTR}%</span>
                                    <span class="stat-label">CTR</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-value">${platform.CR}%</span>
                                    <span class="stat-label">CR</span>
                                </div>
                                ` : ''}
                            </div>
                            <div class="budget-slider-container">
                                <input type="range" min="50000" max="${originalPlatform.budgetLimit}" value="${platform.budget}" 
                                    step="50000" class="budget-slider" data-id="${platform.id}"
                                    oninput="updatePlatformBudgetSlider(this)"
                                    onchange="updatePlatformBudgetOnChange(this)">
                                <div class="budget-slider-value">
                                    <span>${platform.budget.toLocaleString()} ₽</span>
                                    <span>Лимит: ${originalPlatform.budgetLimit.toLocaleString()} ₽</span>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
        
        document.querySelectorAll(".remove-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const id = e.target.dataset.id;
                selectedPlatforms = selectedPlatforms.filter(p => p.id != id);
                const platformElement = document.querySelector(`#platforms-content .platform[data-id="${id}"]`);
                if (platformElement) {
                    platformElement.style.display = 'flex';
                }
                updateMediaplan();
            });
        });
        
        updateMetricsDisplay(stats);
    }
    
    updateBudgetProgress();
    updateTasksStatus();
    updateCharts();
}

function updateMetricsDisplay(stats) {
    const keyMetrics = document.getElementById("key-metrics");
    const priceMetrics = document.getElementById("price-metrics");
    const postclickMetrics = document.getElementById("postclick-metrics");
    
    if (!keyMetrics || !priceMetrics || !postclickMetrics) return;
    
    keyMetrics.innerHTML = `
        <div class="metric-card" id="metric-totalSpent">
            <i class="fas fa-wallet"></i>
            <span class="metric-value">${stats.totalSpent.toLocaleString()} ₽</span>
            <span class="metric-label">Общий бюджет</span>
        </div>
        <div class="metric-card" id="metric-totalImpressions">
            <i class="fas fa-eye"></i>
            <span class="metric-value">${stats.totalImpressions.toLocaleString()}</span>
            <span class="metric-label">Показы</span>
        </div>
        ${selectedPlatforms.some(p => p.platform !== 'SmartTV') ? `
        <div class="metric-card" id="metric-totalClicks">
            <i class="fas fa-mouse-pointer"></i>
            <span class="metric-value">${stats.totalClicks.toLocaleString()}</span>
            <span class="metric-label">Клики</span>
        </div>
        ` : ''}
        ${selectedPlatforms.some(p => p.section === 'OLV') ? `
        <div class="metric-card" id="metric-totalViews">
            <i class="fas fa-video"></i>
            <span class="metric-value">${stats.totalViews.toLocaleString()}</span>
            <span class="metric-label">Просмотры</span>
        </div>
        ` : ''}
        <div class="metric-card" id="metric-reach">
            <i class="fas fa-users"></i>
            <span class="metric-value">${stats.reach.toLocaleString()}</span>
            <span class="metric-label">Охват</span>
        </div>
        ${selectedPlatforms.some(p => p.platform !== 'SmartTV') ? `
        <div class="metric-card" id="metric-totalSessions">
            <i class="fas fa-user-clock"></i>
            <span class="metric-value">${stats.totalSessions.toLocaleString()}</span>
            <span class="metric-label">Сеансы</span>
        </div>
        ` : ''}
        ${selectedPlatforms.some(p => p.platform !== 'SmartTV') ? `
        <div class="metric-card" id="metric-totalConversions">
            <i class="fas fa-bullseye"></i>
            <span class="metric-value">${stats.totalConversions.toLocaleString()}</span>
            <span class="metric-label">Конверсии</span>
        </div>
        ` : ''}
    `;
    
    priceMetrics.innerHTML = `
        <div class="metric-card" id="metric-avgCPM">
            <i class="fas fa-tag"></i>
            <span class="metric-value">${stats.avgCPM.toFixed(0)} ₽</span>
            <span class="metric-label">CPM</span>
        </div>
        ${selectedPlatforms.some(p => p.platform !== 'SmartTV') ? `
        <div class="metric-card" id="metric-avgCPC">
            <i class="fas fa-money-bill-wave"></i>
            <span class="metric-value">${stats.avgCPC.toFixed(0)} ₽</span>
            <span class="metric-label">CPC</span>
        </div>
        ` : ''}
        <div class="metric-card" id="metric-avgCPT">
            <i class="fas fa-tag"></i>
            <span class="metric-value">${stats.avgCPT.toFixed(0)} ₽</span>
            <span class="metric-label">CPT</span>
        </div>
        ${selectedPlatforms.some(p => p.platform !== 'SmartTV') ? `
        <div class="metric-card" id="metric-avgCPVisit">
            <i class="fas fa-user-check"></i>
            <span class="metric-value">${stats.avgCPVisit.toFixed(0)} ₽</span>
            <span class="metric-label">CPVisit</span>
        </div>
        ` : ''}
        ${selectedPlatforms.some(p => p.platform !== 'SmartTV') ? `
        <div class="metric-card" id="metric-avgCPA">
            <i class="fas fa-hand-holding-usd"></i>
            <span class="metric-value">${stats.avgCPA.toFixed(0)} ₽</span>
            <span class="metric-label">CPA</span>
        </div>
        ` : ''}
    `;
    
    postclickMetrics.innerHTML = `
        ${selectedPlatforms.some(p => p.platform !== 'SmartTV') ? `
        <div class="metric-card" id="metric-avgCTR">
            <i class="fas fa-percentage"></i>
            <span class="metric-value">${stats.avgCTR.toFixed(0)}%</span>
            <span class="stat-label">CTR</span>
        </div>
        ` : ''}
        ${selectedPlatforms.some(p => p.section === 'OLV') ? `
        <div class="metric-card" id="metric-avgVTR">
            <i class="fas fa-film"></i>
            <span class="metric-value">${stats.avgVTR.toFixed(0)}%</span>
            <span class="metric-label">VTR</span>
        </div>
        ` : ''}
        ${selectedPlatforms.some(p => p.platform !== 'SmartTV') ? `
        <div class="metric-card" id="metric-avgBR">
            <i class="fas fa-chart-bar"></i>
            <span class="metric-value">${stats.avgBR.toFixed(0)}%</span>
            <span class="metric-label">BR</span>
        </div>
        ` : ''}
        ${selectedPlatforms.some(p => p.platform !== 'SmartTV') ? `
        <div class="metric-card" id="metric-avgCR">
            <i class="fas fa-exchange-alt"></i>
            <span class="metric-value">${stats.avgCR.toFixed(0)}%</span>
            <span class="metric-label">CR</span>
        </div>
        ` : ''}
        <div class="metric-card" id="metric-avgFrequency">
            <i class="fas fa-redo"></i>
            <span class="metric-value">${stats.avgFrequency.toFixed(1)}</span>
            <span class="metric-label">Частота</span>
        </div>
    `;
    
    if (currentBrief && currentTaskIndex < briefs[currentBrief].tasks.length) {
        const currentTask = briefs[currentBrief].tasks[currentTaskIndex];
        currentTask.metrics.forEach(metric => {
            const metricElement = document.getElementById(`metric-${metric}`);
            if (metricElement) {
                metricElement.classList.add('highlight');
            }
        });
    }
    
    if ((currentBrief === "traffic" || currentBrief === "reach") && currentTaskIndex === 1) {
        const firstTask = briefs[currentBrief].tasks[1];
        firstTask.metrics.forEach(metric => {
            const metricElement = document.getElementById(`metric-${metric}`);
            if (metricElement) {
                metricElement.classList.add('highlight');
            }
        });
    }
    
    completedTasks.forEach(taskId => {
        const task = briefs[currentBrief].tasks.find(t => t.id === taskId);
        if (task) {
            task.metrics.forEach(metric => {
                const metricElement = document.getElementById(`metric-${metric}`);
                if (metricElement) {
                    metricElement.classList.remove('highlight');
                }
            });
        }
    });
}

function updateBudgetProgress() {
    const stats = calculateStats();
    const progress = (stats.totalSpent / TOTAL_BUDGET) * 100;
    
    document.querySelector('.budget-progress').style.width = `${progress}%`;
    document.querySelector('.budget-text').textContent = `Бюджет: ${stats.totalSpent.toLocaleString()} / ${TOTAL_BUDGET.toLocaleString()} ₽`;
}

function showNewTaskModal(task) {
    const modal = document.getElementById('new-task-modal');
    document.getElementById('new-task-content').innerHTML = `
        <p>${task.hint}</p>
    `;
    modal.style.display = 'block';
}

function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    modal.style.display = 'block';
}

function showRandomEvent(event) {
    const modal = document.getElementById('random-event-modal');
    document.getElementById('event-title').textContent = event.title;
    document.getElementById('event-content').innerHTML = event.content;
    modal.style.display = 'block';
}

function checkCurrentTask() {
    if (!currentBrief) return;
    
    const stats = calculateStats();
    const currentTask = briefs[currentBrief].tasks[currentTaskIndex];
    
    if (currentTask.condition(stats)) {
        if (!completedTasks.includes(currentTask.id)) {
            completedTasks.push(currentTask.id);
        }
        
        if (currentTaskIndex < briefs[currentBrief].tasks.length - 1) {
            currentTaskIndex++;
            renderAllTasks();
            
            setTimeout(() => {
                showNewTaskModal(briefs[currentBrief].tasks[currentTaskIndex]);
            }, 500);
            
            showNotification(`✅ Задание выполнено! Открыто новое требование`, "success");
            
            if (currentBrief === "brandformance" && randomEventsOccurred < 2 && Math.random() < 0.75) {
                const availableEvents = randomEventsList.filter(e => 
                    !randomEvents.includes(e.id) && 
                    (e.id !== 6 || stats.hasDzen) && 
                    (e.id !== 7 || stats.hasOzon)
                );
                
                if (availableEvents.length > 0) {
                    const randomEvent = availableEvents[Math.floor(Math.random() * availableEvents.length)];
                    const result = randomEvent.action();
                    
                    if (result) {
                        randomEvents.push(randomEvent.id);
                        randomEventsOccurred++;
                        setTimeout(() => {
                            showRandomEvent(randomEvent);
                            showNotification(`❗ Произошло случайное событие: ${result}`, "error");
                            updateMediaplan();
                        }, 1000);
                    }
                }
            }
        } else {
            showSuccessModal();
            showNotification("🎉 Поздравляем! Все задания выполнены!", "success");
        }
    } else {
        showNotification(`❌ Условие не выполнено: ${currentTask.hint}`, "error");
    }
    
    updateMetricsDisplay(stats);
    updateTasksStatus();
}

function resetMediaplan() {
    if (confirm("Вы уверены, что хотите очистить медиаплан?")) {
        selectedPlatforms = [];
        completedTasks = [];
        currentTaskIndex = 0;
        updateMediaplan();
        renderAllTasks();
    }
}

function showNotification(message, type) {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add("fade-out");
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

function showWarning(message) {
    const modal = document.getElementById("warning-modal");
    document.getElementById("warning-text").textContent = message;
    modal.style.display = "block";
}

function updateTasksStatus() {
    if (!currentBrief) return;
    
    const stats = calculateStats();
    
    briefs[currentBrief].tasks.forEach(task => {
        const taskElement = document.querySelector(`.task-item[data-task-id="${task.id}"]`);
        if (!taskElement) return;
        
        const isCompleted = task.condition(stats);
        
        if (isCompleted) {
            taskElement.classList.add("completed");
            if (!completedTasks.includes(task.id) && briefs[currentBrief].tasks.indexOf(task) <= currentTaskIndex) {
                completedTasks.push(task.id);
            }
        } else {
            taskElement.classList.remove("completed");
            if (completedTasks.includes(task.id)) {
                completedTasks = completedTasks.filter(id => id !== task.id);
            }
        }
    });

    eventTasks.forEach(task => {
        const taskElement = document.querySelector(`.task-item[data-task-id="${task.id}"]`);
        if (!taskElement) return;
        
        const isCompleted = task.condition(stats);
        
        if (isCompleted) {
            taskElement.classList.add("completed");
        } else {
            taskElement.classList.remove("completed");
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initGame();
});

window.showPlatformInfo = showPlatformInfo;
window.updatePlatformBudgetSlider = updatePlatformBudgetSlider;
window.updatePlatformBudgetOnChange = updatePlatformBudgetOnChange;