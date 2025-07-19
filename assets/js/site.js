/**
 * assets/js/site.js
 * - Header settings modal open/close logic
 * - Theme switching (10 themes)
 * - Also focuses initial highlight
 */

document.addEventListener('DOMContentLoaded', function() {
  const THEME_COUNT = 10;
  const THEME_PREFIX = 'theme-';
  const DEFAULT_THEME = 1;
  const LS_KEY = 'sg-portfolio-theme';

  function applyTheme(themeNum) {
    document.body.className = '';
    document.body.classList.add(THEME_PREFIX + themeNum);
  }
  function updateThemeChoices(selectedTheme) {
    document.querySelectorAll('.theme-choice').forEach(btn => {
      btn.classList.toggle('selected', btn.dataset.theme == selectedTheme);
    });
  }

  // Modal open/close logic
  const openBtn = document.getElementById('open-settings');
  const modalBg = document.getElementById('settings-modal-bg');
  const modal = document.getElementById('settings-modal');
  function showModal() {
    modalBg.style.display = "block";
    modal.style.display = "block";
    modal.focus();
  }
  function hideModal() {
    modalBg.style.display = "none";
    modal.style.display = "none";
  }
  openBtn.addEventListener('click', showModal);
  modalBg.addEventListener('click', hideModal);
  document.addEventListener('keydown', (e) => {
    if ((modal.style.display === "block") && (e.key === "Escape")) hideModal();
  });

  // Apply initial theme
  let selectedTheme = parseInt(localStorage.getItem(LS_KEY), 10);
  if (Number.isNaN(selectedTheme) || selectedTheme < 1 || selectedTheme > THEME_COUNT)
    selectedTheme = DEFAULT_THEME;
  applyTheme(selectedTheme);

  // Update modal with correct selected state
  document.addEventListener('click', function(ev) {
    if (!ev.target.classList.contains('theme-choice')) return;
    const theme = parseInt(ev.target.dataset.theme, 10);
    if (!isNaN(theme) && theme >= 1 && theme <= THEME_COUNT) {
      localStorage.setItem(LS_KEY, theme);
      applyTheme(theme);
      updateThemeChoices(theme);
    }
  });

  // On modal show, mark selected
  if (modal) modal.addEventListener('focus', () => updateThemeChoices(selectedTheme));
});
