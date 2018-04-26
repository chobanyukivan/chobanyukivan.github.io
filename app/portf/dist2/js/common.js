$(document).ready(function() {
    // Nav button Toggle menu
	$(".navigation-mnu__button, .navigation-mnu__header_sm li").click(function(){
		$(".navigation-mnu__header_sm").slideToggle();
	});
    // Nav phone Toggle display phone
	$(".phone-icon-wrap").click(function(){
		$(this).parent().children(".header-phone-wrap_sm").slideToggle();
	});

	// Nav Toggle Class Active
    $(".nav_item_first").click(function () {
        $(".navigation-mnu-ul__nav-item").removeClass("active_nav");
        $(".nav_item_first").addClass("active_nav");
    });
    $(".nav_item_second").click(function () {
        $(".navigation-mnu-ul__nav-item").removeClass("active_nav");
        $(".nav_item_second").addClass("active_nav");
    });
    $(".nav_item_third").click(function () {
        $(".navigation-mnu-ul__nav-item").removeClass("active_nav");
        $(".nav_item_third").addClass("active_nav");
    });
    $(".nav_item_fourth").click(function () {
        $(".navigation-mnu-ul__nav-item").removeClass("active_nav");
        $(".nav_item_fourth").addClass("active_nav");
    });

	//Плавный скролл до блока .div по клику на .scroll
	$("a.scrollTo_s0").click(function() {
		$.scrollTo($(".section-header"), 600, {
			offset: 0
		});
	});

	$("a.scrollTo_s1, .pointer_1").click(function() {
		$.scrollTo($(".section-second"), 600, {
			offset: -50
		});
	});

	$("a.scrollTo_s2, .pointer_2").click(function() {
		$.scrollTo($(".section-third"), 600, {
			offset: 45
		});
	});

	$("a.scrollTo_s3, .pointer_3").click(function() {
        $.scrollTo($(".section-fourth"), 600, {
            offset: 45
        });
    });

    $(".pointer_4").click(function() {
        $.scrollTo($(".section-fifth"), 600);
    });

    function carousel_1() {
    	var owl = $(".section-header-carousel");
    	owl.owlCarousel({
    		items : 1,
    		loop : true,
    		autoHeight : true,
    		dots : true,
    		singleItem : true
    	});
    	$(".section-header-slider__button_next").click(function() {
    		owl.trigger("owl.next");
    	});
    	$(".section-header-slider__button_prev").click(function() {
    		owl.trigger("owl.prev");
    	});
    }
    carousel_1();

    function carousel_2() {
        var owl = $(".section-second-carousel");
        owl.owlCarousel({
            items : 3
        });
        $(".section-second-slider__button_next").click(function() {
            owl.trigger("owl.next");
        });
        $(".section-second-slider__button_prev").click(function() {
            owl.trigger("owl.prev");
        });
    }
    carousel_2();

    function carousel_3() {
        var owl = $(".section-third-carousel");
        owl.owlCarousel({
            items : 4
        });
        $(".section-third-slider__button_next").click(function() {
            owl.trigger("owl.next");
        });
        $(".section-third-slider__button_prev").click(function() {
            owl.trigger("owl.prev");
        });
    }
    carousel_3();

    function carousel_4() {
        var owl = $(".section-fourth-carousel");
        owl.owlCarousel({
            items : 3,
            loop : true
        });
        $(".section-fourth-slider__button_next").click(function() {
            owl.trigger("owl.next");
        });
        $(".section-fourth-slider__button_prev").click(function() {
            owl.trigger("owl.prev");
        });
    }
    carousel_4();
});