// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log("CryptoHub website loaded successfully!");
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Button functionality
    const getStartedBtn = document.getElementById('getStartedBtn');
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            window.location.href = 'services.html';
        });
    }
    
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            window.location.href = 'about.html';
        });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing! We will send crypto updates to: ' + email);
                this.reset();
            }
        });
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});
