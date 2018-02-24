$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1,
            },
            600:{
                items: 3,
            },
            1000:{
                items: 5,
            }
        }
    });

    $('a.nav-link').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 80
        }, 500);
        return false;
    });
});