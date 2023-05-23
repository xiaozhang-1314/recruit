$(function() {
    var all = $('.all').offset().top;
    $(window).scroll(function() {
        if ($(document).scrollTop() >= all) {
            $('.gu').fadeIn();
        } else {
            $('.gu').fadeOut();
        }
    });
})