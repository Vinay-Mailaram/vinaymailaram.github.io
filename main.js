// Mobile Menu
const mobileBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav-links');

mobileBtn?.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Smooth Scroll for Nav Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            nav.classList.remove('active');
        }
    });
});

// tsParticles AI Background Initialization
if (window.tsParticles) {
    tsParticles.load("tsparticles", {
        particles: {
            number: { value: 50 },
            color: { value: "#00FFFF" },
            links: { enable: true, color: "#00FFFF", opacity: 0.2 },
            move: { enable: true, speed: 1 },
            size: { value: 2 }
        }
    });
}
