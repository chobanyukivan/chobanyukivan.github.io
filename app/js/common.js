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

    // $(".menu-wrapper ul a").mPageScroll2id();
    $("a.scroll_2").click(function() {
        $.scrollTo($(".section_bgc_e7"), 800, {
            offset: 100
        });
    });
    $("a.scroll_2").scrollTo($(".section_bgc_e7"));
// <li class="nav_item"><a href="#pointer1" class="scroll_2" onclick="currentItem(1)">Выбрать пиццу</a></li>
//     <div id="pointer1" class="pointer pointer_1"><i class="fa fa-angle-double-down" aria-hidden="true"></i></div>

});
$(window).load(function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

}); 