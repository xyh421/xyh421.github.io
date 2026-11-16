// Bilingual resume language switcher.
let currentLang;
try { currentLang = localStorage.getItem('language') === 'zh' ? 'zh' : 'en'; }
catch (_) { currentLang = 'en'; }

function updateContent() {
  const dictionary = (typeof translations !== 'undefined' && translations[currentLang]) || {};
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.textContent = dictionary[key];
    }
  });
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  const tooltip = document.querySelector('.tooltip-text');
  if (tooltip) tooltip.textContent = currentLang === 'en' ? 'Switch to Chinese' : '切换到英文';
  const button = document.querySelector('.lang-text');
  if (button) button.textContent = currentLang === 'en' ? 'CN' : 'EN';
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  try { localStorage.setItem('language', currentLang); } catch (_) {}
  updateContent();
}

document.addEventListener('DOMContentLoaded', updateContent);
