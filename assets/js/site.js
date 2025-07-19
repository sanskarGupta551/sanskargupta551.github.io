/**
 * assets/js/site.js
 * Robust settings modal and accurate theme switcher for Jekyll/HTML portfolio.
 */

document.addEventListener('DOMContentLoaded', function() {
  const THEME_COUNT = 10, THEME_PREFIX = 'theme-', DEFAULT_THEME = 1, LS_KEY = 'sg-portfolio-theme';

  // Theme change
  function setTheme(idx) {
    document.body.className = THEME_PREFIX + idx;
    localStorage.setItem(LS_KEY, idx);
    updateThemeChoices(idx);
  }

  function updateThemeChoices(selected) {
    document.querySelectorAll('.theme-choice').forEach(btn => {
      btn.classList.toggle('selected', btn.dataset.theme == selected);
    });
  }

  // Modal open/close
  const openBtn = document.getElementById('open-settings');
  const modalBg = document.getElementById('settings-modal-bg');
  const modal = document.getElementById('settings-modal');
  
  function showModal() {
    modalBg.style.display = "block";
    modal.style.display = "block";
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(() => modal.focus(), 30);
  }
  function hideModal() {
    modal.style.display = "none";
    modalBg.style.display = "none";
    modal.setAttribute('aria-hidden', 'true');
  }

  if (openBtn) openBtn.addEventListener('click', showModal);
  if (modalBg) modalBg.addEventListener('click', hideModal);
  document.addEventListener('keydown', function(ev) {
    if ((modal.style.display === "block") && (ev.key === "Escape")) hideModal();
  });

  // Theme picker logic
  document.body.addEventListener('click', function(e) {
    if (e.target.classList.contains('theme-choice') || e.target.closest('.theme-choice')) {
      let btn = e.target.classList.contains('theme-choice') ? e.target : e.target.closest('.theme-choice');
      let idx = parseInt(btn.dataset.theme, 10);
      if(!Number.isNaN(idx) && idx >= 1 && idx <= THEME_COUNT) {
        setTheme(idx);
      }
    }
  });

  // Initialization: default dark theme
  let selectedTheme = parseInt(localStorage.getItem(LS_KEY), 10);
  if (Number.isNaN(selectedTheme) || selectedTheme < 1 || selectedTheme > THEME_COUNT) selectedTheme = DEFAULT_THEME;
  document.body.className = THEME_PREFIX + selectedTheme;
  updateThemeChoices(selectedTheme);
});
