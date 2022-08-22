$(document).ready(function () {

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    // $('.catalog-item__link-main').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalog-item__main').eq(i).toggleClass('catalog-item__main_active');
    //         $('.catalog-item__details').eq(i).toggleClass('catalog-item__details_active');
    //     })
    // });

    // $('.catalog-item__link-details').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalog-item__main').eq(i).toggleClass('catalog-item__main_active');
    //         $('.catalog-item__details').eq(i).toggleClass('catalog-item__details_active');
    //     })
    // });

    function toggleSlider(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__main').eq(i).toggleClass('catalog-item__main_active');
                $('.catalog-item__details').eq(i).toggleClass('catalog-item__details_active');
            })
        });
    };

    toggleSlider('.catalog-item__link-main');
    toggleSlider('.catalog-item__link-details');

    //modal

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').show();
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('#order .modal__descr').text($('.catalog-item__title').eq(i).text());
            $('.overlay, #order').show();
        })
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #order').hide();
    });

    // //     $('.carousel__wrapper').slick({
    // //         speed: 1000,
    // //         prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/left.svg"></button>',
    // //         nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/right.svg"></button>',
    // //         responsive: [
    // //             {
    // //                 breakpoint: 768,
    // //                 settings: {
    // //                     arrows: false,
    // //                     dots: true,
    // //                 }
    // //             }
    // //         ],
    // //     });
    // // });

    // var slider = tns({
    //     container: '.carousel__wrapper',
    //     items: 1,
    //     slideBy: 'page',
    //     autoplay: true,
    //     controls: false,
    //     autoplayButtonOutput: false,
    //     navPosition: "bottom",
    //     responsive: {
    //         768: {
    //             controls: false,
    //         },
    //     }
    //     // nav: false,
    //     // controlsText: [
    //     //     '<img src="icons/arrows/left.svg">',
    //     //     '<img src="icons/arrows/right.svg">',
    //     // ]
    // });
    // document.querySelector('.prev').addEventListener('click', function () {
    //     slider.goTo('prev');
    // });
    // document.querySelector('.next').addEventListener('click', function () {
    //     slider.goTo('next');

});