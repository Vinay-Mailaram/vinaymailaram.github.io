/**
 * tsParticles Initialization
 * Creates the interactive 3D background node effect
 */
if (typeof tsParticles !== 'undefined') {
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab" // Lines follow your mouse
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.6,
            color: "#00f0ff"
          }
        }
      }
    },
    particles: {
      color: {
        value: "#00f0ff"
      },
      links: {
        color: "#00f0ff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        outModes: { default: "bounce" }
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 70
      },
      opacity: {
        value: 0.4
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 3 }
      }
    },
    detectRetina: true
  });
}

/**
 * Mobile Menu Logic
 */
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

/**
 * Smooth Scrolling
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
