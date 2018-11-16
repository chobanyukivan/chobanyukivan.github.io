var isLoad = $(window).load(function(event) {
    showSite();
    return event;
});

function showSite() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
}

setTimeout(function () {
    if (!isLoad) {
        showSite();
    }
},3000);


$(document).ready(function () {


    $(".button-toggle, .menu-item").click(function () {
        $(".button-toggle-sandwich").toggleClass("button-toggle-sandwich_active");
        $(".menu").slideToggle();
    });


    $(".section_animation-1").animated("fadeInLeft", "fadeOutLeft");
    $(".section_animation-2").animated("fadeInDown", "fadeOutUp");
    $(".section_animation-3").animated("fadeInRight", "fadeOutRight");
    $(".section_animation-4").animated("fadeInUp", "fadeOutDown");
    $(".section_animation-5").animated("fadeIn", "fadeOut");

    $(".content-wrapper__name, .scroll_1").click(function() {
        $.scrollTo($("#about"), 600, {
            offset: 0
        });
    });
    $(".scroll_2").click(function() {
        $.scrollTo($("#resum"), 600, {
            offset: 0
        });
    });
    $(".scroll_3").click(function() {
        $.scrollTo($("#portf"), 600, {
            offset: 0
        });
    });


});
