// script.js

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Форма placeholder
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Rezervimi u dërgua! Do t\'ju kontaktojmë së shpejti.');
});