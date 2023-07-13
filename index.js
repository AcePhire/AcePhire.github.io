$(document).ready(function() {
  $introduction = $("#introduction");
  $skills = $("#skills");
  $extras = $("#extras");
  $hr = $("hr")
  $theMenu = $("#menu");
  $nav = $("#navigation-bar");

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

  $("#navigation-bar .menu-button").on("click", function(){
    $theMenu.animate({width: "toggle"}, 340, function(){});
  });

  $("#menu .menu-button").on("click", function(){
    $introduction.css("display", "flex");
    $skills.css("display", "block");
    $extras.css("display", "flex");
    $hr.css("display", "block");

    $nav.css({width: "100vw"});
    $theMenu.animate({width: "toggle"}, 340);
  });
});