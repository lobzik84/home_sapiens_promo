$(function () {
    $(".sens").click(function () {
        $('html, body').animate({
            scrollTop: $(".sensors").offset().top
        }, 1000);
    });
    $(".dev").click(function () {
        $('html, body').animate({
            scrollTop: $(".device").offset().top
        }, 1000);
    });
    $(".life__s").click(function () {
        $('html, body').animate({
            scrollTop: $(".life").offset().top
        }, 1000);
    });
    $(".ord").click(function () {
        $('html, body').animate({
            scrollTop: $(".preorder").offset().top
        }, 1000);
    });
});