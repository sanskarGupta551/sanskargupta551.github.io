// assets/js/site.js
// Reliable theme switcher + modal logic with accurate highlighting and defaults
// assets/js/site.js
document.addEventListener('DOMContentLoaded', function() {
  const THEME_COUNT = 12, THEME_PREFIX = 'theme-', DEFAULT_THEME = 1, LS_KEY = 'sg-portfolio-theme';

  function setTheme(idx) {
    document.body.className = THEME_PREFIX + idx;
    localStorage.setItem(LS_KEY, idx);
    updateThemeChoices(idx);
  }
  function updateThemeChoices(selected) {
    document.querySelectorAll('.theme-choice').forEach(btn =>
      btn.classList.toggle('selected', btn.dataset.theme == selected)
    );
  }

  const openBtn = document.getElementById('open-settings');
  const modalBg = document.getElementById('settings-modal-bg');
  const modal = document.getElementById('settings-modal');
  function showModal() { modalBg.style.display = "block"; modal.style.display = "block"; setTimeout(() => modal.focus(), 30);}
  function hideModal() { modalBg.style.display = "none"; modal.style.display = "none"; }
  if (openBtn) openBtn.addEventListener('click', showModal);
  if (modalBg) modalBg.addEventListener('click', hideModal);
  document.addEventListener('keydown', function(ev) { if (modal.style.display === "block" && ev.key === "Escape") hideModal(); });

  document.body.addEventListener('click', function(e) {
    if (e.target.classList.contains('theme-choice') || e.target.closest('.theme-choice')) {
      let btn = e.target.classList.contains('theme-choice') ? e.target : e.target.closest('.theme-choice');
      let idx = parseInt(btn.dataset.theme, 10);
      if(!Number.isNaN(idx) && idx >= 1 && idx <= THEME_COUNT) setTheme(idx);
    }
  });

  // Init
  let selectedTheme = parseInt(localStorage.getItem(LS_KEY), 10);
  if (Number.isNaN(selectedTheme) || selectedTheme < 1 || selectedTheme > THEME_COUNT) selectedTheme = DEFAULT_THEME;
  setTheme(selectedTheme);
});
