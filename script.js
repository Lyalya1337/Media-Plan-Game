const platforms = [
    { 
        id: 0, 
        name: "PBD", 
        platform: "Web+Mobile",
        section: "OLV",
        format: "Видео",
        CPM: 280, 
        CTR: 0.5, 
        VTR: 70, 
        BR: 45, 
        CR: 0.1, 
        frequency: 3, 
        icon: "fas fa-video", 
        budgetLimit: 3000000,
        description: "Видеореклама на платформе PBD с широким охватом аудитории и возможностью создания кастомных сегментов.",
        formatExample: "https://downloader.disk.yandex.ru/preview/ee9a68ed587aa1195270095f5d7b18a7d4ade1261c9b677b4b326dfa4e9554ba/6825d7c1/Jmg0nweWjKXrafv3B_0gBZR5_CCLL0ZtSinPsaIJTX7HITBqLaE4rw8f04awKexnztoVz06trnk7o3SuUvNq_g%3D%3D?uid=0&filename=%D0%9F%D0%91%D0%94_OLV_%D0%92%D0%A2%D0%91_%D0%A1%D0%9C%D0%91_%D0%A4%D0%A0%D0%9A1_%D0%94%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%20%D0%B8%20%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D0%B3%D0%BE%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0_Desktop_In-stream_%D0%BC%D0%B0%D1%80%D1%82.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v3&size=1920x912"
    },
    { 
        id: 1, 
        name: "Digital Alliance", 
        platform: "SmartTV",
        section: "OLV",
        format: "Видео",
        CPM: 350, 
        CTR: 0, 
        VTR: 85, 
        BR: 0, 
        CR: 0, 
        frequency: 5, 
        icon: "fas fa-tv", 
        budgetLimit: 6000000,
        description: "Видеореклама на SmartTV через Digital Alliance.",
        formatExample: "https://downloader.disk.yandex.ru/preview/626aea01c0886a8647ce7fc727edd62fc0700532a40f8e6086f921774ddc5078/6825d7c1/0LjksPcx7Nbps0q9ekQw1CMPx78_RXSevhyaHwfLSKquSC4ehPg4L3XilUlODllNFSvrCvRkZVX5ZSPG3iQ4CQ%3D%3D?uid=0&filename=DA_C%D0%BC%D0%B0%D1%80%D1%82%20%D1%82%D0%B2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=1920x912"
    },
    { 
        id: 2, 
        name: "GPM", 
        platform: "Web+Mobile",
        section: "OLV",
        format: "Видео",
        CPM: 410, 
        CTR: 0.1, 
        VTR: 82, 
        BR: 55, 
        CR: 0.1, 
        frequency: 7, 
        icon: "fas fa-tv", 
        budgetLimit: 5500000,
        description: "Видеореклама на SmartTV в сети GPM (ТНТ, ТНТ4, Пятница, ТВ-3, 2х2, Суббота, МатчТВ).",
        formatExample: "https://downloader.disk.yandex.ru/preview/b07fc2fff0da1ddb9af2828480009fef1abc0195e6b89c3fee5baa07ed951d95/6825d7c1/ErVpWWJNTPDsxIuLc8-YP-JIBF9ajnhsnR8AthO-dILPcwZZNcK6_yeuQAPEiwyZiLvaZiqpq09RN4cci4YIhw%3D%3D?uid=0&filename=GPM_OLV_%D0%92%D0%A2%D0%91_%D0%A1%D0%9C%D0%91_%D0%A4%D0%A0%D0%9A_%D0%9F%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BC%D0%B5%D0%BD%D0%B5%D0%B4%D0%B6%D0%B5%D1%80_1%D0%9F%D0%A0.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=1920x912"
    },
    { 
        id: 3, 
        name: "Yandex", 
        platform: "Web+Mobile",
        section: "OLV",
        format: "Видео",
        CPM: 250, 
        CTR: 0.1, 
        VTR: 55, 
        BR: 50, 
        CR: 0.01, 
        frequency: 4, 
        icon: "fab fa-youtube", 
        budgetLimit: 5000000,
        description: "Видеореклама на платформе Яндекс.Видео.",
        formatExample: "https://downloader.disk.yandex.ru/preview/9dcc11df7719e5ee37cfecb66dbe942812c7444c209bab0ebc3e896a5e9b45ec/6825d7c1/-jawcspzAwjRYaz9WNw9j4ujm7Vbe5tx7nPOPPiZ3WwP4S341gK1N56og37UhXRNegTfrEkeOoc6UiO3BOHOlg%3D%3D?uid=0&filename=%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81_OLV_%D0%B4%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D1%8B_%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE_%D0%BC%D0%B0%D1%80%D1%82.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=1920x912"
    },
    { 
        id: 4, 
        name: "VK", 
        platform: "Web+Mobile",
        section: "OLV",
        format: "Видео",
        CPM: 300, 
        CTR: 1, 
        VTR: 70, 
        BR: 45, 
        CR: 0.1, 
        frequency: 3, 
        icon: "fab fa-vk", 
        budgetLimit: 4500000,
        description: "Видеореклама в социальной сети ВКонтакте.",
        formatExample: "https://downloader.disk.yandex.ru/preview/956e93c4aeb92f8b812b650fc21fb49ec6c6d57ff29e7c227a9403de54c1cd1e/6825d7c1/iBEoV69gsMUXat2HdRTZNp1rcSpODt1qFCHdugziplWzYO_TIwzZ9zIaJ3klEiIJq0N1La23QNB1Ojv3f50VLA%3D%3D?uid=0&filename=VK_post.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=1920x912"
    },
    { 
        id: 5, 
        name: "IVI", 
        platform: "SmartTV",
        section: "OLV",
        format: "Видео",
        CPM: 330, 
        CTR: 0, 
        VTR: 85, 
        BR: 0, 
        CR: 0, 
        frequency: 6, 
        icon: "fas fa-tv", 
        budgetLimit: 6000000,
        description: "Видеореклама на SmartTV через IVI.",
        formatExample: "https://downloader.disk.yandex.ru/preview/8756af8714edb316b94754e9c0d7e43ff40381de1cabee1a664f78acdc436727/6825d7c1/uCz2pL689Ewqer5nbVSZTVl3t0Wcpwcn9oXnIGSi3mW7s-kBFiywmJ6bjeKcnc3cALcfWd8Aa31luP8mlZGulg%3D%3D?uid=0&filename=Ivi_olv%201.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=1920x912"
    },
    { 
        id: 6, 
        name: "Avito", 
        platform: "Web+Mobile",
        section: "Баннеры",
        format: "Премиум",
        CPM: 220, 
        CTR: 0.15, 
        VTR: 0, 
        BR: 30, 
        CR: 0.2, 
        frequency: 4, 
        icon: "fas fa-ad", 
        budgetLimit: 4000000,
        description: "Различные форматы баннеров на платформе Avito.",
        formatExample: "https://downloader.disk.yandex.ru/preview/94be33dcdedb7473644fa98398868afb4fe59e77e1b9a18463856b80995826a7/6825d7c1/kNJTLLLDekSc_rKUl-YOqY15XtYjCdkrSN9iX3O4aIA9FvrQcJF_OOiQxycOCRi9_qKNB0G1niTZ6WBwz6Cwyg%3D%3D?uid=0&filename=%D0%90%D0%B2%D0%B8%D1%82%D0%BE_%D0%9F%D1%80%D0%B5%D0%BC%D0%B8%D1%83%D0%BC_%D0%9D%D0%B5%D0%B1%D0%BE%D1%81%D0%BA%D1%80%D0%B5%D0%B1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v3&size=1920x912"
    },
    { 
        id: 7, 
        name: "Banki.ru", 
        platform: "Web+Mobile",
        section: "Баннеры",
        format: "Предложение месяца",
        CPM: 400, 
        CTR: 0.5, 
        VTR: 0, 
        BR: 25, 
        CR: 5.5, 
        frequency: 5, 
        icon: "fas fa-money-bill-wave", 
        budgetLimit: 2000000,
        description: "Специальные баннерные предложения на Banki.ru.",
        formatExample: "https://downloader.disk.yandex.ru/preview/3ae2ed81fb24ef7f6955551c16d3949443c1cf9805001c347ab1ee75e3f677f5/6825d7c1/Hmci0oBXNg-E10wjQsy9B7eEgA1C0Y7jodKudCrh-k1XjGfbv1jsz7G1dWeCZgBFyvhswa3ZkfAVEMp66a77hw%3D%3D?uid=0&filename=Banki_%D0%9F%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BC%D0%B5%D1%81%D1%8F%D1%86%D0%B0.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v3&size=1920x912"
    },
    { 
        id: 8, 
        name: "PBD", 
        platform: "Web+Mobile",
        section: "Баннеры",
        format: "Premium Banner",
        CPM: 180, 
        CTR: 0.3, 
        VTR: 0, 
        BR: 35, 
        CR: 0.1, 
        frequency: 3.5, 
        icon: "fas fa-ad", 
        budgetLimit: 3000000,
        description: "Премиум баннеры на платформе PBD.",
        formatExample: "https://downloader.disk.yandex.ru/preview/8fcc2398b4c1e75135df63f09993f3d952014018bccae4cf3dd4b8ac180d45bb/6825d7c1/HtqlqCBNAti8PkngAQCzuQMNDXni_JvqvcyuhX7Te6t8jM8hktx7y6UqAaUDc_eG1_5_Rwkfkr9gDO-SKsLQ3Q%3D%3D?uid=0&filename=%D0%9F%D0%91%D0%94_%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80_%D0%92%D0%A2%D0%91_%D0%94%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%20%D0%B8%20%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D0%B3%D0%BE%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0_%D0%B4%D0%B5%D1%81%D0%BA%D1%82%D0%BE%D0%BF_%D0%BC%D0%B0%D1%80%D1%82.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v3&size=1920x912"
    },
    { 
        id: 9, 
        name: "Yandex", 
        platform: "Web+Mobile",
        section: "Баннеры",
        format: "РСЯ",
        CPM: 190, 
        CTR: 0.2, 
        VTR: 0, 
        BR: 35, 
        CR: 0.5, 
        frequency: 4, 
        icon: "fab fa-yandex", 
        budgetLimit: 4000000,
        description: "Баннерная реклама в рекламной сети Яндекса.",
        formatExample: "https://downloader.disk.yandex.ru/preview/637b7283fafed2c0d3f46077d2093c0250e295a14c433fc7382207f48e9fa3f5/6825d7c1/K5oEyqERfXrmKP-0T3zapw9mytLMsriXRrlqfnn9xSc3LqlrJILptQYInxaIuitUZRe3WVq48dwBf_773XwBmw%3D%3D?uid=0&filename=%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81_%D0%94%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D1%8B_%D0%91%D0%B0%D0%BD%D0%BD%D0%B5%D1%80_%D0%9C%D0%B0%D1%80%D1%82.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=1920x912"
    },
    { 
        id: 10, 
        name: "РБК", 
        platform: "Web+Mobile",
        section: "Баннеры",
        format: "",
        CPM: 390, 
        CTR: 0.1, 
        VTR: 0, 
        BR: 42, 
        CR: 0.6, 
        frequency: 6, 
        icon: "fas fa-newspaper", 
        budgetLimit: 4000000,
        description: "Брендированная реклама на РБК.",
        formatExample: "https://downloader.disk.yandex.ru/preview/fdc68ede2bd92d544531a6ecc7cd890a8ed31fe9d806068b2841e06e041e4bc3/6825d7c1/sLYT-8bxQWyw47o9Ay9kSbV3IFCD_MGMmbmkh-APxEY5cb2FL1GrmcF2ZqsPrBWoai2TjXPvjXLzwpEnkTNaug%3D%3D?uid=0&filename=%D0%A0%D0%91%D0%9A%20%D0%92%D0%A2%D0%91%202025%20%D0%A1%D0%9C%D0%91%20%D0%A4%D0%A0%D0%9A1%20%D0%94%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D1%8B%20100%D1%85500.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v3&size=1920x912"
    },
    { 
        id: 11, 
        name: "Rambler", 
        platform: "Web+Mobile",
        section: "",
        format: "Billboard",
        CPM: 300, 
        CTR: 0.15, 
        VTR: 0, 
        BR: 38, 
        CR: 5.0, 
        frequency: 3, 
        icon: "fas fa-ad", 
        budgetLimit: 3500000,
        description: "Билборд-баннеры на Rambler.",
        formatExample: "https://disk.yandex.ru/client/disk?idApp=client&dialog=slider&idDialog=%2Fdisk%2FRambler.png"
    },
    { 
        id: 12, 
        name: "Sravni", 
        platform: "Web+Mobile",
        section: "",
        format: "Сравнение",
        CPM: 300, 
        CTR: 0.2, 
        VTR: 0, 
        BR: 30, 
        CR: 0.5, 
        frequency: 4, 
        icon: "fas fa-balance-scale", 
        budgetLimit: 2500000,
        description: "Баннеры сравнения на Sravni.",
        formatExample: "https://disk.yandex.ru/client/disk?idApp=client&dialog=slider&idDialog=%2Fdisk%2FSravni.png"
    },
    { 
        id: 13, 
        name: "Kommersant.ru", 
        platform: "Web+Mobile",
        section: "Баннеры",
        format: "",
        CPM: 350, 
        CTR: 0.3, 
        VTR: 0, 
        BR: 35, 
        CR: 0.5, 
        frequency: 4, 
        icon: "fas fa-newspaper", 
        budgetLimit: 3500000,
        description: "Брендированная реклама на Kommersant.ru.",
        formatExample: "https://downloader.disk.yandex.ru/preview/2164d012d568ac052e3b92d0eba4882c8a004b2c921dfc675b18ff8a189f9d6c/6825d7c1/MtWNZe47viJSfrGvB_VL4OMYk0Q7JwMHOkAYKLtLZkQMKM_MXCDb_egANls5nnVrInY4w5LqK8TZQP1RsF-7eQ%3D%3D?uid=0&filename=%D0%9A%D0%BE%D0%BC%D0%BC%D0%B5%D1%80%D1%81%20%D0%92%D0%A2%D0%91%20%D0%B4%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%20%D0%B4%D0%BB%D1%8F%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0%20970%20250%20%D1%82%D0%BE%D0%BF.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=1920x912"
    },
    { 
        id: 14, 
        name: "AdSpend", 
        platform: "Web+Mobile",
        section: "Баннеры",
        format: "Баннеры",
        CPM: 280, 
        CTR: 1.1, 
        VTR: 0, 
        BR: 40, 
        CR: 0.3, 
        frequency: 2, 
        icon: "fas fa-ad", 
        budgetLimit: 2500000,
        description: "Баннерная реклама различных форматов на платформе AdSpend.",
        formatExample: "https://downloader.disk.yandex.ru/preview/fce39cd4bffc51def3b1fe80da3b6086a03376c4cda06b534424a7c99996c51c/6825d7c1/s5rA6EGU7cX0stsYe2KT9MXXUmlC-xQgwIYloKpecaQ169NhnqL8wuBa-Qk5gaJsu55IFLxq2pAYK4RbnNrGtA%3D%3D?uid=0&filename=%D0%90%D0%B4%D1%81%D0%BF%D0%B5%D0%BD%D0%B4%20%D0%94%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%20%D0%B8%20%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D0%B3%D0%BE%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0%20%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D1%8B%200104.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=1920x912"
    },
    { 
        id: 15, 
        name: "VK", 
        platform: "Web+Mobile",
        section: "Соц. Сети",
        format: "Промопост",
        CPM: 170, 
        CTR: 0.1, 
        VTR: 0, 
        BR: 35, 
        CR: 0.5, 
        frequency: 5, 
        icon: "fab fa-vk", 
        budgetLimit: 5000000,
        description: "Промопосты в социальной сети ВКонтакте.",
        formatExample: "https://downloader.disk.yandex.ru/preview/956e93c4aeb92f8b812b650fc21fb49ec6c6d57ff29e7c227a9403de54c1cd1e/6825d7c1/iBEoV69gsMUXat2HdRTZNp1rcSpODt1qFCHdugziplWzYO_TIwzZ9zIaJ3klEiIJq0N1La23QNB1Ojv3f50VLA%3D%3D?uid=0&filename=VK_post.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=1920x912"
    }, 
    { 
        id: 16, 
        name: "OK", 
        platform: "Web+Mobile",
        section: "Соц. Сети",
        format: "Медийный баннер",
        CPM: 180, 
        CTR: 0.1, 
        VTR: 0, 
        BR: 35, 
        CR: 0.01, 
        frequency: 3.5, 
        icon: "fab fa-odnoklassniki", 
        budgetLimit: 3000000,
        description: "Медийные баннеры в ленте OK.",
        formatExample: "https://downloader.disk.yandex.ru/preview/72f4db2af055021f63383197e85c89a0a8ca84fa2b4fe3f2b5f1dbbc815ba46d/6825d7c1/sLYT-8bxQWyw47o9Ay9kScKE-eS_4ENEYJe1z64eGIkANuurgfLzC1V4UiLzgg6Z9TExaXQ1MjI9XAMi9Fn4Ew%3D%3D?uid=0&filename=OK_%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80_%D0%BD%D0%BE%D1%8F%D0%B1%D1%80%D1%8C.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=1920x912"
    },
    { 
        id: 17, 
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
        formatExample: "https://downloader.disk.yandex.ru/preview/602e5866aec68b25a703edef4b60daca1a5896d40e963ed184b62b2e55315a18/6825d7c1/9PcUL7CrjRsJCQf_2lPVFCFZEn8GDhNUsiSmHltDb9PjK51U1u8-3T0frMjGcxxGola6sBTL81oruQnev18YBg%3D%3D?uid=0&filename=WB_%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%20%D0%BD%D0%B0%20%D0%B3%D0%B0%D0%BB%D0%B2%D0%BD%D0%BE%D0%B9.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=1920x912"
    },
    { 
        id: 18, 
        name: "OZON", 
        platform: "Web+Mobile",
        section: "Ecom",
        format: "Главная",
        CPM: 350, 
        CTR: 2.7, 
        VTR: 0, 
        BR: 40, 
        CR: 5.5, 
        frequency: 5, 
        icon: "fas fa-shopping-cart", 
        budgetLimit: 4500000,
        description: "Баннерная реклама на главной странице OZON.",
        formatExample: "https://downloader.disk.yandex.ru/preview/c1914573278277e161dfcb36a7352bf199e1a27b2749c145af70d63ded01ffb5/6825d7c1/EbFxLK-Vwo0YHgZkGiH56xLL3PXg7xlfDjmHsCLITz37AKDUYCo8Rxx0EDDn3-JrpWygwVKo64IqJIoVWCgT0w%3D%3D?uid=0&filename=Ozon_banners_%D0%94%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D1%8B_%D0%B4%D0%BB%D1%8F_%D0%BC%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE_%D0%B8_%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D0%B3%D0%BE_%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0_%D0%BC%D0%BE%D0%B1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=1920x912"
    }
];

let TOTAL_BUDGET = 15000000;
let selectedPlatforms = [];
let completedTasks = [];
let currentTaskIndex = 0;
let currentBrief = "reach";
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
    reach: {
        title: "Максимальный охват",
        description: "Уважаемые коллеги, в рамках кампании по повышению осведомленности о бренде ВТБ необходимо сформировать медиаплан с максимальным охватом целевой аудитории. Основные KPI: охват - не менее 12 000 000 пользователей при бюджете 15 000 000 рублей. Просим учитывать частоту контактов при выборе площадок.",
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
                description: "Охват ≥ 12 000 000", 
                condition: (stats) => stats.reach >= 12000000,
                icon: "fas fa-users",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: увеличьте охват, выбирая площадки с более низким CPM и CPT",
                metrics: ["reach"]
            },
            { 
                id: 3,
                description: "CPT ≤ 1100 ₽", 
                condition: (stats) => stats.avgCPT <= 1100,
                icon: "fas fa-tag",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: снизьте стоимость 1000 единиц охвата, выбирая площадки с хорошим соотношением цены и охвата",
                metrics: ["avgCPT"]
            },
            { 
                id: 4,
                description: "CPM ≤ 200 ₽", 
                condition: (stats) => stats.avgCPM <= 200,
                icon: "fas fa-tag",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: снизьте средний CPM, комбинируя дорогие и дешевые площадки",
                metrics: ["avgCPM"]
            },
            { 
                id: 5,
                description: "Частота ≥ 5.5", 
                condition: (stats) => stats.avgFrequency >= 5.5,
                icon: "fas fa-redo",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: увеличьте среднюю частоту контактов, выбирая площадки с высокой частотой показа",
                metrics: ["avgFrequency"]
            }
        ]
    }
};

const randomEventsList = [
    {
        id: 3,
        title: "Обязательное включение Avito",
        content: `<div class="random-event-email">
            <div class="email-header">
                <span>От: Бизнес отдел</span>
                <span>Тема: Включение Avito в медиаплан</span>
            </div>
            <div class="email-subject">Коллеги, добрый день!</div>
            <div class="email-body">
                На последней конференции Авито показали интересные нововедения по работе с таргетингами.
                Давайте добавим их на тест в нашу ближайшую кампанию.
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
    selectBrief(currentBrief);
});

function selectBrief(briefType) {
    currentBrief = briefType;
    document.getElementById('brief-description').textContent = briefs[briefType].description;
    resetGameState();
    renderPlatforms();
    
    currentTaskIndex = 1;
    completedTasks = [1];
    
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
    
    const sectionOrder = ['OLV', 'Баннеры', 'Соц. Сети', 'Ecom'];
    
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
    
    // Проверяем, что площадки с таким ID нет в медиаплане
    if (selectedPlatforms.some(p => p.id == platformId)) {
        const platformElement = document.querySelector(`#platforms-content .platform[data-id="${platformId}"]`);
        if (platformElement && platformElement.style.display === 'none') {
            // Если площадка скрыта, значит она уже в медиаплане
            showWarning("Эта площадка уже добавлена в медиаплан");
            return;
        }
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
                    const cpt = reach > 0 ? Math.round((platform.budget / reach) * 1000) : 0;
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
                            <div class="stat-item">
                                <span class="stat-value">${platform.frequency}</span>
                                <span class="stat-label">Частота</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-value">${cpt} ₽</span>
                                <span class="stat-label">CPT</span>
                            </div>
                        </div>
                        <div class="platform-budget-controls">
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
    updateMetricsDisplay(stats);
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
    document.getElementById('close-event-modal').addEventListener('click', function() {
        updateMediaplan();
        modal.style.display = 'none';
    }, { once: true });
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
            
            if (randomEventsOccurred < 2 && Math.random() < 0.75) {
                const availableEvents = randomEventsList.filter(e => 
                    !randomEvents.includes(e.id)
                );
                
                if (availableEvents.length > 0) {
                    const randomEvent = availableEvents[Math.floor(Math.random() * availableEvents.length)];
                    const result = randomEvent.action();
                    
                    if (result) {
                        randomEvents.push(randomEvent.id);
                        randomEventsOccurred++;
                        document.getElementById('close-task-modal').addEventListener('click', function handler() {
                            setTimeout(() => {
                                showRandomEvent(randomEvent);
                                updateMediaplan();
                                showNotification(`❗ Произошло случайное событие: ${result}`, "error");
                            }, 500);
                            
                            this.removeEventListener('click', handler);
                        }, { once: true });
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
