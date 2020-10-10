$(document).ready(function () {
    // web lang
    if ($("html").attr("dir") == "rtl") {
        var dir_lang = true;
    } else {
        var dir_lang = false;
    }
    
    // open menu
    $(".menu-icon i ").click(function () {
        $(".nav-menu").addClass("open-menu-j");
        $("body").addClass("body-over-lay");
        $(".over-lay").show();
    });

    // close menu
    $(".close-menu i, .over-lay").click(function () {
        $(".nav-menu").removeClass("open-menu-j");
        $("body").removeClass("body-over-lay");
        $(".over-lay").hide();
    });





    // window load
    $(window).load(function () {
        $(".loging-page").fadeOut();
    });

    // intro slider
    $(".intro-slider").slick({
        dots: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        rtl: dir_lang,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<div class='arrow-slider left-arrow'> <i class='fas fa-arrow-left'></i></div>",
        nextArrow: "<div class='arrow-slider right-arrow'> <i class='fas fa-arrow-right'></i></div>",
    });

    // gallery-slider

    
    
    $(".gallery-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        //  autoplay:true,
        dots: false,
        adaptiveHeight: true,
        autoplaySpeed: 1000,
        prevArrow: "<div class='arrow-slider2 left-arrow'> <i class='fas fa-arrow-left'></i></div>",
        nextArrow: "<div class='arrow-slider2 right-arrow'> <i class='fas fa-arrow-right'></i></div>",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 772,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false,
                },
            },
        ],
    });

    //services-mianBox

    $(".services-mianBox").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        //  autoplay:true,
        dots: false,
        adaptiveHeight: true,
        autoplaySpeed: 1000,
        prevArrow: "<div class='arrow-slider2 left-arrow'> <i class='fas fa-arrow-left'></i></div>",
        nextArrow: "<div class='arrow-slider2 right-arrow'> <i class='fas fa-arrow-right'></i></div>",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 772,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false,
                },
            },
        ],
    });





    // niceSelect
    $(".select-box").niceSelect();

    // Aos
    AOS.init();
});
