/**
 * Created by KRM on 11/19/16.
 */

$(document).ready(function(){

    $('.tour_slider_show').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.tour_slider_mini'
    });
    $('.tour_slider_mini').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.tour_slider_show',
        infinite: true,
        arrows: true,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 603,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                }
            },
            {
                breakpoint: 525,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: false,
                    centerMode: false
                }
            }
        ]
    });



    $(".toggle_srvc_box").on("click", function() {
        console.log("initiated...");

        $(this).find('span').toggleClass('chevdown chevup');

    });




});
