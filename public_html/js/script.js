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

    $('.interface').hover(function () {
        $('#mobile').hide();
        $('#web').show();
        $('.device__link').removeClass('active');
    },
            function () {
                $('#mobile').show();
                $('#web').hide();
                $('.device__link').last().addClass('active');
            });
});