$(document).ready(function() {
  $('.contactButton').click(function() {
    $('#contact div').fadeIn();
  });

  var alterClass = function() {
  var width = document.body.clientWidth;
  if(width < 980){
    $('#extras a').removeClass('large');
    $('#extras a').removeClass('massive');
    $('#extras a').addClass('huge');
  }else{
    $('#extras a').removeClass('large');
    $('#extras a').removeClass('huge');
    $('#extras a').addClass('massive');
    };
  };

  $(window).resize(function(){
    alterClass();
  });

  alterClass();
});
