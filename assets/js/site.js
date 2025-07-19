/**
 * assets/js/site.js
 * Main JavaScript file for the portfolio website.
 * - Controls responsive navigation toggling and future interactive elements.
 * - Code is unobtrusive and can be expanded for additional dynamic behaviors.
 */

/**
 * Toggles navigation menu visibility on small screens when the toggle is clicked.
 */
document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.querySelector('.navbar-toggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('open');
      const expanded = navMenu.classList.contains('open');
      navToggle.setAttribute('aria-expanded', expanded ? "true" : "false");
    });
  }
});

/**
 * Placeholder for future interactive site features.
 * Add more JavaScript as needed for project carousels, modals, filtering, etc.
 */
