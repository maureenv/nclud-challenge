$(document).ready(function(){

///// Small navbar drop down animation
  $(".nav-icon").click(function(){
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
