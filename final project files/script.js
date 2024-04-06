document.getElementById('menu-button').addEventListener('click', function() {
document.getElementById('menu-list').classList.toggle('active');
});

document.addEventListener('click', function(event) {
if (!event.target.closest('.menu-container')) {
    document.getElementById('menu-list').classList.remove('active');
}
});


darkModeSwitch.addEventListener('change', () => {
if (darkModeSwitch.checked) {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#fff';
} else {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#333';
}
});


//This Line Of code are used for the bottom side nav bars

document.getElementById("home-id").addEventListener("click", function() {
        window.location.href = "http://127.0.0.1:3000/final project files/index.html";
    });

    document.getElementById("stats-id").addEventListener("click", function() {
        window.location.href = "http://127.0.0.1:3000/final project files/stats.html";
    });

    document.getElementById("search-id").addEventListener("click", function() {
        window.location.href = "http://127.0.0.1:3000/final project files/search.html";
    });
    
    document.getElementById("news-id").addEventListener("click", function() {
        window.location.href = "http://127.0.0.1:3000/final project files/news.html";
    });

    document.getElementById("account-id").addEventListener("click", function() {
        window.location.href = "http://127.0.0.1:3000/final project files/login.html";
    });