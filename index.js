const navToggle = document.querySelector('.nav-hamburger');
const navBody = document.querySelector('.nav-body');
const linksToCloseMenu = document.querySelectorAll('.menu-link, .menu-icons-link');

navToggle.addEventListener('click', () => {
    const isOpen = navBody.classList.toggle('is-open');
    navToggle.classList.toggle('is-active');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navToggle.setAttribute('aria-label', isOpen ? 'Zavřít menu' : 'Otevřít menu');
})

const closeMenu = () => {
    navBody.classList.remove('is-open');
    navToggle.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', false);
    navToggle.setAttribute('aria-label', 'Otevřít menu');
}

linksToCloseMenu.forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (event) => {
    const clickOnMenu = navBody.contains(event.target);
    const clickOnHamburger = navToggle.contains(event.target);

    if (!clickOnMenu && !clickOnHamburger) {
        closeMenu();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const intersectionObserver = new IntersectionObserver ( (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    },
    {threshold: 0.1}
    )
    const banner = document.querySelector('.event-container');
    if (banner) {
        intersectionObserver.observe(banner)
    };
});