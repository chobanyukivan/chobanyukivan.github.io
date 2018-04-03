$(document).ready(function () {
    $(".button-toggle, .menu-item").click(function () {
        $(".button-toggle-sandwich").toggleClass("button-toggle-sandwich__active");
        $(".menu").slideToggle();
    });

    $(".content-wrapper__name, .content-wrapper__dscr").animated("fadeInDown", "fadeOutUp");

    $(".section__wrapper").animated("fadeInDown", "fadeOutUp");

    $(".popup").magnificPopup({type : "image"});

    $(".section_animation-1").animated("fadeInLeft", "fadeOutLeft");
    $(".section_animation-2").animated("fadeInDown", "fadeOutUp");
    $(".section_animation-3").animated("fadeInRight", "fadeOutRight");



});
$(window).load(function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

}); 