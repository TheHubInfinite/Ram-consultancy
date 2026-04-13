// 1. Initialize Animations
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 150
    });

    // 2. Numbers Counter Logic
    const counters = document.querySelectorAll('.count');
    const speed = 200;

    const runCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target + "+";
                }
            };
            updateCount();
        });
    };

    // Trigger counters when the section is visible
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            runCounters();
        }
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-mini');
    if(statsSection) observer.observe(statsSection);
});

// 3. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('#navbar');
    if (window.scrollY > 50) {
        nav.style.background = "rgba(7, 9, 13, 1)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
    } else {
        nav.style.background = "rgba(7, 9, 13, 0.98)";
        nav.style.boxShadow = "none";
    }
});