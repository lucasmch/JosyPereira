$(window).on('load', function () {
  $('#preloader .preloader-container').fadeOut();
  $('#preloader').delay(350).fadeOut('slow'); 
  setTimeout(() => {
    $('body').delay(350).css({'overflow-y': 'visible'});
  }, 1000);
})