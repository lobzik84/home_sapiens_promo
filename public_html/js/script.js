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
    $('#tabs1').on('click', 'li:not(.active)', function () {
        $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.preorder').find('.preorder__form').removeClass('active').eq($(this).index()).addClass('active');
    });
    $('#tabs2').on('click', 'li:not(.active)', function () {
        $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.life').find('.life__text').removeClass('text__active').eq($(this).index()).addClass('text__active');
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
    });
    $('.mobile').hover(function () {
        $('#mobile').show();
        $('#web').hide();
    });

    $('#quest').validate({
        rules: {
            Title: {
                required: true
            },
            Mail: {
                required: true,
                email: true
            },
            Text: {
                required: true
            }
        }
    });
    $('#ord').validate({
        rules: {
            Title: {
                required: true
            },
            Phone: {
                required: true
            },
            Mail: {
                required: true,
                email: true
            },
            Text: {
                required: true
            }
        }
    });

    $('#order').click(function (e) {
        e.preventDefault();
        if ($('#o-text').val().length < 3 | $('#o-phone').val().length < 3 | !($('#o-mail').val().includes("@")) | $('#o-name').val().length < 2) {
            swal({
                title: 'Заполните поля формы!',
                animation: false
            });
            return;
        }
        $('#o-text').val("Заявка на предзаказ: " + $('#o-text').val());
        $.ajax({
            type: "POST",
            url: $('#ord').attr('action'),
            dataType: 'html',
            crossDomain: true,
            async: true,
            data: $('#ord').serialize(),
            success: function (data) {
                swal({
                    title: 'Спасибо!',
                    text: 'Наши менеджеры свяжутся с Вами в ближайшее время.',
                    animation: false
                });
                $('#o-name').val('');
                $('#o-phone').val('');
                $('#o-mail').val('');
                $('#o-text').val('');
            }
        });
    });
    $('#question').click(function (e) {
        e.preventDefault();
        if ($('#q-text').val().length < 3 | !($('#q-mail').val().includes("@")) | $('#q-name').val().length < 2) {
            swal({
                title: 'Заполните поля формы!',
                animation: false
            });
            return;
        }
        $('#q-text').val("Вопрос по проекту УПРАВДОМ: " + $('#q-text').val());
        $.ajax({
            type: "POST",
            url: $('#quest').attr('action'),
            dataType: 'html',
            crossDomain: true,
            async: true,
            data: $('#quest').serialize(),
            success: function (data) {
                swal({
                    title: 'Спасибо!',
                    text: 'Наши менеджеры свяжутся с Вами в ближайшее время.',
                    animation: false
                });
                $('#q-name').val('');
                $('#q-phone').val('');
                $('#q-mail').val('');
                $('#q-text').val('');
            }
        });
    });
});