$(function () {

    $(".sens").click(function () {
        $('html, body').animate({
            scrollTop: $(".sensors").offset().top
        }, 500);
    });
    $(".dev").click(function () {
        $('html, body').animate({
            scrollTop: $(".device").offset().top
        }, 500);
    });
    $(".life__s").click(function () {
        $('html, body').animate({
            scrollTop: $(".life").offset().top
        }, 500);
    });
    $(".ord").click(function () {
        $('html, body').animate({
            scrollTop: $(".preorder").offset().top
        }, 500);
    });
    $('#tabs').on('click', 'li:not(.active)', function () {
        $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.preorder').find('.preorder__form').removeClass('active').eq($(this).index()).addClass('active');
    });
    $('.sensors__col_item').hover(function () {
        var k = this;
        hoverTimer = setTimeout(function () {
            $('.sensors__col_hint', k).fadeIn('fast');
        }, 100);
    },
            function () {
                clearTimeout(hoverTimer);
                $('.sensors__col_hint').fadeOut('fast');
            }
    );
    $('.web').hover(function () {
        $('#mobile').hide();
        $('#web').show();
        //$('.device__link').removeClass('active');
        //$(this).addClass('active');
    });
    $('.mobile').hover(function () {
        $('#mobile').show();
        $('#web').hide();
        //$('.device__link').removeClass('active');
        //$(this).addClass('active');
    });
    $('#start').show();
    $('#warm').hide();
    $('#volt').hide();
    $('#water').hide();
    $('#cam').hide();
    $('#know').hide();
    $('#window').hide();
    $('#thief').hide();
    $('#radio').hide();
    $('#easy').hide();
    $('#wifi').hide();
    $('#setup').hide();
    $('.overview').click(function () {
        $('.life .nav__item').removeClass('active');
        $(this).addClass('active');
        $('#start').show();
        $('#warm').hide();
        $('#volt').hide();
        $('#water').hide();
        $('#cam').hide();
        $('#know').hide();
        $('#window').hide();
        $('#thief').hide();
        $('#radio').hide();
        $('#easy').hide();
        $('#wifi').hide();
        $('#setup').hide();
    });
    $('.warm').click(function () {
        $('.life .nav__item').removeClass('active');
        $(this).addClass('active');
        $('#start').hide();
        $('#warm').show();
        $('#volt').hide();
        $('#water').hide();
        $('#cam').hide();
        $('#know').hide();
        $('#window').hide();
        $('#thief').hide();
        $('#radio').hide();
        $('#easy').hide();
        $('#wifi').hide();
        $('#setup').hide();
    });
    $('.volt').click(function () {
        $('.life .nav__item').removeClass('active');
        $(this).addClass('active');
        $('#start').hide();
        $('#warm').hide();
        $('#volt').show();
        $('#water').hide();
        $('#cam').hide();
        $('#know').hide();
        $('#window').hide();
        $('#thief').hide();
        $('#radio').hide();
        $('#easy').hide();
        $('#wifi').hide();
        $('#setup').hide();
    });
    $('.water').click(function () {
        $('.life .nav__item').removeClass('active');
        $(this).addClass('active');
        $('#start').hide();
        $('#warm').hide();
        $('#volt').hide();
        $('#water').show();
        $('#cam').hide();
        $('#know').hide();
        $('#window').hide();
        $('#thief').hide();
        $('#radio').hide();
        $('#easy').hide();
        $('#wifi').hide();
        $('#setup').hide();
    });
    $('.cam').click(function () {
        $('.life .nav__item').removeClass('active');
        $(this).addClass('active');
        $('#start').hide();
        $('#warm').hide();
        $('#volt').hide();
        $('#water').hide();
        $('#cam').show();
        $('#know').hide();
        $('#window').hide();
        $('#thief').hide();
        $('#radio').hide();
        $('#easy').hide();
        $('#wifi').hide();
        $('#setup').hide();
    });
    $('.know').click(function () {
        $('.life .nav__item').removeClass('active');
        $(this).addClass('active');
        $('#start').hide();
        $('#warm').hide();
        $('#volt').hide();
        $('#water').hide();
        $('#cam').hide();
        $('#know').show();
        $('#window').hide();
        $('#thief').hide();
        $('#radio').hide();
        $('#easy').hide();
        $('#wifi').hide();
        $('#setup').hide();
    });
    $('.window').click(function () {
        $('.life .nav__item').removeClass('active');
        $(this).addClass('active');
        $('#start').hide();
        $('#warm').hide();
        $('#volt').hide();
        $('#water').hide();
        $('#cam').hide();
        $('#know').hide();
        $('#window').show();
        $('#thief').hide();
        $('#radio').hide();
        $('#easy').hide();
        $('#wifi').hide();
        $('#setup').hide();
    });
    $('.thief').click(function () {
        $('.life .nav__item').removeClass('active');
        $(this).addClass('active');
        $('#start').hide();
        $('#warm').hide();
        $('#volt').hide();
        $('#water').hide();
        $('#cam').hide();
        $('#know').hide();
        $('#window').hide();
        $('#thief').show();
        $('#radio').hide();
        $('#easy').hide();
        $('#wifi').hide();
        $('#setup').hide();
    });
    $('.radio').click(function () {
        $('.life .nav__item').removeClass('active');
        $(this).addClass('active');
        $('#start').hide();
        $('#warm').hide();
        $('#volt').hide();
        $('#water').hide();
        $('#cam').hide();
        $('#know').hide();
        $('#window').hide();
        $('#thief').hide();
        $('#radio').show();
        $('#easy').hide();
        $('#wifi').hide();
        $('#setup').hide();
    });
    $('.easy').click(function () {
        $('.life .nav__item').removeClass('active');
        $(this).addClass('active');
        $('#start').hide();
        $('#warm').hide();
        $('#volt').hide();
        $('#water').hide();
        $('#cam').hide();
        $('#know').hide();
        $('#window').hide();
        $('#thief').hide();
        $('#radio').hide();
        $('#easy').show();
        $('#wifi').hide();
        $('#setup').hide();
    });
    $('.wifi').click(function () {
        $('.life .nav__item').removeClass('active');
        $(this).addClass('active');
        $('#start').hide();
        $('#warm').hide();
        $('#volt').hide();
        $('#water').hide();
        $('#cam').hide();
        $('#know').hide();
        $('#window').hide();
        $('#thief').hide();
        $('#radio').hide();
        $('#easy').hide();
        $('#wifi').show();
        $('#setup').hide();
    });
    $('.setup').click(function () {
        $('.life .nav__item').removeClass('active');
        $(this).addClass('active');
        $('#start').hide();
        $('#warm').hide();
        $('#volt').hide();
        $('#water').hide();
        $('#cam').hide();
        $('#know').hide();
        $('#window').hide();
        $('#thief').hide();
        $('#radio').hide();
        $('#easy').hide();
        $('#wifi').hide();
        $('#setup').show();
    });


    $('#quest').validate({
        rules: {
            Title: {
                required: true,
            },
            Mail: {
                required: true,
                email: true
            },
            Text: {
                required: true,
            }
        },
    });
    $('#ord').validate({
        rules: {
            Title: {
                required: true,
            },
            Mail: {
                required: true,
                email: true
            },
            Text: {
                required: true,
            }
        },
    });


    $('#order').click(function (e) {
        e.preventDefault();
        $('#ord').validate({
        rules: {
        Title: {
        required: true,
        },
                Mail: {
                required: true,
                        email: true
                },
                Text: {
                required: true,
                }
        },
//                messages: {
//                Title: "Please specify your name",
//                        Mail: {
//                        required: "We need your email address to contact you",
//                                email: "Your email address must be in the format of name@domain.com"
//                        }
//                }
        submitHandler: function (form) {
        $.ajax({
            type: "POST",
            url: $('.preorder__form form').attr('action'),
            dataType: 'html',
            crossDomain: true,
            async: true,
            data: $('.preorder__form form').serialize(),
            success: function (data) {
                swal({
                    title: 'Письмо отправлено!',
                    animation: false
                })
            }
        })
        }
    });
});
$('#question').click(function (e) {
    e.preventDefault();
    validate();
    $.ajax({
    type: "POST",
            url: $('.preorder__form form').attr('action'),
            dataType: 'html',
            crossDomain: true,
            async: true,
            data: $('.preorder__form form').serialize(),
            success: function (data) {
                swal({
                    title: 'Письмо отправлено!',
                    animation: false
                })

            }
    })
    });
});