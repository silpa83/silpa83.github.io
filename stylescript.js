// Mobile Menu Toggle
document.getElementById('menu-icon').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Auto-close Mobile Menu on Link Click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        navLinks.style.display = 'none';
    });
});

// Typing Effect for Titles
document.addEventListener("DOMContentLoaded", function () {
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

// Light/Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '🌞';
});

// Section Display and Smooth Scrolling
function navigateToSection(sectionId) {
    showSection(sectionId);
    scrollToSection(sectionId);
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.toggle('active', section.id === sectionId);
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Set Initial Section on Page Load
window.onload = () => {
    showSection('home');
};
