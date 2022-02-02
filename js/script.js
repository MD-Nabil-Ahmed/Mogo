$(function () {
    'use strict';


    
    // slick slider part start
    $('#massage').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
    });
    // slick slider part end




    // counter up part start
    $('.count').counterUp({
        delay: 10,
        time: 1000,
        loop: true,
    });
    // counter up part end




    // type js part start
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
    });
    // type js part end






    // menu fix part start
    let menuOff = $('#main_menu').offset().top

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop()

        if (scrolling > menuOff) {
            $('#main_menu').addClass('fix_menu')
        } else {
            $('#main_menu').removeClass('fix_menu')
        }
    });
    // menu fix part end





    // type js part start
    $('#bc_top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000)
    });


    $(window).scroll(function () {
        let scrolling = $(this).scrollTop()

        if (scrolling > 200) {
            $('#bc_top').fadeIn()
        } else {
            $('#bc_top').fadeOut()
        }
    });
    // type js part end

});