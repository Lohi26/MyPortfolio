document.addEventListener('DOMContentLoaded', function() {
    const contents = document.querySelectorAll('.about-me');

    contents.forEach(content => {
        const text = content.innerHTML.trim();
        content.innerHTML = '';
        let index = 0;
        const typingSpeed = 40; // Adjust typing speed here (lower number = faster typing)

        function type() {
            if (index < text.length) {
                content.insertAdjacentHTML('beforeend', text.charAt(index)); // Append each character
                index++;
                setTimeout(type, typingSpeed);
            }
        }

        type();
    });
});
