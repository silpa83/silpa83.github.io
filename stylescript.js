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
