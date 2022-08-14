$(window).on('load', function () {
  $('#preloader .preloader-container').fadeOut();
  $('#preloader').delay(350).fadeOut('slow'); 
  $('body').delay(350).css({'overflow': 'visible'});
})