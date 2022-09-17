
var typed = new Typed(".type", {
    strings: ["UI/UX Developer","Front-End Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    });

$(document).ready(function(){
        $(".menu-toggle-btn, .navigation-menu a").click(function(){
        $(".menu-toggle-btn").toggleClass("fa-times");
        $(".navigation-menu").toggleClass("active");
    });
});


document.querySelector('#copyright-year').innerText = new Date().getFullYear();
