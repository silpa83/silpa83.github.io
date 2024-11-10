// Toggle the dropdown menu on and off
document.getElementById('menu-icon').addEventListener('click', function() {
    console.log("Menu icon clicked"); // This should print to the console when you click the icon
    const navLinks = document.getElementById('nav-links');
    
    // Toggle between showing and hiding the nav links
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});


// Typing effect for the "Front-end Developer" text that cycles through multiple titles
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typing-text");
    const titles = ["Front-end Developer", "Full-Stack Developer", "DevOps Architect"]; // Titles to cycle through
    let titleIndex = 0; // Current title index
    let charIndex = 0; // Current character index in the title

    // Function to type each title letter by letter
    function typeTitle() {
        if (charIndex < titles[titleIndex].length) {
            textElement.textContent += titles[titleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeTitle, 100); // Typing speed
        } else {
            setTimeout(deleteTitle, 2000); // Pause before deleting
        }
    }

    // Function to delete each title letter by letter
    function deleteTitle() {
        if (charIndex > 0) {
            textElement.textContent = titles[titleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteTitle, 50); // Delete speed
        } else {
            // Move to the next title in the array and reset the typing effect
            titleIndex = (titleIndex + 1) % titles.length;
            setTimeout(typeTitle, 500); // Pause before typing the next title
        }
    }

    // Start the typing effect
    typeTitle();
});


// Toggle light/dark mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class on body
    
    // Toggle icon between sun and moon based on the theme
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '🌙'; // Show moon icon for dark mode
    } else {
        themeToggle.textContent = '🌞'; // Show sun icon for light mode
    }
});
