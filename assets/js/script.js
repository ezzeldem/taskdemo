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
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: "<div class='arrow-slider-header left-arrow'> <i class='fas fa-arrow-left'></i></div>",
        nextArrow: "<div class='arrow-slider-header right-arrow'> <i class='fas fa-arrow-right'></i></div>",
    });


        // photo-slider
        $(".photo-slider").slick({
            dots: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            rtl: dir_lang,
            autoplay: true,
            autoplaySpeed: 4000,
            prevArrow: "<div class='arrow-slider-photo left-arrow'> <i class='fas fa-angle-left'></i></div>",
            nextArrow: "<div class='arrow-slider-photo right-arrow'> <i class='fas fa-angle-right'></i></div>",
        });

    // vedio-slider

    $(".vedio-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        adaptiveHeight: true,
        rtl: dir_lang,
        autoplaySpeed: 1000,
        centerMode: true,
        centerPadding: '20px',
        arrows:false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 772,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    });

    //services-mianBox
    // new-slider
    $(".new-slider").slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: dir_lang,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
    });
    // details-galler-slider
    $(".details-galler-slider").slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: dir_lang,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:false,
        arrows:false,
    });



       // blog-slider

       $(".blog-slider").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        adaptiveHeight: true,
        rtl: dir_lang,
        autoplaySpeed: 1000,
        arrows:false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ],
    });



    // open popup
    $('.blog-bottom .link').click(function(s){
        s.stopPropagation();
        $("#" + $(this).data("open")).addClass('open-poUp-box');
    });
    $('.blog-popUp-box .close-menu i').click(function(){
        $(".blog-popUp-box").removeClass('open-poUp-box');
    });





        // open popup2
    $('.pop-up-mian').click(function(e2){
        e2.stopPropagation();
        $("#" + $(this).data("open")).addClass('open-poUp-box');
    });
    $('.popUp-box .close-menu').click(function(){
        $(".popUp-box").removeClass('open-poUp-box');
    });




    // niceSelect
    $(".select-box").niceSelect();












    $(".details-banner-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        adaptiveHeight: true,
        rtl: dir_lang,
        autoplaySpeed: 9000,
        arrows:false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 772,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    });

    $(".intro-slider-3").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        adaptiveHeight: true,
        rtl: dir_lang,
        autoplaySpeed: 700,
        arrows:false,
    });


















    // Aos
    AOS.init();
});
