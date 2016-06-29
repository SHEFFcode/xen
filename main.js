//Mobile menu collapse
$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

//Menu Bar Darkening functionality
$(window).scroll(function(){
  if($('.navbar').offset().top > 50) {
    $('.navbar-fixed-top').addClass('top-nav-collapse');
  } else {
    $('.navbar-fixed-top').removeClass('top-nav-collapse');
  }
});


//Scrolling
$(function(){
  $('.page-scroll a').bind('click', function(){
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top,

    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});