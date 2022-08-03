$(document).ready(function () {
    $('.carousel__wrapper').slick({
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrows/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrows/right.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ],
    });
});

