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
