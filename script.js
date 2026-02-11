// Основные данные
const APP_DATA = {
    clubName: 'Star Fit',
    address: 'г. Светлогорск, ул. 50 лет Октября, 2Б',
    phone: '+375 (23) 456-78-90',
    email: 'info@star-fit.by',
    workingHours: '07:00 - 23:00',
    
    trainers: [
        {
            id: 1,
            name: 'Анна Ковальчук',
            specialty: 'Йога, Пилатес',
            experience: '8 лет',
            image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
            instagram: '#',
            vk: '#'
        },
        {
            id: 2,
            name: 'Дмитрий Волков',
            specialty: 'Силовые тренировки, CrossFit',
            experience: '12 лет',
            image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
            instagram: '#',
            vk: '#'
        },
        {
            id: 3,
            name: 'Елена Соколова',
            specialty: 'Стретчинг, Боди-балет',
            experience: '6 лет',
            image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
            instagram: '#',
            vk: '#'
        },
        {
            id: 4,
            name: 'Игорь Морозов',
            specialty: 'Бокс, ММА',
            experience: '15 лет',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
            instagram: '#',
            vk: '#'
        }
    ],
    
    schedule: {
        monday: [
            { time: '09:00', title: 'Йога', instructor: 'Анна Ковальчук', spots: 8, hall: 'Зал 2' },
            { time: '11:00', title: 'Пилатес', instructor: 'Анна Ковальчук', spots: 5, hall: 'Зал 2' },
            { time: '18:00', title: 'Силовая', instructor: 'Дмитрий Волков', spots: 12, hall: 'Зал 1' },
            { time: '19:30', title: 'Стретчинг', instructor: 'Елена Соколова', spots: 6, hall: 'Зал 2' },
            { time: '20:30', title: 'CrossFit', instructor: 'Дмитрий Волков', spots: 10, hall: 'Зал 1' }
        ],
        tuesday: [
            { time: '10:00', title: 'Zumba', instructor: 'Мария Иванова', spots: 15, hall: 'Зал 1' },
            { time: '18:00', title: 'Бокс', instructor: 'Игорь Морозов', spots: 8, hall: 'Ринг' },
            { time: '19:30', title: 'TRX', instructor: 'Дмитрий Волков', spots: 7, hall: 'Зал 1' }
        ],
        wednesday: [
            { time: '09:00', title: 'Йога', instructor: 'Анна Ковальчук', spots: 6, hall: 'Зал 2' },
            { time: '18:00', title: 'Силовая', instructor: 'Дмитрий Волков', spots: 10, hall: 'Зал 1' },
            { time: '19:30', title: 'Стретчинг', instructor: 'Елена Соколова', spots: 4, hall: 'Зал 2' }
        ],
        thursday: [
            { time: '11:00', title: 'Пилатес', instructor: 'Анна Ковальчук', spots: 7, hall: 'Зал 2' },
            { time: '18:00', title: 'Бокс', instructor: 'Игорь Морозов', spots: 9, hall: 'Ринг' },
            { time: '19:30', title: 'CrossFit', instructor: 'Дмитрий Волков', spots: 12, hall: 'Зал 1' }
        ],
        friday: [
            { time: '09:00', title: 'Йога', instructor: 'Анна Ковальчук', spots: 5, hall: 'Зал 2' },
            { time: '18:00', title: 'Zumba', instructor: 'Мария Иванова', spots: 14, hall: 'Зал 1' },
            { time: '19:30', title: 'Силовая', instructor: 'Дмитрий Волков', spots: 8, hall: 'Зал 1' }
        ],
        saturday: [
            { time: '10:00', title: 'Йога', instructor: 'Анна Ковальчук', spots: 10, hall: 'Зал 2' },
            { time: '12:00', title: 'Стретчинг', instructor: 'Елена Соколова', spots: 7, hall: 'Зал 2' },
            { time: '14:00', title: 'Силовая', instructor: 'Дмитрий Волков', spots: 6, hall: 'Зал 1' }
        ],
        sunday: [
            { time: '11:00', title: 'Пилатес', instructor: 'Анна Ковальчук', spots: 9, hall: 'Зал 2' },
            { time: '16:00', title: 'Бокс', instructor: 'Игорь Морозов', spots: 5, hall: 'Ринг' }
        ]
    },
    
    bookings: JSON.parse(localStorage.getItem('bookings')) || [],
    logo: localStorage.getItem('logo') || ''
};

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initEventListeners();
    loadTrainers();
    loadSchedule('monday');
    initTheme();
    initSmoothScroll();
    initAnimations();
    initFormMask();
    initClientCount();
});

// Прелоадер
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1500);
}

// Инициализация обработчиков событий
function initEventListeners() {
    // Меню
    document.getElementById('menuBtn').addEventListener('click', () => {
        document.getElementById('sidebar').classList.add('active');
    });
    
    document.getElementById('sidebarClose').addEventListener('click', () => {
        document.getElementById('sidebar').classList.remove('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.sidebar') && !e.target.closest('#menuBtn')) {
            document.getElementById('sidebar').classList.remove('active');
        }
    });
    
    // Прокрутка наверх
    const scrollTop = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTop.classList.add('show');
        } else {
            scrollTop.classList.remove('show');
        }
    });
    
    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Переключение темы
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        const icon = themeToggle.querySelector('i');
        icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });
    
    // Вкладки расписания
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadSchedule(this.dataset.day);
        });
    });
    
    // Форма записи
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', handleBookingSubmit);
    
    // Карта
    document.getElementById('openMap')?.addEventListener('click', (e) => {
        e.preventDefault();
        const address = encodeURIComponent('Светлогорск, 50 лет Октября 2Б');
        window.open(`https://yandex.ru/maps/?text=${address}`, '_blank');
    });
    
    // Кнопки услуг
    document.querySelectorAll('.service-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const serviceCard = e.target.closest('.service-card');
            const serviceTitle = serviceCard.querySelector('h3').textContent;
            
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
            
            const serviceSelect = document.getElementById('service');
            Array.from(serviceSelect.options).forEach(option => {
                if (option.text.includes(serviceTitle)) {
                    serviceSelect.value = option.value;
                }
            });
            
            showNotification(`Вы выбрали: ${serviceTitle}`, 'info');
        });
    });
}

// Загрузка тренеров
function loadTrainers() {
    const slider = document.getElementById('trainersSlider');
    let html = '';
    
    APP_DATA.trainers.forEach(trainer => {
        html += `
            <div class="trainer-card" data-id="${trainer.id}">
                <img src="${trainer.image}" alt="${trainer.name}" class="trainer-image" loading="lazy">
                <div class="trainer-info">
                    <h3 class="trainer-name">${trainer.name}</h3>
                    <div class="trainer-specialty">${trainer.specialty}</div>
                    <div class="trainer-experience">Опыт: ${trainer.experience}</div>
                    <div class="trainer-social">
                        <a href="${trainer.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="${trainer.vk}" target="_blank"><i class="fab fa-vk"></i></a>
                    </div>
                </div>
            </div>
        `;
    });
    
    slider.innerHTML = html;
}

// Загрузка расписания
function loadSchedule(day) {
    const grid = document.getElementById('scheduleGrid');
    const classes = APP_DATA.schedule[day] || [];
    
    if (classes.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Нет занятий на этот день</p>';
        return;
    }
    
    let html = '';
    classes.forEach(cls => {
        const spotsClass = cls.spots <= 5 ? 'low-spots' : '';
        html += `
            <div class="schedule-item">
                <span class="schedule-time">${cls.time}</span>
                <h4 class="schedule-title">${cls.title}</h4>
                <div class="schedule-instructor">
                    <i class="fas fa-user"></i>
                    ${cls.instructor}
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="schedule-spots ${spotsClass}">
                        <i class="fas fa-users"></i>
                        ${cls.spots} мест
                    </span>
                    <button class="btn btn-primary" style="padding: 8px 16px;" onclick="quickBooking('${cls.title}', '${cls.time}')">
                        Записаться
                    </button>
                </div>
            </div>
        `;
    });
    
    grid.innerHTML = html;
}

// Быстрая запись
function quickBooking(title, time) {
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
    
    const serviceSelect = document.getElementById('service');
    Array.from(serviceSelect.options).forEach(option => {
        if (title.toLowerCase().includes(option.text.toLowerCase())) {
            serviceSelect.value = option.value;
        }
    });
    
    showNotification(`Запись на: ${title} в ${time}`, 'success');
}

// Обработка отправки формы
function handleBookingSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const booking = {
        id: Date.now(),
        name: formData.get('name'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        time: formData.get('time'),
        comment: formData.get('comment'),
        date: new Date().toISOString(),
        status: 'new'
    };
    
    // Сохраняем в локальное хранилище
    APP_DATA.bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(APP_DATA.bookings));
    
    // Отправляем в Telegram (замените на свои данные)
    sendToTelegram(booking);
    
    // Показываем успех
    const form = document.getElementById('bookingForm');
    const success = document.getElementById('bookingSuccess');
    form.style.display = 'none';
    success.style.display = 'block';
    
    // Сбрасываем форму через 3 секунды
    setTimeout(() => {
        form.reset();
        form.style.display = 'block';
        success.style.display = 'none';
    }, 3000);
    
    showNotification('Заявка успешно отправлена! Мы свяжемся с вами.', 'success');
}

// Отправка в Telegram
function sendToTelegram(booking) {
    // Замените на свои данные
    const botToken = 'YOUR_BOT_TOKEN';
    const chatId = 'YOUR_CHAT_ID';
    
    const message = `
🌟 Новая запись в Star Fit!
👤 Имя: ${booking.name}
📱 Телефон: ${booking.phone}
🏋️ Услуга: ${booking.service}
⏰ Время: ${booking.time || 'Не указано'}
💬 Комментарий: ${booking.comment || 'Нет'}
    `;
    
    // Раскомментируйте для отправки в Telegram
    /*
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
        })
    })
    .then(response => response.json())
    .then(data => console.log('Отправлено в Telegram:', data))
    .catch(error => console.error('Ошибка отправки в Telegram:', error));
    */
}

// Инициализация темы
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const icon = document.querySelector('#themeToggle i');
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Плавная прокрутка
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Анимации
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.service-card, .pricing-card, .trainer-card').forEach(el => {
        observer.observe(el);
    });
}

// Маска для телефона
function initFormMask() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 0) {
                if (value.startsWith('375')) {
                    value = '+375 ' + value.slice(3);
                } else if (value.startsWith('8')) {
                    value = '8 ' + value.slice(1);
                }
                
                if (value.length > 5) {
                    value = value.slice(0, 5) + ' ' + value.slice(5);
                }
                if (value.length > 9) {
                    value = value.slice(0, 9) + ' ' + value.slice(9);
                }
                if (value.length > 12) {
                    value = value.slice(0, 12) + ' ' + value.slice(12);
                }
                if (value.length > 15) {
                    value = value.slice(0, 15);
                }
            }
            
            e.target.value = value;
        });
    }
}

// Количество клиентов в клубе
function initClientCount() {
    const countElement = document.querySelector('.clients-count');
    if (countElement) {
        updateClientCount();
        setInterval(updateClientCount, 60000);
    }
}

function updateClientCount() {
    const countElement = document.querySelector('.clients-count');
    if (countElement) {
        const hour = new Date().getHours();
        let baseCount = 0;
        
        if (hour >= 7 && hour < 10) baseCount = 12;
        else if (hour >= 10 && hour < 14) baseCount = 8;
        else if (hour >= 14 && hour < 17) baseCount = 15;
        else if (hour >= 17 && hour < 21) baseCount = 25;
        else if (hour >= 21) baseCount = 10;
        else baseCount = 3;
        
        const random = Math.floor(Math.random() * 7) - 3;
        const total = Math.max(0, baseCount + random);
        countElement.textContent = total;
        
        if (total > 20) countElement.style.color = 'var(--error)';
        else if (total > 15) countElement.style.color = 'var(--warning)';
        else countElement.style.color = 'var(--success)';
    }
}

// Уведомления
function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    
    notification.innerHTML = `
        <i class="fas ${icons[type] || icons.info}" style="color: var(--${type});"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" style="margin-left: auto; background: none; border: none; color: var(--gray); cursor: pointer;">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    notification.style.display = 'flex';
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Экспорт для глобального доступа
window.showNotification = showNotification;
window.quickBooking = quickBooking;
