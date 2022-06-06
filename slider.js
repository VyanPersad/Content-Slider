$(document).ready(function () {
    var slideSpeed = 500;
    var autoSwitch = true;
    var autoSwitch_speed = 4000;

    $('.slide').first().addClass('active');
    $('.slide').hide();
    $('.active').show();
    $('#next').on('click', next);
    $('#prev').on('click', prev);

    if (autoSwitch == true) {
        setInterval(function () {
            $('.active').removeClass('active').addClass('oldActive');
            if ($('.oldActive').is(':last-child')) {
                $('.slide').first().addClass('active');
            } else {
                $('.oldActive').next().addClass('active');
            }
            $('oldActive').removeClass('oldActive');
            $('.slide').fadeOut(slideSpeed);
            $('.active').fadeIn(slideSpeed);
        }, autoSwitch_speed);
    }

    function next() {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
        $('oldActive').removeClass('oldActive');
        $('.slide').fadeOut(slideSpeed);
        $('.active').fadeIn(slideSpeed);
    }

    function prev() {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':first-child')) {
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }
        $('oldActive').removeClass('oldActive');
        $('.slide').fadeOut(slideSpeed);
        $('.active').fadeIn(slideSpeed);
    }
});