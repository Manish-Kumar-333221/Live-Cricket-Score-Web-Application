//this code is use for menu button slide movement in frontend

function toggleMenu() {
    var menu = document.querySelector('.sliding-menu');
    if (menu.style.right === '-250px') {
        menu.style.right = '0';
    } else {
        menu.style.right = '-250px';
    }
}