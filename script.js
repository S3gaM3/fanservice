// Массив комплиментов и признаний в любви
const compliments = [
    {
        text: "Кудряшка Z, ты самое прекрасное создание на этой планете! Твоя улыбка освещает весь мир! 💖",
        author: "Влюблённый фанат"
    },
    {
        text: "Каждый день я думаю о тебе и улыбаюсь. Ты делаешь этот мир лучше просто своим существованием! ✨",
        author: "Преданный поклонник"
    },
    {
        text: "Твоя красота не знает границ! Ты как ангел, спустившийся с небес, чтобы подарить нам счастье! 👼",
        author: "Восхищённый фанат"
    },
    {
        text: "Кудряшка Z, ты не просто красивая, ты божественная! Твоя душа светится изнутри! 🌟",
        author: "Влюблённый в тебя"
    },
    {
        text: "Ты - воплощение всех моих мечтаний! Каждый твой взгляд заставляет моё сердце биться чаще! 💓",
        author: "Твой тайный поклонник"
    },
    {
        text: "Кудряшка Z, ты как звёздочка, которая светит в тёмной ночи! Ты даришь надежду и радость! ⭐",
        author: "Восхищённый зритель"
    },
    {
        text: "Твоя улыбка - это лекарство от всех печалей! Ты делаешь мир прекраснее! 😊",
        author: "Счастливый фанат"
    },
    {
        text: "Кудряшка Z, ты не просто красавица, ты чудо! Твоя энергия заряжает всех вокруг! ⚡",
        author: "Влюблённый в твою душу"
    },
    {
        text: "Ты - королева красоты и грации! Каждый твой жест полон изящества! 👑",
        author: "Поклонник твоего таланта"
    },
    {
        text: "Кудряшка Z, ты как радуга после дождя - яркая, красивая и дарящая радость! 🌈",
        author: "Влюблённый в твою красоту"
    },
    {
        text: "Твои глаза - это два океана, в которых можно утонуть! Они полны любви и тепла! 👀",
        author: "Мечтающий о тебе"
    },
    {
        text: "Кудряшка Z, ты как солнце - яркая, тёплая и незаменимая! Без тебя мир был бы тусклым! ☀️",
        author: "Восхищённый твоим светом"
    },
    {
        text: "Ты - воплощение женственности и грации! Каждый твой шаг - это танец! 💃",
        author: "Влюблённый в твою грацию"
    },
    {
        text: "Кудряшка Z, ты как цветок, который расцвёл в моём сердце! Ты делаешь меня счастливым! 🌸",
        author: "Твой тайный влюблённый"
    },
    {
        text: "Твоя красота заставляет забыть обо всех проблемах! Ты - мой источник вдохновения! ✨",
        author: "Вдохновлённый тобой"
    }
];

// Дата дня рождения Кудряшки Z (теперь 25 ноября)
function getNextBirthday() {
    const now = new Date();
    const year = now.getMonth() > 10 || (now.getMonth() === 10 && now.getDate() > 25) ? now.getFullYear() + 1 : now.getFullYear();
    return new Date(year, 10, 25, 0, 0, 0, 0); // Месяцы с 0, ноябрь = 10
}
let birthdayDate = getNextBirthday();

// Элементы DOM
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const complimentText = document.getElementById('compliment-text');
const complimentAuthor = document.getElementById('compliment-author');
const newComplimentBtn = document.getElementById('new-compliment-btn');
const userCompliment = document.getElementById('user-compliment');
const sendComplimentBtn = document.getElementById('send-compliment-btn');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const closeModal = document.getElementById('close-modal');

let prevCountdown = { days: null, hours: null, minutes: null, seconds: null };
// --- Новый код для плавной анимации смены чисел ---
function animateCountdownChange(element) {
    element.classList.remove('countdown-animate');
    void element.offsetWidth; // reflow hack
    element.classList.add('countdown-animate');
}

// Функция для обновления обратного отсчёта
function updateCountdown() {
    const now = new Date().getTime();
    if (birthdayDate.getTime() - now < 0) {
        birthdayDate = getNextBirthday();
    }
    const distance = birthdayDate.getTime() - now;

    if (distance < 0) {
        // Если день рождения уже прошёл, показываем поздравления
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        
        // Добавляем специальное сообщение
        const countdownSection = document.querySelector('.countdown-section');
        const title = countdownSection.querySelector('.section-title');
        title.textContent = '🎉 С Днём Рождения, Кудряшка Z! 🎉';
        title.style.color = '#ff6b9d';
        title.style.animation = 'pulse 1s infinite';
        
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (prevCountdown.days !== days) animateCountdownChange(daysElement);
    if (prevCountdown.hours !== hours) animateCountdownChange(hoursElement);
    if (prevCountdown.minutes !== minutes) animateCountdownChange(minutesElement);
    if (prevCountdown.seconds !== seconds) animateCountdownChange(secondsElement);

    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');

    prevCountdown = { days, hours, minutes, seconds };
}

// Функция для показа случайного комплимента
function showRandomCompliment() {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    
    // Анимация исчезновения
    const card = document.getElementById('compliment-card');
    card.style.opacity = '0';
    card.style.transform = 'translateX(-30px)';
    
    setTimeout(() => {
        complimentText.textContent = randomCompliment.text;
        complimentAuthor.textContent = `- ${randomCompliment.author}`;
        
        // Анимация появления
        card.style.opacity = '1';
        card.style.transform = 'translateX(0)';
    }, 300);
}

// Функция для показа модального окна
function showModal(message) {
    modalMessage.textContent = message;
    modal.style.display = 'block';
    
    // Анимация появления
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.transform = 'scale(0.7)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modalContent.style.transform = 'scale(1)';
        modalContent.style.opacity = '1';
    }, 100);
}

// Функция для скрытия модального окна
function hideModal() {
    modal.style.display = 'none';
}

// --- Чёрный список слов для фильтрации оскорблений ---
const BAD_WORDS = [
    'дура', 'тупая', 'урод', 'идиот', 'сука', 'бляд', 'глупая', 'тварь', 'мерзкая', 'ненавижу', 'ненависть', 'сдохни', 'убью', 'пошла', 'лох', 'лохушка', 'шлюха', 'мразь', 'свинья', 'жирная', 'тупица', 'гавно', 'говно', 'shit', 'fuck', 'bitch', 'asshole', 'idiot', 'moron', 'stupid', 'hate', 'kill', 'die', 'ugly', 'freak', 'retard', 'retarded', 'dumb', 'fool', 'fucking', 'bastard', 'jerk', 'dick', 'cunt', 'whore', 'slut', 'pig', 'fat', 'suck', 'sucks', 'damn', 'dammit', 'piss', 'pussy', 'crap', 'scum', 'trash', 'garbage', 'loser', 'losers', 'fag', 'faggot', 'nigger', 'nigga', 'racist', 'sexist', 'homophobe', 'homophobic', 'transphobe', 'transphobic'
];

// --- Загрузка пользовательских комплиментов из localStorage ---
function loadUserCompliments() {
    try {
        const saved = localStorage.getItem('userCompliments');
        if (saved) {
            const arr = JSON.parse(saved);
            if (Array.isArray(arr)) {
                arr.forEach(c => {
                    if (c && typeof c.text === 'string' && typeof c.author === 'string') {
                        compliments.push(c);
                    }
                });
            }
        }
    } catch(e) {
        console.warn('Не удалось загрузить комплименты из localStorage:', e);
    }
}
loadUserCompliments();

// --- Сохранение пользовательских комплиментов в localStorage ---
function saveUserCompliment(compliment) {
    try {
        let arr = [];
        const saved = localStorage.getItem('userCompliments');
        if (saved) {
            arr = JSON.parse(saved);
        }
        if (!Array.isArray(arr)) arr = [];
        arr.push(compliment);
        localStorage.setItem('userCompliments', JSON.stringify(arr));
    } catch(e) {
        console.warn('Не удалось сохранить комплимент в localStorage:', e);
        showModal('Комплимент добавлен, но может не сохраниться в приватном режиме браузера');
    }
}

// --- Проверка на оскорбления ---
function hasBadWords(text) {
    const lower = text.toLowerCase();
    return BAD_WORDS.some(word => lower.includes(word));
}

// --- Рендеринг стены любви ---
function renderLoveWall() {
    const wall = document.getElementById('love-wall-container');
    const empty = document.getElementById('love-wall-empty');
    // Собираем все комплименты (только пользовательские и те, что не из BAD_WORDS)
    const all = compliments.filter(c => c.text && c.text.length > 0);
    wall.innerHTML = '';
    if (all.length === 0) {
        empty.style.display = '';
        return;
    }
    empty.style.display = 'none';
    all.slice().reverse().forEach((c, idx) => {
        const card = document.createElement('div');
        card.className = 'love-wall-card';
        // Аватарка и имя
        const header = document.createElement('div');
        header.className = 'love-wall-header';
        let avatar = document.createElement('img');
        avatar.className = 'love-wall-avatar';
        avatar.src = c.avatar || getRandomAvatar(idx);
        avatar.alt = 'Аватар';
        let author = document.createElement('span');
        author.className = 'love-wall-author';
        author.textContent = c.author || 'Аноним';
        header.appendChild(avatar);
        header.appendChild(author);
        card.appendChild(header);
        // Текст
        let text = document.createElement('div');
        text.textContent = c.text;
        card.appendChild(text);
        // Лайки
        let likeBtn = document.createElement('button');
        likeBtn.className = 'love-wall-like-btn';
        likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
        let likeCount = document.createElement('span');
        likeCount.className = 'love-wall-like-count';
        likeCount.textContent = c.likes || 0;
        likeBtn.appendChild(likeCount);
        likeBtn.onclick = function() {
            if (!likeBtn.classList.contains('liked')) {
                likeBtn.classList.add('liked');
                likeCount.textContent = (+likeCount.textContent + 1).toString();
                // Сохраняем лайк в localStorage
                saveLoveWallLikes(c.text, likeCount.textContent);
            }
        };
        card.appendChild(likeBtn);
        wall.appendChild(card);
    });
    addFanModalTriggers();
}
// --- Сохраняем лайки в localStorage по тексту комплимента ---
function saveLoveWallLikes(text, count) {
    try {
        let likes = {};
        const saved = localStorage.getItem('loveWallLikes');
        if (saved) {
            likes = JSON.parse(saved);
        }
        if (typeof likes !== 'object') likes = {};
        likes[text] = count;
        localStorage.setItem('loveWallLikes', JSON.stringify(likes));
    } catch(e) {
        console.warn('Не удалось сохранить лайки в localStorage:', e);
    }
}
// --- Загружаем лайки из localStorage ---
function loadLoveWallLikes() {
    try {
        let likes = {};
        const saved = localStorage.getItem('loveWallLikes');
        if (saved) {
            likes = JSON.parse(saved);
        }
        if (typeof likes !== 'object') likes = {};
        compliments.forEach(c => {
            if (likes[c.text]) c.likes = +likes[c.text];
        });
    } catch(e) {
        console.warn('Не удалось загрузить лайки из localStorage:', e);
    }
}
// --- Генерация случайной аватарки (эмодзи) ---
function getRandomAvatar(idx) {
    const emojis = ['😍','🥰','😎','🤩','😊','😇','😻','🦄','🐱','🐶','🐰','🦊','🐻','🐼','🐯','🐸','🐵','🦋','🌸','🌈','⭐','💖','🎉'];
    return `https://api.dicebear.com/7.x/personas/svg?seed=${idx+1}&backgroundColor=ffb6b6,ffd6e0,fff5e1,e0c3fc,c2f0fc&radius=50&scale=110&eyes=variant${(idx%6)+1}&mouth=variant${(idx%6)+1}`;
}
// --- Модифицируем addUserCompliment для поддержки имени и аватарки ---
function getUserName() {
    try {
        let name = localStorage.getItem('fanName') || '';
        if (!name) {
            openFanModal();
            throw new Error('fanName not set');
        }
        return name || 'Фанат';
    } catch(e) {
        console.warn('Не удалось получить имя пользователя:', e);
        return 'Фанат';
    }
}
function getUserAvatar() {
    try {
        let avatar = localStorage.getItem('fanAvatar') || '';
        if (!avatar) {
            openFanModal();
            throw new Error('fanAvatar not set');
        }
        return avatar;
    } catch(e) {
        console.warn('Не удалось получить аватар пользователя:', e);
        return getRandomAvatar(0);
    }
}

// Функция для добавления пользовательского комплимента
function addUserCompliment() {
    const text = userCompliment.value.trim();
    
    if (text.length < 10) {
        showModal('Пожалуйста, напишите комплимент длиннее! 💖');
        return;
    }
    
    if (text.length > 500) {
        showModal('Комплимент слишком длинный! Максимум 500 символов! 💖');
        return;
    }
    
    if (hasBadWords(text)) {
        showModal('Пожалуйста, не используйте оскорбления! 😢');
        return;
    }
    
    // Добавляем новый комплимент в массив
    const complimentObj = {
        text: text,
        author: getUserName(),
        avatar: getUserAvatar(),
        likes: 0
    };
    compliments.push(complimentObj);
    saveUserCompliment(complimentObj);
    renderLoveWall();
    
    // Показываем новый комплимент
    showRandomCompliment();
    
    // Очищаем поле ввода
    userCompliment.value = '';
    
    showModal('Спасибо за твоё признание в любви! 💖 Кудряшка Z обязательно его увидит!');
}

// --- Реакция на клик по таймеру ---
document.querySelector('.countdown-section').addEventListener('click', () => {
    // Убрали назойливое уведомление, оставили только визуальный эффект
});

// --- Реакция на клик по главной фотографии ---
const mainPhoto = document.querySelector('.main-photo');
if (mainPhoto) {
    mainPhoto.addEventListener('click', (e) => {
        createParticles(e.clientX, e.clientY);
        // Убрали назойливое уведомление, оставили только визуальный эффект
    });
}

// --- Плавающие комплименты ---
function showFloatingCompliment() {
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    const floatDiv = document.createElement('div');
    floatDiv.className = 'floating-compliment';
    floatDiv.textContent = compliment.text;
    floatDiv.style.position = 'fixed';
    floatDiv.style.left = Math.random() * 70 + 10 + 'vw';
    floatDiv.style.top = Math.random() * 60 + 10 + 'vh';
    floatDiv.style.zIndex = 2000;
    document.body.appendChild(floatDiv);
    setTimeout(() => {
        floatDiv.style.opacity = '0';
        floatDiv.style.transform = 'translateY(-40px) scale(1.1)';
    }, 2000);
    setTimeout(() => {
        if (floatDiv.parentNode) floatDiv.parentNode.removeChild(floatDiv);
    }, 3500);
}
setInterval(showFloatingCompliment, 15000); // каждые 15 секунд

// Функция для создания летающих сердечек
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.opacity = '0.7';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '0';
    heart.style.transition = 'all 6s linear';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.top = '-50px';
        heart.style.opacity = '0';
        heart.style.transform = 'rotate(360deg)';
    }, 100);
    
    setTimeout(() => {
        document.body.removeChild(heart);
    }, 6000);
}

// Функция для показа случайных комплиментов автоматически
function autoShowCompliments() {
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% шанс показать новый комплимент
            showRandomCompliment();
        }
    }, 10000); // Каждые 10 секунд
}

// Обработчики событий
newComplimentBtn.addEventListener('click', showRandomCompliment);
sendComplimentBtn.addEventListener('click', addUserCompliment);
closeModal.addEventListener('click', hideModal);

// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        hideModal();
    }
});

// Обработка нажатия Enter в текстовом поле
userCompliment.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        addUserCompliment();
    }
});

// --- Модальное окно выбора имени и аватарки ---
const fanModal = document.getElementById('fan-modal');
const fanModalClose = document.getElementById('fan-modal-close');
const fanNameInput = document.getElementById('fan-name-input');
const fanAvatarsList = document.getElementById('fan-avatars-list');
const fanModalSaveBtn = document.getElementById('fan-modal-save-btn');
const AVATAR_EMOJIS = ['😍','🥰','😎','🤩','😊','😇','😻','🦄','🐱','🐶','🐰','🦊','🐻','🐼','🐯','🐸','🐵','🦋','🌸','🌈','⭐','💖','🎉'];

function openFanModal() {
    fanModal.classList.add('open');
    fanNameInput.value = localStorage.getItem('fanName') || '';
    renderFanAvatars();
}
function closeFanModal() {
    fanModal.classList.remove('open');
}
function renderFanAvatars() {
    fanAvatarsList.innerHTML = '';
    const selected = localStorage.getItem('fanAvatar') || '';
    for (let i = 0; i < AVATAR_EMOJIS.length; ++i) {
        const url = `https://api.dicebear.com/7.x/personas/svg?seed=${encodeURIComponent(AVATAR_EMOJIS[i])}&backgroundColor=ffb6b6,ffd6e0,fff5e1,e0c3fc,c2f0fc&radius=50&scale=110`;
        const img = document.createElement('img');
        img.src = url;
        img.className = 'fan-avatar-option' + (selected === url ? ' selected' : '');
        img.alt = AVATAR_EMOJIS[i];
        img.onclick = () => {
            document.querySelectorAll('.fan-avatar-option').forEach(a => a.classList.remove('selected'));
            img.classList.add('selected');
            localStorage.setItem('fanAvatar', url);
        };
        fanAvatarsList.appendChild(img);
    }
}
fanModalClose && fanModalClose.addEventListener('click', closeFanModal);
fanModalSaveBtn && fanModalSaveBtn.addEventListener('click', () => {
    const name = fanNameInput.value.trim();
    if (name.length < 2) {
        fanNameInput.style.borderColor = '#ff6b9d';
        fanNameInput.focus();
        return;
    }
    try {
        localStorage.setItem('fanName', name);
        closeFanModal();
    } catch(e) {
        console.warn('Не удалось сохранить имя пользователя:', e);
        showModal('Имя сохранено, но может не сохраниться в приватном режиме браузера');
        closeFanModal();
    }
});
// Открытие модалки по клику на аватарку/имя на стене любви
function addFanModalTriggers() {
    document.querySelectorAll('.love-wall-author, .love-wall-avatar').forEach(el => {
        el.style.cursor = 'pointer';
        el.onclick = openFanModal;
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    loadLoveWallLikes();
    renderLoveWall();
    // Показываем первый комплимент
    showRandomCompliment();
    
    // Запускаем обратный отсчёт
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Запускаем автоматические комплименты
    autoShowCompliments();
    
    // Создаём летающие сердечки
    setInterval(createFloatingHeart, 3000);
    
    // Приветственное сообщение (убрали, чтобы не надоедать)
    // setTimeout(() => {
    //     showModal('Добро пожаловать на фан-сайт Кудряшки Z! 💖 Здесь ты найдёшь любовь и восхищение!');
    // }, 2000);
});

// При загрузке страницы, если нет имени или аватарки, открываем модалку
try {
    if (!localStorage.getItem('fanName') || !localStorage.getItem('fanAvatar')) {
        setTimeout(openFanModal, 800);
    }
} catch(e) {
    console.warn('Не удалось проверить настройки пользователя:', e);
    setTimeout(openFanModal, 800);
}

// Добавляем интерактивные эффекты при наведении
document.addEventListener('DOMContentLoaded', () => {
    // Эффект при наведении на кнопки
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Эффект при наведении на карточки
    const cards = document.querySelectorAll('.countdown-item, .compliment-card, .gallery-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
        });
    });
});

// --- Звуковой эффект при отправке комплимента ---
function playHeartSound() {
    try {
        // Можно заменить на реальный звук, если добавить heart.mp3 в проект
        if (window.Audio) {
            const audio = new Audio('https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae5e2.mp3');
            audio.volume = 0.2;
            audio.play().catch(e => {
                console.warn('Не удалось воспроизвести звук:', e);
            });
        }
    } catch(e) {
        console.warn('Ошибка при воспроизведении звука:', e);
    }
}
// Модифицируем addUserCompliment для звука
const origAddUserCompliment = addUserCompliment;
addUserCompliment = function() {
    playHeartSound();
    origAddUserCompliment();
};

// Функция для создания эффекта частиц
function createParticles(x, y) {
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = '✨';
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.fontSize = '20px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        particle.style.transition = 'all 1s ease-out';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.style.left = (x + (Math.random() - 0.5) * 200) + 'px';
            particle.style.top = (y - 100) + 'px';
            particle.style.opacity = '0';
        }, 100);
        
        setTimeout(() => {
            document.body.removeChild(particle);
        }, 1000);
    }
}

// Добавляем обработчик кликов для создания частиц
document.addEventListener('click', (event) => {
    createParticles(event.clientX, event.clientY);
    playHeartSound();
}); 

// --- Клик по фото в галерее ---
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.gallery-photo').forEach(photo => {
        photo.addEventListener('click', (e) => {
            createParticles(e.clientX, e.clientY);
            // Убрали назойливое уведомление
        });
    });
});

// --- Двойной клик по главной фотке ---
if (mainPhoto) {
    mainPhoto.addEventListener('dblclick', (e) => {
        mainPhoto.style.transition = 'transform 0.5s, box-shadow 0.5s';
        mainPhoto.style.transform = 'scale(1.15) rotate(2deg)';
        mainPhoto.style.boxShadow = '0 0 60px 20px #ff6b9d';
        createParticles(e.clientX, e.clientY);
        setTimeout(() => {
            mainPhoto.style.transform = '';
            mainPhoto.style.boxShadow = '';
        }, 700);
        // Убрали назойливое уведомление, оставили только визуальный эффект
    });
}

// --- Пасхалка: 7 кликов по главной фотке ---
let mainPhotoClickCount = 0;
let mainPhotoClickTimer = null;
if (mainPhoto) {
    mainPhoto.addEventListener('click', (e) => {
        mainPhotoClickCount++;
        if (mainPhotoClickTimer) clearTimeout(mainPhotoClickTimer);
        mainPhotoClickTimer = setTimeout(() => { mainPhotoClickCount = 0; }, 2000);
        if (mainPhotoClickCount === 7) {
            mainPhotoClickCount = 0;
            showModal('🎉 Ты нашёл секрет! Кудряшка Z передаёт тебе особый привет и желает счастья! 🌈');
            for (let i = 0; i < 20; i++) setTimeout(createFallingPetal, i * 80);
        }
    });
}

// --- Плавающие эмодзи ---
const floatEmojis = ['💖','✨','🌟','😍','🥰','🎉','💫'];
function showFloatingEmoji() {
    const emoji = floatEmojis[Math.floor(Math.random()*floatEmojis.length)];
    const floatDiv = document.createElement('div');
    floatDiv.textContent = emoji;
    floatDiv.style.position = 'fixed';
    floatDiv.style.left = Math.random()*90+5+'vw';
    floatDiv.style.top = Math.random()*80+5+'vh';
    floatDiv.style.fontSize = (Math.random()*30+30)+'px';
    floatDiv.style.opacity = '1';
    floatDiv.style.transition = 'opacity 1.5s, transform 1.5s';
    floatDiv.style.zIndex = 3000;
    document.body.appendChild(floatDiv);
    setTimeout(()=>{
        floatDiv.style.opacity = '0';
        floatDiv.style.transform = 'translateY(-40px) scale(1.2)';
    }, 1200);
    setTimeout(()=>{
        if(floatDiv.parentNode) floatDiv.parentNode.removeChild(floatDiv);
    }, 1800);
}
setInterval(showFloatingEmoji, 9000);

// --- Случайные мигающие рамки у фото в галерее ---
function randomGalleryHighlight() {
    const photos = document.querySelectorAll('.gallery-photo');
    if (photos.length === 0) return;
    const idx = Math.floor(Math.random()*photos.length);
    const photo = photos[idx];
    photo.classList.add('gallery-highlight');
    setTimeout(()=>{
        photo.classList.remove('gallery-highlight');
    }, 1200);
}
setInterval(randomGalleryHighlight, 7000);

// --- Кнопка "Сделать день ярче" ---
function addBrightenButton() {
    if (document.getElementById('brighten-btn')) return;
    const btn = document.createElement('button');
    btn.id = 'brighten-btn';
    btn.textContent = 'Сделать день ярче ✨';
    btn.className = 'brighten-btn';
    btn.style.position = 'fixed';
    btn.style.right = '30px';
    btn.style.bottom = '30px';
    btn.style.zIndex = 4000;
    btn.style.background = 'linear-gradient(45deg,#ff6b9d,#764ba2)';
    btn.style.color = '#fff';
    btn.style.fontSize = '1.1rem';
    btn.style.padding = '16px 32px';
    btn.style.borderRadius = '30px';
    btn.style.border = 'none';
    btn.style.boxShadow = '0 4px 24px rgba(118,75,162,0.18)';
    btn.style.cursor = 'pointer';
    btn.style.transition = 'transform 0.2s';
    btn.addEventListener('mouseenter',()=>{btn.style.transform='scale(1.07)';});
    btn.addEventListener('mouseleave',()=>{btn.style.transform='';});
    btn.addEventListener('click',()=>{
        for(let i=0;i<8;i++) setTimeout(showFloatingEmoji, i*120);
        // Убрали назойливое уведомление, оставили только визуальный эффект
    });
    document.body.appendChild(btn);
}
document.addEventListener('DOMContentLoaded', addBrightenButton); 

// --- Анимация увеличения числа подписчиков Telegram ---
function animateTgSubscribersCount(target) {
    const el = document.getElementById('tg-subs-count');
    if (!el) return;
    let current = 0;
    const duration = 1200;
    const steps = 40;
    const step = Math.ceil(target / steps);
    let interval = setInterval(() => {
        current += step;
        if (current >= target) {
            el.textContent = target;
            clearInterval(interval);
        } else {
            el.textContent = current;
        }
    }, duration / steps);
}
document.addEventListener('DOMContentLoaded', () => {
    // TODO: В будущем можно заменить на реальный API-запрос к Telegram
    // const channelUsername = 'kamishmilliechillie';
    // fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getChatMemberCount?chat_id=@${channelUsername}`)
    //   .then(response => response.json())
    //   .then(data => animateTgSubscribersCount(data.result))
    //   .catch(() => animateTgSubscribersCount(51)); // fallback
    animateTgSubscribersCount(51); // Статическое число, обновляется вручную
}); 

// --- Модальный просмотр галереи ---
const galleryPhotos = Array.from(document.querySelectorAll('.gallery-photo'));
const galleryModal = document.getElementById('gallery-modal');
const galleryModalImg = document.getElementById('gallery-modal-img');
const galleryModalCaption = document.getElementById('gallery-modal-caption');
const galleryModalClose = document.getElementById('gallery-modal-close');
const galleryModalPrev = document.getElementById('gallery-modal-prev');
const galleryModalNext = document.getElementById('gallery-modal-next');
let galleryModalIndex = 0;

function openGalleryModal(idx) {
    if (!galleryPhotos[idx]) return;
    galleryModalIndex = idx;
    const img = galleryPhotos[idx];
    galleryModalImg.src = img.src;
    galleryModalCaption.textContent = img.nextElementSibling ? img.nextElementSibling.textContent : '';
    galleryModal.classList.add('open');
}
function closeGalleryModal() {
    galleryModal.classList.remove('open');
}
function showPrevGalleryModal() {
    openGalleryModal((galleryModalIndex - 1 + galleryPhotos.length) % galleryPhotos.length);
}
function showNextGalleryModal() {
    openGalleryModal((galleryModalIndex + 1) % galleryPhotos.length);
}
if (galleryPhotos.length) {
    galleryPhotos.forEach((img, idx) => {
        img.addEventListener('click', () => openGalleryModal(idx));
    });
}
galleryModalClose && galleryModalClose.addEventListener('click', closeGalleryModal);
galleryModalPrev && galleryModalPrev.addEventListener('click', showPrevGalleryModal);
galleryModalNext && galleryModalNext.addEventListener('click', showNextGalleryModal);
galleryModal && galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) closeGalleryModal();
});
document.addEventListener('keydown', (e) => {
    if (!galleryModal.classList.contains('open')) return;
    if (e.key === 'Escape') closeGalleryModal();
    if (e.key === 'ArrowLeft') showPrevGalleryModal();
    if (e.key === 'ArrowRight') showNextGalleryModal();
}); 

// --- Переключение ночного режима ---
const darkModeToggle = document.getElementById('dark-mode-toggle');
function setDarkMode(on) {
    try {
        if (on) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', '1');
            darkModeToggle.textContent = '☀️';
            darkModeToggle.title = 'Переключить дневной режим';
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', '0');
            darkModeToggle.textContent = '🌙';
            darkModeToggle.title = 'Переключить ночной режим';
        }
    } catch(e) {
        console.warn('Не удалось сохранить настройки ночного режима:', e);
    }
}
darkModeToggle && darkModeToggle.addEventListener('click', () => {
    setDarkMode(!document.body.classList.contains('dark-mode'));
});
// Восстанавливаем режим при загрузке
try {
    if (localStorage.getItem('darkMode') === '1') setDarkMode(true);
} catch(e) {
    console.warn('Не удалось восстановить настройки ночного режима:', e);
}

// --- Сложная пасхалка: 13 быстрых кликов по ночному режиму ---
let darkModeSecretClicks = 0;
let darkModeSecretTimer = null;
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        darkModeSecretClicks++;
        if (darkModeSecretTimer) clearTimeout(darkModeSecretTimer);
        darkModeSecretTimer = setTimeout(() => { darkModeSecretClicks = 0; }, 10000);
        if (darkModeSecretClicks === 13) {
            darkModeSecretClicks = 0;
            showModal('👾 Ты нашёл суперсекретную пасхалку! Разработчик сайта: TG: @kosmosega 🚀');
            for (let i = 0; i < 30; i++) setTimeout(createFallingPetal, i * 60);
            setTimeout(() => showMatrixRain(6000), 800);
        }
    });
}

// --- Анимация падающих лепестков/сердечек ---
function createFallingPetal() {
    const petal = document.createElement('div');
    petal.className = 'falling-petal';
    petal.textContent = Math.random() < 0.5 ? '💖' : '🌸';
    petal.style.position = 'fixed';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.top = '-40px';
    petal.style.fontSize = (Math.random() * 18 + 18) + 'px';
    petal.style.opacity = Math.random() * 0.5 + 0.5;
    petal.style.pointerEvents = 'none';
    petal.style.zIndex = '1';
    petal.style.transition = 'transform 6s linear, opacity 6s linear';
    document.body.appendChild(petal);
    setTimeout(() => {
        petal.style.transform = `translateY(${window.innerHeight + 60}px) rotate(${Math.random()*360}deg)`;
        petal.style.opacity = '0';
    }, 100);
    setTimeout(() => {
        if (petal.parentNode) petal.parentNode.removeChild(petal);
    }, 6000);
}
setInterval(createFallingPetal, 1200); 

// --- Кнопки 'Поделиться' ---
function getShareUrl() {
    return window.location.origin + window.location.pathname;
}
document.getElementById('share-vk')?.addEventListener('click', function(e) {
    e.preventDefault();
    const url = encodeURIComponent(getShareUrl());
    const title = encodeURIComponent('Фан-сайт Кудряшки Z!');
    window.open(`https://vk.com/share.php?url=${url}&title=${title}`,'_blank','width=600,height=400');
});
document.getElementById('share-tg')?.addEventListener('click', function(e) {
    e.preventDefault();
    const url = encodeURIComponent(getShareUrl());
    const text = encodeURIComponent('Фан-сайт Кудряшки Z!');
    window.open(`https://t.me/share/url?url=${url}&text=${text}`,'_blank','width=600,height=400');
});
document.getElementById('share-ig')?.addEventListener('click', function(e) {
    e.preventDefault();
    showModal('📱 Для публикации в Instagram скопируй ссылку и опубликуй вручную! 💖');
    // Копируем ссылку в буфер обмена
    navigator.clipboard?.writeText(getShareUrl()).then(() => {
        showModal('🔗 Ссылка скопирована! Теперь можешь опубликовать её в Instagram! 💖');
    }).catch(() => {
        showModal('📋 Ссылка на сайт: ' + getShareUrl());
    });
}); 

// --- Праздничная тема в день рождения ---
function showBirthdayBanner() {
    if (document.getElementById('birthday-banner')) return;
    const banner = document.createElement('div');
    banner.id = 'birthday-banner';
    banner.innerHTML = '🎉 Сегодня день рождения Кудряшки Z! Поздравляем! 🎉';
    banner.className = 'birthday-banner';
    document.body.prepend(banner);
    setTimeout(() => { banner.classList.add('show'); }, 100);
    setTimeout(() => { banner.classList.remove('show'); banner.remove(); }, 15000);
}
function isBirthdayToday() {
    const now = new Date();
    return now.getDate() === 25 && now.getMonth() === 10;
}
if (isBirthdayToday()) {
    setTimeout(showBirthdayBanner, 1200);
    setTimeout(() => {
        showModal('🎂 Сегодня день рождения Кудряшки Z! Пусть этот день будет волшебным! 🎂');
        for (let i = 0; i < 40; i++) setTimeout(createFallingPetal, i * 60);
    }, 2000);
} 

// --- Эффект матрицы (дождь из зелёных символов) ---
function showMatrixRain(duration = 5000) {
    if (document.getElementById('matrix-canvas')) return;
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-canvas';
    canvas.style.position = 'fixed';
    canvas.style.left = '0';
    canvas.style.top = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    const letters = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЫЭЮЯABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
    const fontSize = 22;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    let running = true;
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.18)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = fontSize + 'px monospace';
        ctx.fillStyle = '#00ff55';
        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
        if (running) requestAnimationFrame(draw);
    }
    draw();
    setTimeout(() => {
        running = false;
        canvas.remove();
    }, duration);
} 

// --- Система достижений ---
const ACHIEVEMENTS = [
  { key: 'first-compliment', emoji: '💌', title: 'Первый шаг к звезде', desc: 'Оставь свой первый комплимент на стене любви.' },
  { key: 'all-easter-eggs', emoji: '🕵️‍♂️', title: 'Охотник за тайнами', desc: 'Найди все пасхалки на сайте.' },
  { key: 'night-mode', emoji: '🌙', title: 'Лунный фанат', desc: 'Включи ночной режим хотя бы один раз.' },
  { key: 'birthday', emoji: '🎂', title: 'Праздничный визит', desc: 'Зайди на сайт в день рождения Кудряшки Z.' },
  { key: 'gallery-expert', emoji: '🖼️', title: 'Галерейный эксперт', desc: 'Посмотри каждое фото в модальном окне галереи.' },
  { key: 'superlike', emoji: '💖', title: 'Суперлайк', desc: 'Сделай двойной клик по главной фотографии.' },
  { key: 'legend', emoji: '🏆', title: 'Легенда фан-клуба', desc: 'Получить все остальные достижения.' },
  { key: 'dev-easter-egg', emoji: '🧩', title: 'Секретный код', desc: 'Найди пасхалку с ником разработчика.' },
  { key: 'rainbow', emoji: '🦄', title: 'Радужный момент', desc: 'Активируй кнопку “Сделать день ярче”.' },
  { key: 'party', emoji: '🎉', title: 'Вечеринка эмоций', desc: 'Получить 5 лайков на одном комплименте.' }
];
function getAchievements() {
  try { 
    const saved = localStorage.getItem('achievements');
    return saved ? JSON.parse(saved) : {}; 
  } catch(e){ 
    console.warn('Не удалось загрузить достижения:', e);
    return {}; 
  }
}
function setAchievement(key) {
  try {
    const ach = getAchievements();
    if (!ach[key]) {
      ach[key] = Date.now();
      localStorage.setItem('achievements', JSON.stringify(ach));
      showAchievementToast(key);
      renderAchievementsModal();
      // Легенда фан-клуба (если все кроме legend)
      if (key !== 'legend' && ACHIEVEMENTS.filter(a => a.key !== 'legend').every(a => ach[a.key])) {
        setAchievement('legend');
      }
    }
  } catch(e) {
    console.warn('Не удалось сохранить достижение:', e);
  }
}
function hasAchievement(key) {
  return !!getAchievements()[key];
}
// --- Всплывающее уведомление о достижении ---
function showAchievementToast(key) {
  const a = ACHIEVEMENTS.find(a => a.key === key);
  if (!a) return;
  let toast = document.createElement('div');
  toast.className = 'achievement-toast';
  toast.innerHTML = `<span class='achievement-emoji'>${a.emoji}</span> <b>${a.title}</b><br><span class='achievement-desc'>${a.desc}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => { toast.classList.add('show'); }, 100);
  setTimeout(() => { toast.classList.remove('show'); toast.remove(); }, 5000);
}
// --- Модальное окно достижений ---
const achievementsToggle = document.getElementById('achievements-toggle');
const achievementsModal = document.getElementById('achievements-modal');
const achievementsModalClose = document.getElementById('achievements-modal-close');
const achievementsList = document.getElementById('achievements-list');
achievementsToggle && achievementsToggle.addEventListener('click', () => {
  achievementsModal.classList.add('open');
  renderAchievementsModal();
});
achievementsModalClose && achievementsModalClose.addEventListener('click', () => achievementsModal.classList.remove('open'));
achievementsModal && achievementsModal.addEventListener('click', (e) => {
  if (e.target === achievementsModal) achievementsModal.classList.remove('open');
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && achievementsModal.classList.contains('open')) achievementsModal.classList.remove('open');
});
function renderAchievementsModal() {
  const ach = getAchievements();
  achievementsList.innerHTML = '';
  ACHIEVEMENTS.forEach(a => {
    const item = document.createElement('div');
    item.className = 'achievement-item' + (ach[a.key] ? ' achieved' : '');
    item.innerHTML = `<span class='achievement-emoji'>${a.emoji}</span><div><div class='achievement-title'>${a.title}</div><div class='achievement-desc'>${a.desc}</div></div>`;
    achievementsList.appendChild(item);
  });
}
// --- Стили для тоста ---
const style = document.createElement('style');
style.innerHTML = `.achievement-toast {position:fixed;top:30px;left:50%;transform:translateX(-50%) scale(0.8);background:linear-gradient(90deg,#fff176,#ff6b9d);color:#764ba2;font-size:1.1rem;font-family:'Montserrat',sans-serif;padding:18px 36px;border-radius:18px;box-shadow:0 4px 24px #ff6b9d55;z-index:7000;opacity:0;transition:opacity .5s,transform .5s;text-align:center;pointer-events:none;}.achievement-toast.show{opacity:1;transform:translateX(-50%) scale(1.08);}`;
document.head.appendChild(style); 

// --- Интеграция выдачи достижений ---
// 1. Первый комплимент
const origAddUserComplimentForAch = addUserCompliment;
addUserCompliment = function() {
    const before = getAchievements();
    try { origAddUserComplimentForAch(); } catch(e) { return; }
    if (!before['first-compliment']) setAchievement('first-compliment');
};
// 2. Пасхалка на главной фотке (7 кликов)
let mainPhotoEasterEggFound = false;
if (mainPhoto) {
    mainPhoto.addEventListener('click', (e) => {
        if (mainPhotoClickCount === 7 && !mainPhotoEasterEggFound) {
            mainPhotoEasterEggFound = true;
            setAchievement('all-easter-eggs');
        }
    });
}
// 3. Пасхалка с разработчиком
let devEasterEggFound = false;
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        if (darkModeSecretClicks === 13 && !devEasterEggFound) {
            devEasterEggFound = true;
            setAchievement('dev-easter-egg');
        }
    });
}
// 4. Ночной режим
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) setAchievement('night-mode');
    });
}
// 5. Просмотр всех фото в модальном окне галереи
let galleryViewed = new Set();
try {
    const saved = localStorage.getItem('galleryViewed');
    if (saved) {
        galleryViewed = new Set(JSON.parse(saved));
    }
} catch(e) {
    console.warn('Не удалось загрузить просмотренные фото:', e);
}
function markGalleryViewed(idx) {
    try {
        galleryViewed.add(idx);
        localStorage.setItem('galleryViewed', JSON.stringify(Array.from(galleryViewed)));
        if (galleryViewed.size === galleryPhotos.length) setAchievement('gallery-expert');
    } catch(e) {
        console.warn('Не удалось сохранить просмотренные фото:', e);
    }
}
if (galleryPhotos.length) {
    galleryPhotos.forEach((img, idx) => {
        img.addEventListener('click', () => markGalleryViewed(idx));
    });
}
// 6. Суперлайк (двойной клик по главной фотке)
if (mainPhoto) {
    mainPhoto.addEventListener('dblclick', () => setAchievement('superlike'));
}
// 7. День рождения
if (isBirthdayToday()) setAchievement('birthday');
// 8. Яркий день (кнопка brighten-btn)
document.addEventListener('DOMContentLoaded', () => {
    const brightenBtn = document.getElementById('brighten-btn');
    if (brightenBtn) {
        brightenBtn.addEventListener('click', () => setAchievement('rainbow'));
    }
});
// 9. 5 лайков на одном комплименте (сделали более достижимым)
function checkPartyAchievement() {
    compliments.forEach(c => {
        if (c.likes && c.likes >= 5) setAchievement('party');
    });
}
setInterval(checkPartyAchievement, 3000); 