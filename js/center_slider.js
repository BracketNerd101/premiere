$(document).ready(function() {
  $('.slider1').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    centerMode: true,
    vertical: false,
  });
  
  
  $('.slider2').slick({
    dots: true,
    infinite: false,
    slidesToShow: 4,
    centerMode: false,
    vertical: false,
  });
  
  $('.slider3').slick({
    dots: true,
    infinite: false,
    slidesToShow: 4,
    centerMode: true,
    vertical: false,
  });
});


$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});
	