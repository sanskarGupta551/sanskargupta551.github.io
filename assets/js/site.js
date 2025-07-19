/**
 * assets/js/site.js
 * Advanced theme switching logic with 10 theme options, dark theme as default, and UI persistence.
 */

document.addEventListener('DOMContentLoaded', function() {
  // Theme system: theme numbers 1-10, theme-1 is the default (dark)
  const THEME_COUNT = 10;
  const THEME_PREFIX = 'theme-';
  const DEFAULT_THEME = 1;
  const LS_KEY = 'sg-portfolio-theme';

  // Utility: Apply theme class to body
  function applyTheme(themeNum) {
    document.body.className = ''; // Remove all existing classes
    document.body.classList.add(THEME_PREFIX + themeNum);
  }

  // Utility: Build/select theme switcher dots
  function renderThemeSwitcher(selectedTheme) {
    const switcher = document.getElementById('theme-switcher');
    if (!switcher) return;

    switcher.innerHTML = ''; // Clear previous
    for (let i = 1; i <= THEME_COUNT; i++) {
      // Each dot is just a button with aria-label for accessibility
      const dot = document.createElement('button');
      dot.className = 'theme-dot' + (i === selectedTheme ? ' selected' : '');
      dot.setAttribute('aria-label', 'Theme ' + i);
      dot.setAttribute('data-theme', i);
      if (i === selectedTheme) dot.setAttribute('tabindex', '0');
      dot.addEventListener('click', function() {
        localStorage.setItem(LS_KEY, String(i));
        applyTheme(i);
        renderThemeSwitcher(i);
      });
      switcher.appendChild(dot);
    }
  }

  // 1. Load user preference or default to dark ("theme-1")
  let selectedTheme = parseInt(localStorage.getItem(LS_KEY), 10);
  if (Number.isNaN(selectedTheme) || selectedTheme < 1 || selectedTheme > THEME_COUNT) {
    selectedTheme = DEFAULT_THEME;
    localStorage.setItem(LS_KEY, String(DEFAULT_THEME));
  }
  applyTheme(selectedTheme);
  renderThemeSwitcher(selectedTheme);
});

/**
 * Other potential scripts for interactive UI components go here.
 * The main functionality now is themes.
 */
