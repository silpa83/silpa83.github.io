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
    const text = "Front-end Developer";
    let index = 0;

    function typeLetterByLetter() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeLetterByLetter, 100); // Adjust typing speed here (100ms)
        } else {
            textElement.classList.add("blinking-cursor");
        }
    }

    textElement.textContent = ""; // Clear initial text
    typeLetterByLetter();
});
