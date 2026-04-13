// Mobile menu toggle logic
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Particles background
if (window.tsParticles) {
    tsParticles.load("tsparticles", {
        particles: {
            number: { value: 50 },
            color: { value: "#00FFFF" },
            links: { enable: true, color: "#00FFFF", opacity: 0.1 },
            move: { enable: true, speed: 1 },
            size: { value: 1 }
        }
    });
}
