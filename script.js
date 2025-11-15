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

// Real Crypto Price API
async function fetchCryptoPrices() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano,solana,binancecoin&vs_currencies=usd&include_24hr_change=true');
        const data = await response.json();
        
        updatePriceDisplay(data);
    } catch (error) {
        console.error('Error fetching crypto prices:', error);
        // Fallback to static prices
        updatePriceDisplayWithFallback();
    }
}

function updatePriceDisplay(data) {
    const cryptos = [
        { id: 'bitcoin', symbol: 'BTC', element: document.querySelector('[data-crypto="bitcoin"]') },
        { id: 'ethereum', symbol: 'ETH', element: document.querySelector('[data-crypto="ethereum"]') },
        { id: 'cardano', symbol: 'ADA', element: document.querySelector('[data-crypto="cardano"]') },
        { id: 'solana', symbol: 'SOL', element: document.querySelector('[data-crypto="solana"]') },
        { id: 'binancecoin', symbol: 'BNB', element: document.querySelector('[data-crypto="binancecoin"]') }
    ];

    cryptos.forEach(crypto => {
        if (crypto.element && data[crypto.id]) {
            const price = data[crypto.id].usd;
            const change = data[crypto.id].usd_24h_change;
            
            crypto.element.innerHTML = `
                <div class="price">$${price.toLocaleString()}</div>
                <div class="change ${change >= 0 ? 'positive' : 'negative'}">
                    ${change ? change.toFixed(2) + '%' : '--%'}
                </div>
            `;
        }
    });
}

function updatePriceDisplayWithFallback() {
    // Fallback prices if API fails
    const fallbackPrices = {
        bitcoin: { price: 45231.89, change: 2.34 },
        ethereum: { price: 3412.56, change: 1.78 },
        cardano: { price: 1.23, change: -0.45 },
        solana: { price: 98.76, change: 3.21 },
        binancecoin: { price: 567.89, change: 0.89 }
    };

    Object.keys(fallbackPrices).forEach(crypto => {
        const element = document.querySelector(`[data-crypto="${crypto}"]`);
        if (element) {
            const data = fallbackPrices[crypto];
            element.innerHTML = `
                <div class="price">$${data.price.toLocaleString()}</div>
                <div class="change ${data.change >= 0 ? 'positive' : 'negative'}">
                    ${data.change}%
                </div>
            `;
        }
    });
}

// Update DOMContentLoaded to include price fetching
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Fetch crypto prices
    if (document.querySelector('.crypto-prices')) {
        fetchCryptoPrices();
        // Update prices every 30 seconds
        setInterval(fetchCryptoPrices, 30000);
    }
});
