$(document).ready(function() {
    $introduction = $("#introduction");
    $skills = $("#skills");
    $extras = $("#extras");
    $hr = $("hr")
    $theMenu = $("#menu");
    $nav = $("#navigation-bar");
  
    $("#navigation-bar .menu-button").on("click", function(){
      $theMenu.animate({width: "toggle"}, 340, function(){});
    });
  
    $("#menu .menu-button").on("click", function(){
      $theMenu.animate({width: "toggle"}, 340);
    });
  });