$(document).ready(function() {
    // Verificar posición de desplazamiento al cargar la página
    var gap = 50;
    if ($(window).scrollTop() > gap) {
        $('.inner-width').addClass('active-nav');
    } else {
        $('.inner-width').removeClass('active-nav');
    }

    // Agregar evento de desplazamiento para cambiar el fondo del navbar
    $(window).scroll(function() {
        var gap = 50;
        if ($(window).scrollTop() > gap) {
            $('.inner-width').addClass('active-nav');
        } else {
            $('.inner-width').removeClass('active-nav');
        }
    });
});


var lastScrollTop = 0;

$(window).scroll(function(){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        // Scrolling down
        $('.navbar').addClass('hidden');
    } else {
        // Scrolling up
        $('.navbar').removeClass('hidden');
    }
    lastScrollTop = st;
});

