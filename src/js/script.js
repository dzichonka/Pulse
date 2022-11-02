$(document).ready(function () {

    $('.carousel__wrapper').slick({
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/right.svg"></button>',
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                    infinite: true,
                },
            },
        ],
    });

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
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('#order .modal__descr').text($('.catalog-item__title').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #order').fadeOut('slow');
    });

    // $('#consultation-form').validate();
    // $('#consultation form').validate({
    //     rules: {
    //         name: {
    //             required: true,
    //             minlength: 2,
    //         },
    //         phone: {
    //             required: true,
    //             minlength: 7,
    //         },
    //         email: {
    //             required: true,
    //             email: true,
    //             minlength: 7,
    //         },
    //     },
    //     messages: {
    //         name: {
    //             required: "Пожалуйста, введите свое имя",
    //             minlength: jQuery.validator.format("At least {0} characters required!")
    //         },
    //         phone: {
    //             required: "Пожалуйста, введите свой номер телеона",
    //             minlength: jQuery.validator.format("At least {0} characters required!")
    //         },
    //         email: {
    //             required: "Пожалуйста, введите свой почтовый адрес",
    //             email: "Ваш почтовый адрес должен быть в формате name@domain.com",
    //             minlength: jQuery.validator.format("Почтовый адрес должен состоять минимум из {0} знаков")
    //         },
    //     }
    // });
    // $('#order form').validate();

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                phone: {
                    required: true,
                    minlength: 7,
                },
                email: {
                    required: true,
                    email: true,
                    minlength: 7,
                },
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("At least {0} characters required!")
                },
                phone: {
                    required: "Пожалуйста, введите свой номер телеона",
                    minlength: jQuery.validator.format("At least {0} characters required!")
                },
                email: {
                    required: "Пожалуйста, введите свой почтовый адрес",
                    email: "Ваш почтовый адрес должен быть в формате name@domain.com",
                    minlength: jQuery.validator.format("Почтовый адрес должен состоять минимум из {0} знаков")
                },
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');



    $.fn.setCursorPosition = function (pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    $("input[name=phone]").click(function () {
        $(this).setCursorPosition(4);
    }).mask("+7(999) 999-9999");

    $("input[name=phone]").mask("+7 (999) 999-9999");


    //PHP mailer

    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;

    });

    //smooth scroll and pageup

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1500) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $(window).ready(function () {
        const margin = 50; // переменная для контроля докрутки
        $("a[href^='#']").click(function () { // тут пишите условия, для всех ссылок или для конкретных
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + margin + "px" // .top+margin - ставьте минус, если хотите увеличить отступ
            }, {
                duration: 1600, // тут можно контролировать скорость
                easing: "swing"
            });
            return false;
        });
    });

    // $("a[href^='#']").click(function () {
    //     const _href = $(this).attr("href");
    //     $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    //     return false;
    // });

    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animate__animated', // default
            offset: 2,          // default
            mobile: true,       // default
            live: true        // default
        }
    )

    new WOW().init();







    //   });

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