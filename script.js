// script.js

// Typing effect animation
const phrases = ["Welcome to my website!", "Enjoy your stay!", "Explore my projects!"];  
let phraseIndex = 0;  
let charIndex = 0;  
const typingElement = document.getElementById('typing-effect');  

function typePhrase() {  
    if (charIndex < phrases[phraseIndex].length) {  
        typingElement.innerHTML += phrases[phraseIndex].charAt(charIndex);  
        charIndex++;  
        setTimeout(typePhrase, 100);  
    } else {  
        setTimeout(deletePhrase, 2000);  
    }  
}

function deletePhrase() {  
    if (charIndex > 0) {  
        typingElement.innerHTML = phrases[phraseIndex].substring(0, charIndex - 1);  
        charIndex--;  
        setTimeout(deletePhrase, 50);  
    } else {  
        phraseIndex = (phraseIndex + 1) % phrases.length;  
        setTimeout(typePhrase, 1000);  
    }  
}

typePhrase();  

// Intersection Observer for smooth scroll animations
const observer = new IntersectionObserver((entries) => {  
    entries.forEach(entry => {  
        if (entry.isIntersecting) {  
            entry.target.classList.add('fade-in');  
        }  
    });  
});  

const elements = document.querySelectorAll('.fade-in-section');  
elements.forEach(el => observer.observe(el));  

// Navbar scroll effects
const navbar = document.getElementById('navbar');  
window.addEventListener('scroll', () => {  
    if (window.scrollY > 100) {  
        navbar.classList.add('scrolled');  
    } else {  
        navbar.classList.remove('scrolled');  
    }  
});  

// Smooth link scrolling
const links = document.querySelectorAll('a[href^="#"]');  
links.forEach(link => {  
    link.addEventListener('click', function(e) {  
        e.preventDefault();  
        const target = document.querySelector(this.getAttribute('href'));  
        target.scrollIntoView({  
            behavior: 'smooth',  
            block: 'start'  
        });  
    });  
});  

// Parallax effect on mouse move
document.addEventListener('mousemove', (e) => {  
    const layers = document.querySelectorAll('.parallax');  
    layers.forEach(layer => {  
        const speed = layer.getAttribute('data-speed');  
        const x = (window.innerWidth - e.pageX * speed) / 100;  
        const y = (window.innerHeight - e.pageY * speed) / 100;  
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;  
    });  
});  

// Button ripple effect
const buttons = document.querySelectorAll('button');  
buttons.forEach(button => {  
    button.addEventListener('click', function(e) {  
        const ripple = document.createElement('span');  
        ripple.classList.add('ripple');  
        this.appendChild(ripple);  
        const posX = e.clientX - this.offsetLeft;  
        const posY = e.clientY - this.offsetTop;  
        ripple.style.left = `${posX}px`;  
        ripple.style.top = `${posY}px`;  
        setTimeout(() => {  
            ripple.remove();  
        }, 1000);  
    });  
});  

// Form validation
const forms = document.querySelectorAll('form');  
forms.forEach(form => {  
    form.addEventListener('submit', function(e) {  
        const inputs = form.querySelectorAll('input[required]');  
        let valid = true;  
        inputs.forEach(input => {  
            if (!input.value) {  
                valid = false;  
                input.classList.add('invalid');  
            } else {  
                input.classList.remove('invalid');  
            }  
        });  
        if (!valid) {  
            e.preventDefault();  
        }  
    });  
});  

// Dark mode toggle with localStorage
const darkModeToggle = document.getElementById('dark-mode-toggle');  
darkModeToggle.addEventListener('click', () => {  
    document.body.classList.toggle('dark-mode');  
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));  
});  

const darkModeSetting = localStorage.getItem('dark-mode');  
if (darkModeSetting === 'true') {  
    document.body.classList.add('dark-mode');  
}

// Lazy loading for images
const lazyImages = document.querySelectorAll('img[data-src]');  
const imgObserver = new IntersectionObserver((entries) => {  
    entries.forEach(entry => {  
        if (entry.isIntersecting) {  
            const img = entry.target;  
            img.src = img.dataset.src;  
            imgObserver.unobserve(img);  
        }  
    });  
});  

lazyImages.forEach(img => imgObserver.observe(img));  
