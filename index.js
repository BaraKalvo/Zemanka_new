const navToggle = document.querySelector('.nav-hamburger');
const navBody = document.querySelector('.nav-body');
const linksToCloseMenu = document.querySelectorAll('.menu-link, .menu-icons-link');

navToggle.addEventListener('click', () => {
    const isOpen = navBody.classList.toggle('is-open');
    navToggle.classList.toggle('is-active');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navToggle.setAttribute('aria-label', isOpen ? 'Zavřít menu' : 'Otevřít menu');
})

linksToCloseMenu.forEach(link => {
    link.addEventListener('click', () => {
        navBody.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', false);
        navToggle.setAttribute('aria-label', 'Otevřít menu');
    });
});
