// Menu functionality
const menuButton = document.getElementById('menu-button');
const closeMenuButton = document.getElementById('close-menu');
const menuOverlay = document.getElementById('menu-overlay');

// Open menu
menuButton.addEventListener('click', () => {
  menuOverlay.classList.remove('hidden');
});

// Close menu
closeMenuButton.addEventListener('click', () => {
  menuOverlay.classList.add('hidden');
});

// Scroll-to-Top button functionality
const scrollTopButton = document.getElementById('scroll-top');

// Show or hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});

// Scroll to the top of the page when the button is clicked
scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
