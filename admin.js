// Административная панель для загрузки логотипа
document.addEventListener('DOMContentLoaded', () => {
    initLogoUploader();
    loadSavedLogo();
});

// Инициализация загрузчика логотипа
function initLogoUploader() {
    // Создаем кнопку для администратора (доступна по двойному тапу по логотипу)
    const logo = document.querySelector('.logo');
    
    let touchTimer;
    logo?.addEventListener('dblclick', () => {
        openLogoUploader();
    });
    
    // Мобильная версия - долгое нажатие
    logo?.addEventListener('touchstart', (e) => {
        touchTimer = setTimeout(() => {
            openLogoUploader();
        }, 500);
    });
    
    logo?.addEventListener('touchend', () => {
        clearTimeout(touchTimer);
    });
    
    // Обработчики модального окна
    const modal = document.getElementById('logoUploadModal');
    const closeBtn = modal?.querySelector('.modal-close');
    
    closeBtn?.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Drag & drop
    const uploadArea = document.getElementById('uploadArea');
    const logoInput = document.getElementById('logoInput');
    
    uploadArea?.addEventListener('click', () => {
        logoInput.click();
    });
    
    uploadArea?.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.background = 'var(--primary-light)';
    });
    
    uploadArea?.addEventListener('dragleave', () => {
        uploadArea.style.background = '';
    });
    
    uploadArea?.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.background = '';
        
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            previewLogo(file);
        }
    });
    
    document.getElementById('selectLogoBtn')?.addEventListener('click', () => {
        logoInput.click();
    });
    
    logoInput?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            previewLogo(file);
        }
    });
    
    document.getElementById('saveLogo')?.addEventListener('click', () => {
        saveLogo();
    });
}

// Открыть загрузчик логотипа
function openLogoUploader() {
    const modal = document.getElementById('logoUploadModal');
    modal.classList.add('active');
}

// Предпросмотр логотипа
function previewLogo(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const preview = document.getElementById('previewImage');
        preview.src = e.target.result;
        
        document.getElementById('uploadArea').style.display = 'none';
        document.getElementById('logoPreview').style.display = 'block';
        
        // Сохраняем данные
        window.previewData = e.target.result;
    };
    reader.readAsDataURL(file);
}

// Сохранение логотипа
function saveLogo() {
    if (window.previewData) {
        localStorage.setItem('logo', window.previewData);
        
        // Обновляем логотипы на странице
        const logoElements = document.querySelectorAll('.logo-star');
        logoElements.forEach(el => {
            el.style.background = `url(${window.previewData}) no-repeat center/contain`;
            el.style.color = 'transparent';
            el.style.width = '40px';
            el.style.height = '40px';
            el.innerHTML = '';
        });
        
        const modal = document.getElementById('logoUploadModal');
        modal.classList.remove('active');
        
        showNotification('Логотип успешно сохранен!', 'success');
        
        // Сброс
        document.getElementById('uploadArea').style.display = 'block';
        document.getElementById('logoPreview').style.display = 'none';
        window.previewData = null;
    }
}

// Загрузка сохраненного логотипа
function loadSavedLogo() {
    const savedLogo = localStorage.getItem('logo');
    if (savedLogo) {
        const logoElements = document.querySelectorAll('.logo-star');
        logoElements.forEach(el => {
            el.style.background = `url(${savedLogo}) no-repeat center/contain`;
            el.style.color = 'transparent';
            el.style.width = '40px';
            el.style.height = '40px';
            el.innerHTML = '';
        });
    }
}

// Секретный вход в админку (комбинация клавиш)
let keySequence = '';
document.addEventListener('keydown', (e) => {
    keySequence += e.key;
    if (keySequence.includes('starfit')) {
        openLogoUploader();
        keySequence = '';
    }
    
    // Очищаем через 2 секунды
    clearTimeout(window.keyTimer);
    window.keyTimer = setTimeout(() => {
        keySequence = '';
    }, 2000);
});
