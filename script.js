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
    
    // Button functionality for home page
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
    
    // Contact form functionality
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && subject && message) {
                // Show success message
                alert('Thank you for your message, ' + name + '! We will get back to you within 24 hours at ' + email + '.');
                
                // Reset form
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Add smooth scrolling for better user experience
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Services page functionality
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Services page button functionality
    const serviceButtons = document.querySelectorAll('.btn-service');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceName = this.closest('.service-card').querySelector('h3').textContent;
            alert('You clicked on ' + serviceName + '. This would typically show more details about this service.');
        });
    });
    
    // ... rest of existing code ...
});
