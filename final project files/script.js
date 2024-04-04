

darkModeSwitch.addEventListener('change', () => {
    if (darkModeSwitch.checked) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#333';
    }
});

//this scripts is use for css menu button from here start here

document.getElementById('menu-button').addEventListener('click', function() {
    document.getElementById('menu-list').classList.toggle('active');
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.menu-container')) {
        document.getElementById('menu-list').classList.remove('active');
    }
});

////This code will create a header with a logo, a menu button, and a list of options. The menu button has a switch to toggle dark mode, which will change the colors of the body accordingly. When the user clicks on the menu button, the list will appear from the right side of the screen. If the user clicks outside the list, it will disappear. The menu list has hover effects on the options.
///Note that in the HTML code, I've added a class name to the image for easier CSS targeting. I've also used inline styles to add some basic styles to the header, but you can move those to the external CSS file if you prefer. Additionally, the JavaScript code should be added to an external script file and linked to the HTML page.Let me know if you have any questions or if you'd like me to clarify anything.