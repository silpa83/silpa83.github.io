// Toggle the dropdown menu on and off
document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Typing effect for job titles
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typing-text");
    const titles = ["Front-end Developer", "Full-Stack Developer", "DevOps Architect"];
    let titleIndex = 0;
    let charIndex = 0;

    function typeTitle() {
        if (charIndex < titles[titleIndex].length) {
            textElement.textContent += titles[titleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeTitle, 100);
        } else {
            setTimeout(deleteTitle, 2000);
        }
    }

    function deleteTitle() {
        if (charIndex > 0) {
            textElement.textContent = titles[titleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteTitle, 50);
        } else {
            titleIndex = (titleIndex + 1) % titles.length;
            setTimeout(typeTitle, 500);
        }
    }

    typeTitle();
});

// Toggle light/dark mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    console.log("Sun/Moon icon clicked"); // Debug log to confirm click event
    document.body.classList.toggle('dark-mode');

    // Toggle icon between sun and moon
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '🌙'; // Moon icon for dark mode
    } else {
        themeToggle.textContent = '🌞'; // Sun icon for light mode
    }
});
