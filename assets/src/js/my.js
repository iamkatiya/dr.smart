$('.irk').click(function () {
  $('.Moscow').addClass('city-hidden');
  $('.Irkutsk').removeClass('city-hidden');
  $('.msc').removeClass('address-block__active');
  $('.irk').addClass('address-block__active');
});
$('.msc').click(function () {
  $('.Moscow').removeClass('city-hidden');
  $('.Irkutsk').addClass('city-hidden');
  $('.msc').addClass('address-block__active');
  $('.irk').removeClass('address-block__active');
});
$('#city').click(function () {
  $('.choose-city').addClass('choose-city__active');
});
$(".slider").on("init reInit afterChange", function(event, slick) {
  $(".slider__active.text-p1.color-black").html('0' +(slick.slickCurrentSlide() + 1));
  $(".slider__count").html('0' + slick.slideCount);
});
$(".slider").slick({

  // autoplay: true,
  infinite: false,
  slidesToShow: 1,
  nav: false,
  dots: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2
    }

  }]
});

$(".review").on("init reInit afterChange", function(event, slick) {
  $(".review__active.text-p1.color-black").html('0' +(slick.slickCurrentSlide() + 1));
  $(".review__count").html('0' + slick.slideCount);
});
$(".review").slick({
  slidesToShow: 3,
  arrows: false,
  dots: true,
  slidesToScroll: 3,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 2
    }
  }]
});

$(function () {
  $("#up").bind('click', function (e) {
    e.preventDefault();
    $('body,html').animate({scrollTop: 0}, 2000);
  });
});

