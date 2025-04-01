const platforms = [
    { 
        id: 0, 
        name: "ВКонтакте", 
        format: "Промопост",
        CPM: 250, 
        CTR: 1.8, 
        VTR: 65, 
        BR: 40, 
        CR: 4.5, 
        frequency: 3, 
        icon: "fab fa-vk", 
        budgetLimit: 4000000,
        description: "Крупнейшая социальная сеть в России с широким охватом аудитории всех возрастов. Эффективна для таргетированной рекламы и вирусного маркетинга.",
        formatExample: "https://example.com/vk-promo.jpg"
    },
    { 
        id: 1, 
        name: "Яндекс.Поиск", 
        format: "Поисковые системы",
        CPM: 400, 
        CTR: 2.5, 
        VTR: 0, 
        BR: 35, 
        CR: 6.0, 
        frequency: 5, 
        icon: "fab fa-yandex", 
        budgetLimit: 800000,
        description: "Контекстная реклама в поисковой выдаче Яндекса. Высокая конверсия благодаря соответствию запросам пользователей.",
        formatExample: "https://example.com/yandex-search.jpg"
    },
    { 
        id: 2, 
        name: "Яндекс.Видео", 
        format: "Multiroll",
        CPM: 350, 
        CTR: 3.2, 
        VTR: 75, 
        BR: 50, 
        CR: 5.0, 
        frequency: 4, 
        icon: "fab fa-youtube", 
        budgetLimit: 1500000,
        description: "Видеореклама в сервисе Яндекс.Видео. Высокий охват и вовлеченность аудитории.",
        formatExample: "https://example.com/yandex-video.jpg"
    },
    { 
        id: 3, 
        name: "Digital Alliance", 
        format: "Streaming",
        CPM: 180, 
        CTR: 1.2, 
        VTR: 60, 
        BR: 45, 
        CR: 3.8, 
        frequency: 2, 
        icon: "fas fa-ad", 
        budgetLimit: 3000000,
        description: "Рекламная сеть с широким охватом различных сайтов. Эффективна для масштабных кампаний.",
        formatExample: "https://example.com/digital-alliance.jpg"
    },
    { 
        id: 4, 
        name: "IVI", 
        format: "Preroll (SmartTV)",
        CPM: 320, 
        CTR: 2.8, 
        VTR: 70, 
        BR: 30, 
        CR: 4.0, 
        frequency: 6, 
        icon: "fas fa-film", 
        budgetLimit: 2000000,
        description: "Видеосервис с качественным контентом. Хорош для рекламы премиальных товаров.",
        formatExample: "https://example.com/ivi-preroll.jpg"
    },
    { 
        id: 5, 
        name: "Otclick", 
        format: "Баннеры",
        CPM: 280, 
        CTR: 1.5, 
        VTR: 55, 
        BR: 25, 
        CR: 3.5, 
        frequency: 3, 
        icon: "fas fa-mouse-pointer", 
        budgetLimit: 4000000,
        description: "Рекламная сеть с возможностью таргетинга по интересам.",
        formatExample: "https://example.com/otclick-banner.jpg"
    },
    { 
        id: 6, 
        name: "Adspectror", 
        format: "Баннер на главной SmartTV",
        CPM: 220, 
        CTR: 1.0, 
        VTR: 50, 
        BR: 20, 
        CR: 2.8, 
        frequency: 2, 
        icon: "fas fa-chart-line", 
        budgetLimit: 5000000,
        description: "Платформа с продвинутыми аналитическими инструментами.",
        formatExample: "https://example.com/adspectror.jpg"
    },
    { 
        id: 7, 
        name: "YABBI", 
        format: "Мобильный фулскрин",
        CPM: 380, 
        CTR: 2.0, 
        VTR: 68, 
        BR: 55, 
        CR: 5.5, 
        frequency: 4, 
        icon: "fas fa-adjust", 
        budgetLimit: 2000000,
        description: "Инновационная рекламная платформа с AI-оптимизацией.",
        formatExample: "https://example.com/yabbi-fullscreen.jpg"
    },
    { 
        id: 8, 
        name: "Segmento", 
        format: "Баннеры",
        CPM: 300, 
        CTR: 2.2, 
        VTR: 62, 
        BR: 60, 
        CR: 4.2, 
        frequency: 5, 
        icon: "fas fa-chart-pie", 
        budgetLimit: 6000000,
        description: "Позволяет сегментировать аудиторию по множеству параметров.",
        formatExample: "https://example.com/segmento.jpg"
    },
    { 
        id: 9, 
        name: "MTS Telegram", 
        format: "Telegram Ads",
        CPM: 200, 
        CTR: 1.4, 
        VTR: 58, 
        BR: 15, 
        CR: 3.0, 
        frequency: 2, 
        icon: "fab fa-telegram", 
        budgetLimit: 3000000,
        description: "Реклама в Telegram-каналах через платформу MTS.",
        formatExample: "https://example.com/telegram-ads.jpg"
    }
];

const TOTAL_BUDGET = 15000000;
let selectedPlatforms = [];
let completedTasks = [];
let currentTaskIndex = 0;
let currentBrief = null;
let tutorialStep = 1;
const totalTutorialSteps = 3;

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
                description: "Сеансы ≥ 500 000", 
                condition: (stats) => stats.totalSessions >= 500000,
                icon: "fas fa-users",
                hint: "Добавьте площадки с высоким CTR и низким BR для увеличения количества сеансов. Например: Яндекс.Видео (CTR 3.2%, BR 50%) или Яндекс.Поиск (CTR 2.5%, BR 35%)",
                metrics: ["totalSessions"]
            },
            { 
                id: 3,
                description: "CTR ≥ 1.5%", 
                condition: (stats) => stats.avgCTR >= 1.5,
                icon: "fas fa-percentage",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: обратите внимание на площадки с высоким CTR (например, Яндекс.Видео - 3.2%, Яндекс.Поиск - 2.5%, IVI - 2.8%)",
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
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: снизьте показатель отказов, исключив площадки с высоким BR (например, Яндекс.Видео - 50%, Segmento - 60%)",
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
                description: "Охват ≥ 20 000 000", 
                condition: (stats) => stats.reach >= 20000000,
                icon: "fas fa-users",
                hint: "Добавьте площадки с большим охватом и высокой частотой показа. Например: ВКонтакте (охват 4M), Segmento (охват 6M), Adspectror (охват 5M)",
                metrics: ["reach"]
            },
            { 
                id: 3,
                description: "CPT ≤ 800 ₽", 
                condition: (stats) => stats.avgCPT <= 800,
                icon: "fas fa-tag",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: снизьте стоимость 1000 единиц охвата, выбирая площадки с хорошим соотношением цены и охвата (например, Digital Alliance - CPM 180₽, ВКонтакте - CPM 250₽)",
                metrics: ["avgCPT"]
            },
            { 
                id: 4,
                description: "CPM ≤ 280 ₽", 
                condition: (stats) => stats.avgCPM <= 280,
                icon: "fas fa-tag",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: снизьте средний CPM, комбинируя дорогие и дешевые площадки (например, добавьте Digital Alliance - 180₽ и ВКонтакте - 250₽)",
                metrics: ["avgCPM"]
            },
            { 
                id: 5,
                description: "Частота ≥ 2", 
                condition: (stats) => stats.avgFrequency >= 2,
                icon: "fas fa-redo",
                hint: "Коллеги, мы посмотрели медиаплан и необходимо внести следующие доработки: увеличьте среднюю частоту контактов, выбирая площадки с высокой частотой показа (например, Яндекс.Поиск - частота 5, IVI - частота 6)",
                metrics: ["avgFrequency"]
            }
        ]
    }
};

function initGame() {
    console.log("Инициализация игры...");
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
    renderAllTasks();
    setupDragAndDrop();
    setupEventListeners();
    updateBudgetProgress();
}

function resetGameState() {
    selectedPlatforms = [];
    completedTasks = [];
    currentTaskIndex = 0;
    const mediaplan = document.getElementById("mediaplan");
    mediaplan.classList.remove("has-platforms");
    updateBudgetProgress();
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
    
    document.getElementById('show-stats-info').addEventListener('click', function() {
        document.getElementById('stats-info-modal').style.display = 'block';
    });
}

function setupEventListeners() {
    document.getElementById("check-task").addEventListener("click", checkCurrentTask);
    document.getElementById("reset-plan").addEventListener("click", resetMediaplan);
}

function showPlatformInfo(platformId) {
    const platform = platforms.find(p => p.id == platformId);
    if (!platform) return;
    
    document.getElementById("platform-info-title").textContent = `${platform.name} (${platform.format})`;
    
    const content = `
        <p><strong>Описание:</strong> ${platform.description}</p>
        <div class="platform-stats">
            <p><i class="fas fa-tag"></i> <strong>CPM:</strong> ${platform.CPM} ₽</p>
            <p><i class="fas fa-percentage"></i> <strong>CTR:</strong> ${platform.CTR}%</p>
            ${platform.VTR > 0 ? `<p><i class="fas fa-video"></i> <strong>VTR:</strong> ${platform.VTR}%</p>` : ''}
            <p><i class="fas fa-chart-bar"></i> <strong>BR:</strong> ${platform.BR}%</p>
            <p><i class="fas fa-exchange-alt"></i> <strong>CR:</strong> ${platform.CR}%</p>
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

function renderPlatforms() {
    const container = document.getElementById("platforms-content");
    container.innerHTML = '';
    
    platforms.forEach(platform => {
        const platformEl = document.createElement("div");
        platformEl.className = "platform";
        platformEl.setAttribute("draggable", "true");
        platformEl.setAttribute("data-id", platform.id);
        platformEl.innerHTML = `
            <div class="platform-header">
                <i class="${platform.icon}"></i>
                <span>${platform.name}</span>
                <i class="fas fa-info-circle platform-info-btn" onclick="showPlatformInfo(${platform.id})"></i>
            </div>
            <small>Формат: ${platform.format}</small>
            <small>CPM: ${platform.CPM} ₽ | CTR: ${platform.CTR}%</small>
            <small>Частота: ${platform.frequency} | Лимит: ${(platform.budgetLimit/1000000).toFixed(1)}M ₽</small>
        `;
        container.appendChild(platformEl);
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
        avgVTR: 0
    };

    const totalSpent = selectedPlatforms.reduce((sum, p) => sum + p.budget, 0);
    const totalImpressions = selectedPlatforms.reduce((sum, p) => sum + Math.floor((p.budget / p.CPM) * 1000), 0);
    const totalClicks = selectedPlatforms.reduce((sum, p) => sum + Math.floor((p.budget / p.CPM) * 1000 * (p.CTR / 100)), 0);
    const totalViews = selectedPlatforms.reduce((sum, p) => sum + Math.floor((p.budget / p.CPM) * 1000 * (p.VTR / 100)), 0);
    const totalSessions = selectedPlatforms.reduce((sum, p) => sum + Math.floor((p.budget / p.CPM) * 1000 * (p.CTR / 100) * (1 - p.BR / 100)), 0);
    const totalConversions = selectedPlatforms.reduce((sum, p) => {
        const sessions = Math.floor((p.budget / p.CPM) * 1000 * (p.CTR / 100) * (1 - p.BR / 100));
        return sum + Math.floor(sessions * (p.CR / 100));
    }, 0);

    const reach = Math.floor(selectedPlatforms.reduce((sum, p) => {
        const impressions = Math.floor((p.budget / p.CPM) * 1000);
        return sum + (impressions / p.frequency);
    }, 0) * 0.7);

    const avgCPM = totalImpressions > 0 ? (totalSpent / totalImpressions) * 1000 : 0;
    const avgCTR = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;
    const avgCPC = totalClicks > 0 ? totalSpent / totalClicks : 0;
    const avgCPT = reach > 0 ? (totalSpent / reach) * 1000 : 0;
    const avgBR = totalClicks > 0 ? ((totalClicks - totalSessions) / totalClicks) * 100 : 0;
    const avgFrequency = reach > 0 ? totalImpressions / reach : 0;
    const avgCR = totalSessions > 0 ? (totalConversions / totalSessions) * 100 : 0;
    const avgCPVisit = totalSessions > 0 ? totalSpent / totalSessions : 0;
    const avgCPA = totalConversions > 0 ? totalSpent / totalConversions : 0;
    const avgVTR = totalImpressions > 0 ? (totalViews / totalImpressions) * 100 : 0;

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
        avgVTR
    };
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
    } else {
        mediaplan.classList.add('has-platforms');
        mediaplan.innerHTML = `
            <div class="section-header">
                <h3>Ваш медиаплан</h3>
            </div>
        `;
        
        const platformsContainer = document.createElement('div');
        platformsContainer.className = 'platforms-container';
        
        selectedPlatforms.forEach(platform => {
            const platformEl = document.createElement("div");
            platformEl.className = "platform in-mediaplan";
            const budgetPercentage = Math.min(100, (platform.budget / platform.budgetLimit) * 100);
            platformEl.style.setProperty('--percentage', `${budgetPercentage}%`);
            const impressions = Math.floor((platform.budget / platform.CPM) * 1000);
            const clicks = Math.floor(impressions * (platform.CTR / 100));
            const views = Math.floor(impressions * (platform.VTR / 100));
            const sessions = Math.floor(clicks * (1 - platform.BR / 100));
            const conversions = Math.floor(sessions * (platform.CR / 100));
            const reach = Math.floor((impressions / platform.frequency) * 0.7);
            const originalPlatform = platforms.find(p => p.id === platform.id);
            
            platformEl.innerHTML = `
                <div class="platform-header">
                    <i class="${platform.icon}"></i>
                    <span>${platform.name} (${platform.format})</span>
                    <button class="remove-btn" data-id="${platform.id}" title="Удалить">×</button>
                    <i class="fas fa-info-circle platform-info-btn" onclick="showPlatformInfo(${platform.id})"></i>
                </div>
                <small>
                    Показы: ${impressions.toLocaleString()} | 
                    Клики: ${clicks.toLocaleString()} |
                    Просмотры: ${views.toLocaleString()} |
                    Охват: ${reach.toLocaleString()}
                </small>
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
            `;
            platformsContainer.appendChild(platformEl);
        });
        
        mediaplan.appendChild(platformsContainer);
        
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
    }
    
    updateMetricsDisplay(stats);
    updateBudgetProgress();
    updateTasksStatus();
}

function updateMetricsDisplay(stats) {
    const keyMetrics = document.getElementById("key-metrics");
    const priceMetrics = document.getElementById("price-metrics");
    const postclickMetrics = document.getElementById("postclick-metrics");
    
    if (!keyMetrics || !priceMetrics || !postclickMetrics) return;
    
    // Ключевые показатели
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
        <div class="metric-card" id="metric-totalClicks">
            <i class="fas fa-mouse-pointer"></i>
            <span class="metric-value">${stats.totalClicks.toLocaleString()}</span>
            <span class="metric-label">Клики</span>
        </div>
        <div class="metric-card" id="metric-totalViews">
            <i class="fas fa-video"></i>
            <span class="metric-value">${stats.totalViews.toLocaleString()}</span>
            <span class="metric-label">Просмотры</span>
        </div>
        <div class="metric-card" id="metric-reach">
            <i class="fas fa-users"></i>
            <span class="metric-value">${stats.reach.toLocaleString()}</span>
            <span class="metric-label">Охват</span>
        </div>
        <div class="metric-card" id="metric-totalSessions">
            <i class="fas fa-user-clock"></i>
            <span class="metric-value">${stats.totalSessions.toLocaleString()}</span>
            <span class="metric-label">Сеансы</span>
        </div>
        <div class="metric-card" id="metric-totalConversions">
            <i class="fas fa-bullseye"></i>
            <span class="metric-value">${stats.totalConversions.toLocaleString()}</span>
            <span class="metric-label">Конверсии</span>
        </div>
    `;
    
    // Ценовые показатели
    priceMetrics.innerHTML = `
        <div class="metric-card" id="metric-avgCPM">
            <i class="fas fa-tag"></i>
            <span class="metric-value">${stats.avgCPM.toFixed(2)} ₽</span>
            <span class="metric-label">CPM</span>
        </div>
        <div class="metric-card" id="metric-avgCPC">
            <i class="fas fa-money-bill-wave"></i>
            <span class="metric-value">${stats.avgCPC.toFixed(2)} ₽</span>
            <span class="metric-label">CPC</span>
        </div>
        <div class="metric-card" id="metric-avgCPT">
            <i class="fas fa-tag"></i>
            <span class="metric-value">${stats.avgCPT.toFixed(2)} ₽</span>
            <span class="metric-label">CPT</span>
        </div>
        <div class="metric-card" id="metric-avgCPVisit">
            <i class="fas fa-user-check"></i>
            <span class="metric-value">${stats.avgCPVisit.toFixed(2)} ₽</span>
            <span class="metric-label">CPVisit</span>
        </div>
        <div class="metric-card" id="metric-avgCPA">
            <i class="fas fa-hand-holding-usd"></i>
            <span class="metric-value">${stats.avgCPA.toFixed(2)} ₽</span>
            <span class="metric-label">CPA</span>
        </div>
    `;
    
    // Пост-клик показатели
    postclickMetrics.innerHTML = `
        <div class="metric-card" id="metric-avgCTR">
            <i class="fas fa-percentage"></i>
            <span class="metric-value">${stats.avgCTR.toFixed(2)}%</span>
            <span class="metric-label">CTR</span>
        </div>
        <div class="metric-card" id="metric-avgVTR">
            <i class="fas fa-film"></i>
            <span class="metric-value">${stats.avgVTR.toFixed(2)}%</span>
            <span class="metric-label">VTR</span>
        </div>
        <div class="metric-card" id="metric-avgBR">
            <i class="fas fa-chart-bar"></i>
            <span class="metric-value">${stats.avgBR.toFixed(2)}%</span>
            <span class="metric-label">BR</span>
        </div>
        <div class="metric-card" id="metric-avgCR">
            <i class="fas fa-exchange-alt"></i>
            <span class="metric-value">${stats.avgCR.toFixed(2)}%</span>
            <span class="metric-label">CR</span>
        </div>
        <div class="metric-card" id="metric-avgFrequency">
            <i class="fas fa-redo"></i>
            <span class="metric-value">${stats.avgFrequency.toFixed(2)}</span>
            <span class="metric-label">Частота</span>
        </div>
    `;
    
    // Подсветка активных метрик
    if (currentBrief && currentTaskIndex < briefs[currentBrief].tasks.length) {
        const currentTask = briefs[currentBrief].tasks[currentTaskIndex];
        currentTask.metrics.forEach(metric => {
            const metricElement = document.getElementById(`metric-${metric}`);
            if (metricElement) {
                metricElement.classList.add('highlight');
            }
        });
    }
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
}

document.addEventListener('DOMContentLoaded', function() {
    initGame();
});

window.showPlatformInfo = showPlatformInfo;
window.updatePlatformBudgetSlider = updatePlatformBudgetSlider;
window.updatePlatformBudgetOnChange = updatePlatformBudgetOnChange;