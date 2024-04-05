//this scripts is use for css menu button from here start here
function toggleMenu() {
    var menu = document.getElementById('main-menu');
    menu.classList.toggle('open');
}

// Close menu when clicking outside
window.addEventListener('click', function(e) {
    var menu = document.getElementById('main-menu');
    var menuBtn = document.querySelector('.menu-btn');
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.classList.remove('open');
    }
});


//nav2 horizontal 
document.getElementById('showIPL').addEventListener('click', function() {
    document.getElementById('ipl2024').classList.toggle('open');
    document.getElementById('ipl2024').classList.toggle('slide-up');
});

window.addEventListener('click', function(event) {
    if (!document.getElementById('ipl2024').contains(event.target) && event.target != document.getElementById('showIPL')) {
        document.getElementById('ipl2024').classList.remove('open');
        document.getElementById('ipl2024').classList.add('slide-up');
    }
});


//to css script end here!!