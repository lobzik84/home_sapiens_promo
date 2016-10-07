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

    $('.web').click(function () {
        $('#mobile').hide();
        $('#web').show();
        $('.device__link').removeClass('active');
        $(this).addClass('active');
    });
    $('.mobile').click(function () {
        $('#mobile').show();
        $('#web').hide();
        $('.device__link').removeClass('active');
        $(this).addClass('active');
    });



    $('#warm').show();
    $('#volt').hide();
    $('#water').hide();
    $('#cam').hide();
    $('#know').hide();
    $('#window').hide();
    $('#thief').hide();
    $('#radio').hide();
    $('.warm').click(function () {
        $('.nav__item').removeClass('active');
        $(this).addClass('active');
        $('#warm').show();
        $('#volt').hide();
        $('#water').hide();
        $('#cam').hide();
        $('#know').hide();
        $('#window').hide();
        $('#thief').hide();
        $('#radio').hide();
    });
    $('.volt').click(function () {
        $('.nav__item').removeClass('active');
        $(this).addClass('active');
        $('#warm').hide();
        $('#volt').show();
        $('#water').hide();
        $('#cam').hide();
        $('#know').hide();
        $('#window').hide();
        $('#thief').hide();
        $('#radio').hide();
    });
    $('.water').click(function () {
        $('.nav__item').removeClass('active');
        $(this).addClass('active');
        $('#warm').hide();
        $('#volt').hide();
        $('#water').show();
        $('#cam').hide();
        $('#know').hide();
        $('#window').hide();
        $('#thief').hide();
        $('#radio').hide();
    });
    $('.cam').click(function () {
        $('.nav__item').removeClass('active');
        $(this).addClass('active');
        $('#warm').hide();
        $('#volt').hide();
        $('#water').hide();
        $('#cam').show();
        $('#know').hide();
        $('#window').hide();
        $('#thief').hide();
        $('#radio').hide();
    });
    $('.know').click(function () {
        $('.nav__item').removeClass('active');
        $(this).addClass('active');
        $('#warm').hide();
        $('#volt').hide();
        $('#water').hide();
        $('#cam').hide();
        $('#know').show();
        $('#window').hide();
        $('#thief').hide();
        $('#radio').hide();
    });
    $('.window').click(function () {
        $('.nav__item').removeClass('active');
        $(this).addClass('active');
        $('#warm').hide();
        $('#volt').hide();
        $('#water').hide();
        $('#cam').hide();
        $('#know').hide();
        $('#window').show();
        $('#thief').hide();
        $('#radio').hide();
    });
    $('.thief').click(function () {
        $('.nav__item').removeClass('active');
        $(this).addClass('active');
        $('#warm').hide();
        $('#volt').hide();
        $('#water').hide();
        $('#cam').hide();
        $('#know').hide();
        $('#window').hide();
        $('#thief').show();
        $('#radio').hide();
    });
    $('.radio').click(function () {
        $('.nav__item').removeClass('active');
        $(this).addClass('active');
        $('#warm').hide();
        $('#volt').hide();
        $('#water').hide();
        $('#cam').hide();
        $('#know').hide();
        $('#window').hide();
        $('#thief').hide();
        $('#radio').show();
    });

});