
function toggleLanguage() {
  const elements = document.querySelectorAll('[data-fr], [data-en]');
  const currentLang = document.querySelector('.language-toggle').textContent === 'English' ? 'fr' : 'en';
  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });
  document.querySelector('.language-toggle').textContent = currentLang === 'fr' ? 'English' : 'Français';
}
    