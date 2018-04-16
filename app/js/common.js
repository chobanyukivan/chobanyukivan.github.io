$(document).ready(function () {


    $(".button-toggle, .menu-item").click(function () {
        $(".button-toggle-sandwich").toggleClass("button-toggle-sandwich_active");
        $(".menu").slideToggle();
    });

    $(".section_animation-1").animated("fadeInLeft", "fadeOutLeft");
    $(".section_animation-2").animated("fadeInDown", "fadeOutUp");
    $(".section_animation-3").animated("fadeInRight", "fadeOutRight");
    $(".section_animation-4").animated("fadeInUp", "fadeOutDown");

    $(".section-portfolio-item").each(function(i) {
        $(this).find("a").attr("href", "#work" + i);
        $(this).find(".section-portfolio-item-decr").attr("id", "work" + i);
    });

    $(".scroll_1").click(function() {
        $.scrollTo($("#about"), 600, {
            offset: 0
        });
    });
    $(".scroll_2").click(function() {
        $.scrollTo($("#resum"), 600, {
            offset: 0
        });
    });


});
$(window).load(function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

}); 