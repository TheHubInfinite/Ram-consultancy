document.addEventListener('DOMContentLoaded', () => {
    // Initialize Animations
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Header Scroll Effect
    const nav = document.querySelector('#navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = "rgba(7, 9, 13, 1)";
            nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
        } else {
            nav.style.background = "rgba(7, 9, 13, 0.98)";
            nav.style.boxShadow = "none";
        }
    });
});