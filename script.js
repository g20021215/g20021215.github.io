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
