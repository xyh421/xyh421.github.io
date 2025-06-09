// 获取当前语言，默认为英文
let currentLang = localStorage.getItem('language') || 'en';

// 更新页面内容
function updateContent() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

// 切换语言
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    localStorage.setItem('language', currentLang);
    updateContent();
    
    // 更新按钮提示文字
    const tooltipText = document.querySelector('.tooltip-text');
    if (tooltipText) {
        tooltipText.textContent = currentLang === 'en' ? 'Switch to Chinese' : '切换到英文';
    }
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    
    // 初始化按钮提示文字
    const tooltipText = document.querySelector('.tooltip-text');
    if (tooltipText) {
        tooltipText.textContent = currentLang === 'en' ? 'Switch to Chinese' : '切换到英文';
    }
}); 