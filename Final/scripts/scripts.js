function myFunction() {
    var x = document.getElementById("menu-bar");
    if (x.className === "menu-bar") {
        x.className += "responsive";
    } else {
        x.className = "menu-bar";
    }
}

// Event listener for window resize to handle responsive behavior
window.onresize = function() {
    var x = document.getElementById("menu-bar");
    if (window.innerWidth > 768) {
        x.className = "menu-bar";
    }
};