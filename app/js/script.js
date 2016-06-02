$(document).ready(function(){
  /// fade in C overlay
  $('.overlayc').fadeIn(2000);

  ///// Small navbar drop down animation
  $(".nav-icon").click(function(){
    $(".slide-down-nav").toggleClass("move-nav-down");
    $(".small-logo").toggleClass("no-display");
    });

  $(".slide-down-li").click(function(){
    $(".slide-down-nav").toggleClass("move-nav-down");
    $(".small-logo").toggleClass("no-display");
  });


  //// navbar scroll to link effect
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });

});
