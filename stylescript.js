// Toggle the dropdown menu on and off
document.getElementById('menu-icon').addEventListener('click', function() {
    console.log("Menu icon clicked"); // This should print to the console when you click the icon
    const dropdownMenu = document.getElementById('dropdown-menu');
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

// Typing effect for "Front-end Developer" text
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typing-text");
    const titles = ["Front-end Developer", "Full-Stack Developer", "DevOps Architect"];
    let titleIndex = 0;
    let charIndex = 0;

    function typeTitle() {
        if (charIndex < titles[titleIndex].length) {
            textElement.textContent += titles[titleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeTitle, 100); // Adjust typing speed here
        } else {
            setTimeout(deleteTitle, 2000); // Wait before deleting (2 seconds here)
        }
    }

    function deleteTitle() {
        if (charIndex > 0) {
            textElement.textContent = titles[titleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteTitle, 50); // Adjust delete speed here
        } else {
            titleIndex = (titleIndex + 1) % titles.length; // Move to the next title
            setTimeout(typeTitle, 500); // Start typing the next title after a brief pause
        }
    }

    // Start the typing effect
    typeTitle();
});


