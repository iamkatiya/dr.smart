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

$(".slider").slick({

  infinite: false,
  slidesToShow: 1,
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

