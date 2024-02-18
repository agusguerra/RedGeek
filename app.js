$(".menu-icon").click(function () {
    $(this).toggleClass("active");
    $(".navigation-menu").toggleClass("active");
    $(".menu-icon i").toggleClass("fa-times");
});


/* navbar */
$(document).ready(function(){
    $(window).bind('scroll', function(){
        var gap=50;
        if($(window).scrollTop() > gap){
            $('.inner-width').addClass('active-nav');
        } else{
            $('.inner-width').removeClass('active-nav');
        }
    });
});

/* Efecto background */
let fondo = document.getElementById('fondo');
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    fondo.style.top = value * 0.5 + 'px';
});