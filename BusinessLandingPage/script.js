

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});


const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const topOffset = targetElement.offsetTop - 60; // Account for fixed navbar
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        }
    });
});


const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonialCards.length;

function showTestimonial(index) {
    testimonialCards.forEach(card => {
        card.classList.remove('active');
    });
    
    testimonialCards[index].classList.add('active');
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentTestimonial);
});

setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
}, 5000);


const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
const newsletterMessage = document.getElementById('newsletterMessage');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = newsletterEmail.value.trim();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    newsletterMessage.textContent = '';
    newsletterMessage.style.color = '';
    
    if (!email) {
        newsletterMessage.textContent = 'Please enter an email address.';
        newsletterMessage.style.color = '#e74c3c';
        return;
    }
    
    if (!emailRegex.test(email)) {
        newsletterMessage.textContent = 'Please enter a valid email address.';
        newsletterMessage.style.color = '#e74c3c';
        return;
    }
    
    // Success message
    newsletterMessage.textContent = '✓ Thank you for subscribing!';
    newsletterMessage.style.color = '#27ae60';
    
    // Reset form
    newsletterForm.reset();
    
    // Clear message after 3 seconds
    setTimeout(() => {
        newsletterMessage.textContent = '';
    }, 3000);
});


const contactForm = document.getElementById('contactForm');
const contactName = document.getElementById('contactName');
const contactEmail = document.getElementById('contactEmail');
const contactMessageInput = document.getElementById('contactMessage');
const contactFormMessage = document.querySelector('.contact .form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = contactName.value.trim();
    const email = contactEmail.value.trim();
    const message = contactMessageInput.value.trim();
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Clear previous message
    contactFormMessage.textContent = '';
    contactFormMessage.style.color = '';
    
    // Validate name
    if (!name) {
        contactFormMessage.textContent = 'Please enter your name.';
        contactFormMessage.style.color = '#e74c3c';
        return;
    }
    
    if (name.length < 2) {
        contactFormMessage.textContent = 'Name must be at least 2 characters long.';
        contactFormMessage.style.color = '#e74c3c';
        return;
    }
    
    // Validate email
    if (!email) {
        contactFormMessage.textContent = 'Please enter your email address.';
        contactFormMessage.style.color = '#e74c3c';
        return;
    }
    
    if (!emailRegex.test(email)) {
        contactFormMessage.textContent = 'Please enter a valid email address.';
        contactFormMessage.style.color = '#e74c3c';
        return;
    }
    
    if (!message) {
        contactFormMessage.textContent = 'Please enter a message.';
        contactFormMessage.style.color = '#e74c3c';
        return;
    }
    
    if (message.length < 10) {
        contactFormMessage.textContent = 'Message must be at least 10 characters long.';
        contactFormMessage.style.color = '#e74c3c';
        return;
    }
    
    contactFormMessage.textContent = '✓ Message sent successfully! We will get back to you soon.';
    contactFormMessage.style.color = '#27ae60';
    
    contactForm.reset();
    
    setTimeout(() => {
        contactFormMessage.textContent = '';
    }, 4000);
});

const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        const originalText = this.textContent;
        this.textContent = 'Added to Cart';
        this.style.backgroundColor = '#27ae60';

        setTimeout(() => {
            this.textContent = originalText;
            this.style.backgroundColor = '';
        }, 2000);
    });
});


const shopBtn = document.querySelector('.shop-btn');
shopBtn.addEventListener('click', () => {
    const productsSection = document.getElementById('products');
    const topOffset = productsSection.offsetTop - 60;
    window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
    });
});


const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(card => {
    card.addEventListener('click', function() {
        const categoryName = this.querySelector('h3').textContent;
        console.log('Clicked category: ' + categoryName);
        
        // You can add functionality here to filter products by category
        const productsSection = document.getElementById('products');
        const topOffset = productsSection.offsetTop - 60;
        window.scrollTo({
            top: topOffset,
            behavior: 'smooth'
        });
    });
});

