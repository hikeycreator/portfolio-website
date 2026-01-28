// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Simple scroll reveal animation
const revealElements = document.querySelectorAll('.section, .card');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


// Dynamic year in footer
const footer = document.querySelector('.footer');
const year = new Date().getFullYear();

const yearSpan = document.createElement('p');
yearSpan.style.marginTop = '10px';
yearSpan.style.fontSize = '14px';
yearSpan.style.color = '#9ca3af';
yearSpan.innerText = `© ${year} Jai Ragul D. All rights reserved.`;

footer.appendChild(yearSpan);


// Button hover feedback (micro-interaction)
document.querySelectorAll('.btn, .btn-outline').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});
