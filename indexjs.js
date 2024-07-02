document.addEventListener('DOMContentLoaded', function() {
    const contents = document.querySelectorAll('.about-me');

    contents.forEach(content => {
        const text = content.innerHTML.trim();
        content.innerHTML = '';
        let index = 0;
        const typingSpeed = 40;

        function type() {
            if (index < text.length) {
                content.insertAdjacentHTML('beforeend', text.charAt(index));
                index++;
                setTimeout(type, typingSpeed);
            }
        }

        type();
    });
});
document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler.getAttribute('aria-expanded') === 'true') {
            navbarToggler.click();
        }
    });
});
// Add event listener to each timeline item for click or hover effects
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', function() {
        // Toggle active class for expanded view or use CSS transitions
        this.classList.toggle('active');
    });
});
