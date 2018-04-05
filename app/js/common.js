$(document).ready(function () {
    $(".button-toggle, .menu-item").click(function () {
        $(".button-toggle-sandwich").toggleClass("button-toggle-sandwich__active");
        $(".menu").slideToggle();
    });

    $(".content-wrapper__name, .content-wrapper__dscr").animated("fadeInDown", "fadeOutUp");

    $(".popup").magnificPopup({type : "image"});
    $(".popup_content").magnificPopup({type:'inline',
        midClick: true});

    $(".section_animation-1").animated("fadeInLeft", "fadeOutLeft");
    $(".section_animation-2").animated("fadeInDown", "fadeOutUp");
    $(".section_animation-3").animated("fadeInRight", "fadeOutRight");
    $(".section_animation-4").animated("fadeInUp", "fadeOutDown");

    $(".section-portfolio-item").each(function(i) {
        $(this).find("a").attr("href", "#work" + i);
        $(this).find(".section-portfolio-item-decr").attr("id", "work" + i);
    });



});
$(window).load(function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

}); 