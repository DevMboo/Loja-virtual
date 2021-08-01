$(window).on('load', function () {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(3350).fadeOut('slow'); 
    $('body').delay(3350).css({'overflow': 'visible'});
})