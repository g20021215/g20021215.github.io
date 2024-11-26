// Select menu button and overlay
const menuButton = document.getElementById('menu-button');
const menuOverlay = document.getElementById('menu-overlay');
const closeMenuButton = document.getElementById('close-menu');

// Open menu overlay
menuButton.addEventListener('click', () => {
  menuOverlay.classList.remove('hidden');
});

// Close menu overlay
closeMenuButton.addEventListener('click', () => {
  menuOverlay.classList.add('hidden');
});
