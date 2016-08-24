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

});