$(document).ready(function () {
    // web lang
    if ($("html").attr("dir") == "rtl") {
        var dir_lang = true;
    } else {
        var dir_lang = false;
    }

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

    // open menu
    $(".menu-icon i ").click(function () {
        $(".nav-menu").addClass("open-menu-j");
        $(".over-lay").show();
    });

    // close menu
    $(".close-menu i, .over-lay").click(function () {
        $(".nav-menu").removeClass("open-menu-j");
        $(".over-lay").hide();
    });

    // niceSelect
    $(".select-box").niceSelect();

    // Aos
    AOS.init();
});
