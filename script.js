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
        description: "Крупнейшая социальная сеть в России с широким охватом аудитории всех возрастов. Эффективна для таргетированной рекламы и вирусного маркетинга."
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
        description: "Контекстная реклама в поисковой выдаче Яндекса. Высокая конверсия благодаря соответствию запросам пользователей."
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
        description: "Видеореклама в сервисе Яндекс.Видео. Высокий охват и вовлеченность аудитории."
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
        description: "Рекламная сеть с широким охватом различных сайтов. Эффективна для масштабных кампаний."
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
        description: "Видеосервис с качественным контентом. Хорош для рекламы премиальных товаров."
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
        description: "Рекламная сеть с возможностью таргетинга по интересам."
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
        description: "Платформа с продвинутыми аналитическими инструментами."
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
        description: "Инновационная рекламная платформа с AI-оптимизацией."
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
        description: "Позволяет сегментировать аудиторию по множеству параметров."
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
        description: "Реклама в Telegram-каналах через платформу MTS."
    }
];

const TOTAL_BUDGET = 15000000;
let selectedPlatforms = [];
let completedTasks = [];
let currentTaskIndex = 1; // Начинаем с 1, чтобы сразу показать 2 задания

const tasks = [
    { 
        id: 1,
        description: "Реализовать бюджет (15 млн ₽)", 
        condition: (stats) => stats.totalSpent === TOTAL_BUDGET,
        icon: "fas fa-wallet",
        hint: "Используйте весь выделенный бюджет, распределив его между площадками"
    },
    { 
        id: 2,
        description: "Охват ≥ 35 млн", 
        condition: (stats) => stats.reach >= 35000000,
        icon: "fas fa-users",
        hint: "Используйте площадки с большим охватом и высокой частотой показа"
    },
    { 
        id: 3,
        description: "Средний CPM ≤ 280 ₽", 
        condition: (stats) => stats.avgCPM <= 280,
        icon: "fas fa-tag",
        hint: "Коллеги, спасибо, посмотрели медиаплан, но нужно снизить средний CPM. Выбирайте площадки с низким CPM или комбинируйте дорогие и дешёвые"
    },
    { 
        id: 4,
        description: "Средний CPC ≤ 30 ₽", 
        condition: (stats) => stats.avgCPC <= 30,
        icon: "fas fa-money-bill-wave",
        hint: "Коллеги, спасибо, посмотрели медиаплан, но нужно снизить средний CPC. Обратите внимание на CTR площадок - чем он выше, тем ниже CPC"
    },
    { 
        id: 5,
        description: "Средний CTR ≥ 1.5%", 
        condition: (stats) => stats.avgCTR >= 1.5,
        icon: "fas fa-percentage",
        hint: "Коллеги, спасибо, посмотрели медиаплан, но нужно повысить средний CTR. Добавьте площадки с высоким CTR (например, Яндекс.Видео)"
    },
    { 
        id: 6,
        description: "Средний BR ≤ 50%", 
        condition: (stats) => stats.avgBR <= 50,
        icon: "fas fa-chart-bar",
        hint: "Коллеги, спасибо, посмотрели медиаплан, но нужно снизить средний BR. Избегайте площадок с высоким BR или балансируйте их другими"
    }
];

function initGame() {
    console.log("Инициализация игры...");
    resetGameState();
    initModals();
    renderPlatforms();
    renderAllTasks();
    setupDragAndDrop();
    setupEventListeners();
    updateBudgetProgress();
}

function resetGameState() {
    selectedPlatforms = [];
    completedTasks = [];
    currentTaskIndex = 1;
}

function initModals() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        const span = modal.querySelector('.close');
        span.onclick = function() {
            modal.style.display = "none";
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
    
    document.addEventListener('click', function(e) {
        if (e.target.closest('.plan-stats')) {
            document.getElementById('stats-info-modal').style.display = 'block';
        }
    });
}

function setupEventListeners() {
    document.getElementById("check-task").addEventListener("click", checkTasks);
    document.getElementById("reset-plan").addEventListener("click", resetMediaplan);
    document.getElementById("platform-search").addEventListener("input", searchPlatforms);
}

function searchPlatforms() {
    const searchTerm = document.getElementById("platform-search").value.toLowerCase();
    const platformElements = document.querySelectorAll('#platforms-content .platform');
    
    platformElements.forEach(el => {
        const platformName = el.querySelector('span').textContent.toLowerCase();
        el.style.display = platformName.includes(searchTerm) ? 'flex' : 'none';
    });
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
            <small>CPM: ${platform.CPM} ₽ | CTR: ${platform.CTR}% | Лимит: ${(platform.budgetLimit/1000000).toFixed(1)}M ₽</small>
        `;
        container.appendChild(platformEl);
    });
}

function renderAllTasks() {
    const container = document.getElementById("tasks-container");
    container.innerHTML = "";
    
    tasks.forEach((task, index) => {
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
        avgBR: 0, 
        avgFrequency: 0
    };

    const totalSpent = selectedPlatforms.reduce((sum, p) => sum + p.budget, 0);
    const totalImpressions = selectedPlatforms.reduce((sum, p) => sum + Math.floor((p.budget / p.CPM) * 1000), 0);
    const totalClicks = selectedPlatforms.reduce((sum, p) => sum + Math.floor((p.budget / p.CPM) * 1000 * (p.CTR / 100)), 0);
    const totalViews = selectedPlatforms.reduce((sum, p) => sum + Math.floor((p.budget / p.CPM) * 1000 * (p.VTR / 100)), 0);
    const totalSessions = selectedPlatforms.reduce((sum, p) => sum + Math.floor((p.budget / p.CPM) * 1000 * (p.CTR / 100) * (p.BR / 100)), 0);

    const reach = Math.floor(totalImpressions * 0.7);
    const avgCPM = totalImpressions > 0 ? (totalSpent / totalImpressions) * 1000 : 0;
    const avgCTR = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;
    const avgCPC = totalClicks > 0 ? totalSpent / totalClicks : 0;
    const avgBR = totalClicks > 0 ? (totalSessions / totalClicks) * 100 : 0;
    const avgFrequency = reach > 0 ? totalImpressions / reach : 0;

    return { 
        totalSpent, 
        totalImpressions, 
        totalClicks, 
        totalViews, 
        totalSessions, 
        reach,
        avgCPM, 
        avgCTR, 
        avgCPC, 
        avgBR, 
        avgFrequency 
    };
}

function updateMediaplan() {
    const mediaplan = document.getElementById("mediaplan");
    mediaplan.innerHTML = '<div class="section-header"><h3>Ваш медиаплан</h3><div class="section-actions"><button id="export-plan" class="btn-icon" title="Экспорт медиаплана"><i class="fas fa-file-export"></i></button><button id="import-plan" class="btn-icon" title="Импорт медиаплана"><i class="fas fa-file-import"></i></button></div></div><div class="plan-stats"></div>';

    if (selectedPlatforms.length === 0) {
        mediaplan.innerHTML += '<div class="empty-drop">Перетащите площадки сюда</div>';
        resetStats();
        document.querySelectorAll('#platforms-content .platform').forEach(el => {
            el.style.display = 'flex';
        });
        return;
    }

    const stats = calculateStats();
    updateStatsDisplay(stats);
    updateBudgetProgress();

    selectedPlatforms.forEach(platform => {
        const platformEl = document.createElement("div");
        platformEl.className = "platform in-mediaplan";
        const budgetPercentage = Math.min(100, (platform.budget / platform.budgetLimit) * 100);
        platformEl.style.setProperty('--percentage', `${budgetPercentage}%`);
        const impressions = Math.floor((platform.budget / platform.CPM) * 1000);
        const clicks = Math.floor(impressions * (platform.CTR / 100));
        const reach = Math.floor(impressions / platform.frequency);
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
        mediaplan.appendChild(platformEl);
    });

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
    
    updateTasksStatus();
}

function updateTasksStatus() {
    const stats = calculateStats();
    
    tasks.forEach(task => {
        const taskElement = document.querySelector(`.task-item[data-task-id="${task.id}"]`);
        if (!taskElement) return;
        
        const isCompleted = task.condition(stats);
        
        if (isCompleted) {
            taskElement.classList.add("completed");
            if (!completedTasks.includes(task.id) && tasks.indexOf(task) <= currentTaskIndex) {
                completedTasks.push(task.id);
            }
        } else {
            taskElement.classList.remove("completed");
            if (completedTasks.includes(task.id)) {
                completedTasks = completedTasks.filter(id => id !== task.id);
                if (tasks.indexOf(task) === currentTaskIndex) {
                    currentTaskIndex = Math.max(0, currentTaskIndex - 1);
                }
                renderAllTasks();
            }
        }
    });
}

function updateStatsDisplay(stats) {
    const statsContainer = document.querySelector(".plan-stats");
    if (!statsContainer) return;
    
    statsContainer.innerHTML = `
        <div class="stat-card">
            <i class="fas fa-wallet"></i>
            <span class="stat-value">${stats.totalSpent.toLocaleString()} ₽</span>
            <span class="stat-label">Бюджет</span>
        </div>
        <div class="stat-card">
            <i class="fas fa-tag"></i>
            <span class="stat-value">${stats.avgCPM.toFixed(2)} ₽</span>
            <span class="stat-label">CPM</span>
        </div>
        <div class="stat-card">
            <i class="fas fa-money-bill-wave"></i>
            <span class="stat-value">${stats.avgCPC.toFixed(2)} ₽</span>
            <span class="stat-label">CPC</span>
        </div>
        <div class="stat-card">
            <i class="fas fa-percentage"></i>
            <span class="stat-value">${stats.avgCTR.toFixed(2)}%</span>
            <span class="stat-label">CTR</span>
        </div>
        <div class="stat-card">
            <i class="fas fa-users"></i>
            <span class="stat-value">${stats.reach.toLocaleString()}</span>
            <span class="stat-label">Охват</span>
        </div>
    `;
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

function checkTasks() {
    const stats = calculateStats();
    let anyTaskCompleted = false;
    
    if (currentTaskIndex < tasks.length) {
        const currentTask = tasks[currentTaskIndex];
        
        if (currentTask.condition(stats)) {
            if (!completedTasks.includes(currentTask.id)) {
                completedTasks.push(currentTask.id);
                anyTaskCompleted = true;
            }
            
            if (currentTaskIndex < tasks.length - 1) {
                currentTaskIndex++;
                renderAllTasks();
                
                // Показываем модальное окно с новым заданием
                setTimeout(() => {
                    showNewTaskModal(tasks[currentTaskIndex]);
                }, 500);
                
                showNotification(`✅ Задание выполнено! Открыто новое требование`, "success");
            } else {
                showNotification("🎉 Поздравляем! Все задания выполнены!", "success");
            }
        } else {
            showNotification("❌ Условие не выполнено. Проверьте медиаплан.", "error");
        }
    }
    
    updateTasksStatus();
    return anyTaskCompleted;
}

function resetMediaplan() {
    if (confirm("Вы уверены, что хотите очистить медиаплан?")) {
        selectedPlatforms = [];
        completedTasks = [];
        currentTaskIndex = 1;
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

function resetStats() {
    const statsContainer = document.querySelector(".plan-stats");
    if (statsContainer) {
        statsContainer.innerHTML = `
            <div class="stat-card">
                <i class="fas fa-wallet"></i>
                <span class="stat-value">0 ₽</span>
                <span class="stat-label">Бюджет</span>
            </div>
            <div class="stat-card">
                <i class="fas fa-tag"></i>
                <span class="stat-value">0</span>
                <span class="stat-label">CPM</span>
            </div>
            <div class="stat-card">
                <i class="fas fa-money-bill-wave"></i>
                <span class="stat-value">0</span>
                <span class="stat-label">CPC</span>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', initGame);

window.showPlatformInfo = showPlatformInfo;
window.updatePlatformBudgetSlider = updatePlatformBudgetSlider;
window.updatePlatformBudgetOnChange = updatePlatformBudgetOnChange;