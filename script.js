const body = document.body;
const toggleButton = document.getElementById('toggle-theme');

function switchTheme() {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
}

toggleButton.addEventListener('click', switchTheme);

const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
    body.classList.add('dark-mode');
}


document.addEventListener('DOMContentLoaded', function () {
    const textElements = document.querySelectorAll('.hidden-text');

    function revealTextElements() {
        textElements.forEach((textElement, index) => {
            const textTop = textElement.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (textTop < windowHeight) {
                const opacity = 1 - (textTop / windowHeight);
                textElement.style.opacity = opacity;

                setTimeout(() => {
                    textElement.classList.add('text-visible');
                }, index * 150); 
            }
        });
    }

    function hideTextElements() {
        textElements.forEach(textElement => {
            textElement.classList.remove('text-visible');
            textElement.style.opacity = 0;
        });
    }

    // Initial hide all text elements
    hideTextElements();

    window.addEventListener('scroll', revealTextElements);
    window.addEventListener('resize', revealTextElements); 
    revealTextElements(); 
});

