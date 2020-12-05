// Импортируем другие js-файлы
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

$(".review").slick({

  slidesToShow: 3,
});

$(function(){
  $("#up").bind('click', function(e){
    e.preventDefault();
    $('body,html').animate({scrollTop: 0}, 2000);
  });
});