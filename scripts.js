document.addEventListener("DOMContentLoaded", function() {
    // Load home content by default
    loadContent("home");

    // Event listeners for navigation
    document.getElementById("home").addEventListener("click", function() {
        loadContent("home");
    });

    document.getElementById("games").addEventListener("click", function() {
        loadContent("games");
    });

    document.getElementById("about").addEventListener("click", function() {
        loadContent("about");
    });

    document.getElementById("sorcerer").addEventListener("click", function() {
        loadContent("sorcerer");
    });
});

function loadContent(page) {
    const contentSection = document.getElementById("content");
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            contentSection.innerHTML = this.responseText;
        }
    };

    xhttp.open("GET", page + ".html", true);
    xhttp.send();
}
