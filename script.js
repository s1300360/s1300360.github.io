const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const languageToggle = document.getElementById('language-toggle');

navToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

function setLanguage(lang) {
  const isZh = lang === 'zh';
  document.documentElement.lang = isZh ? 'zh-Hant' : 'en';
  document.body.classList.toggle('lang-zh', isZh);
  document.querySelectorAll('[data-en][data-zh]').forEach((el) => {
    el.textContent = el.dataset[lang];
  });
  languageToggle.textContent = isZh ? 'EN' : '中文';
  languageToggle.setAttribute('aria-label', isZh ? 'Switch to English' : '切換至中文');
  localStorage.setItem('academic-site-language', lang);
}

const storedLanguage = localStorage.getItem('academic-site-language');
setLanguage(storedLanguage === 'zh' ? 'zh' : 'en');

languageToggle?.addEventListener('click', () => {
  setLanguage(document.documentElement.lang === 'zh-Hant' ? 'en' : 'zh');
});

document.getElementById('year').textContent = new Date().getFullYear();
