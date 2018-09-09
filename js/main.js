/***************************
    Global Variables
***************************/
var navbar;
var navbarOffset;

window.onload = function(){
    navbar = document.getElementById("nav_bar");
}

/***************************
    Sticky Nav Bar
***************************/
window.onscroll = function(){
    keepNavBarAtTop()
};

function keepNavBarAtTop() {
    navbar.classList.add("sticky")
}
