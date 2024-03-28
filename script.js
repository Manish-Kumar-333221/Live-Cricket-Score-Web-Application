//this code is use for menu button slide movement in frontend

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menu-toggle');
    const slidingMenu = document.getElementById('sliding-menu');

    menuToggle.addEventListener('click', function () {
            console.log("Runnig 2")
        slidingMenu.classList.toggle('show-menu');
    });

    document.addEventListener('click', function (event) {
        const isClickInsideMenu = slidingMenu.contains(event.target);
        const isClickInsideToggle = menuToggle.contains(event.target);
        if (!isClickInsideMenu && !isClickInsideToggle) {
            slidingMenu.classList.remove('show-menu');
        }
    });
});