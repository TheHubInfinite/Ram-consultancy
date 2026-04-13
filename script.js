// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Form Submission Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple UI feedback
        const btn = document.querySelector('.btn-submit');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = "Sending...";
        btn.style.opacity = "0.7";
        
        setTimeout(() => {
            alert('Thank you! Ram Consultancy has received your inquiry.');
            btn.innerHTML = originalText;
            btn.style.opacity = "1";
            contactForm.reset();
        }, 1500);
    });
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});