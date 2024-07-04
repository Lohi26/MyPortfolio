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
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.display-left').forEach(function(element) {
        const projectCard = element.closest('.project-card');
        const lsElement = projectCard.querySelector('.ls');
        const image=projectCard.querySelector('.project-img');
        let check=projectCard.classList.contains('left-side');
        element.addEventListener('click', function() {
            console.log(check);
            if (check) 
            {
                lsElement.classList.remove('left-side');
                lsElement.classList.add('ls');
                image.classList.remove('guess-img');
            } 
            else 
            {
                lsElement.classList.add('left-side');
                lsElement.classList.remove('ls');
                image.classList.add('guess-img');
            }
            check=check?false:true;
            console.log("Hello");
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.display-right').forEach(function(element) {
        const projectCard = element.closest('.project-card');
        const lsElement = projectCard.querySelector('.rs');
        let check=projectCard.classList.contains('right-side');
        element.addEventListener('click', function() {
            if (check) 
            {
                lsElement.classList.remove('right-side');
                lsElement.classList.add('rs');
            } 
            else 
            {
                lsElement.classList.add('right-side');
                lsElement.classList.remove('rs');
            }
            check=check?false:true;
        });
    });
});