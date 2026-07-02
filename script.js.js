// Prosta logika obsługi menu mobilnego oraz efektów przy przewijaniu

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Otwieranie/zamykanie menu na smartfonach
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('is-active');
        
        // Szybki styl dla otwartego menu mobilnego
        if (navLinks.classList.contains('active')) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = '#16161a';
            navLinks.style.padding = '20px';
            navLinks.style.textAlign = 'center';
        } else {
            navLinks.style.display = 'none';
        }
    });

    // Płynne zamykanie menu po kliknięciu w link na mobile
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                navLinks.style.display = 'none';
            }
        });
    });
});