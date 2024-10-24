// Selecting elements
const openMenuButton = document.getElementById('open-menu');
const closeMenuButton = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const menuOptions = document.querySelectorAll('.mobile-menu-options li');

// Open mobile menu on click
openMenuButton.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
});

// Close mobile menu on click of close button
closeMenuButton.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});

// Close mobile menu 
menuOptions.forEach(option => {
    option.addEventListener('click', () => {
        const targetSection = document.getElementById(option.getAttribute('data-target'));
        mobileMenu.style.display = 'none';
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
