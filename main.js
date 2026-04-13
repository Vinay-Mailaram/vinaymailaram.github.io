// Simple Scroll logic
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Particles init
if (window.tsParticles) {
    tsParticles.load("tsparticles", {
        particles: {
            number: { value: 40 },
            color: { value: "#00FFFF" },
            links: { enable: true, color: "#00FFFF", opacity: 0.1 },
            move: { enable: true, speed: 1 },
            size: { value: 1.5 }
        }
    });
}
