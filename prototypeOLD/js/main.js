var origTxtSize;

$(function() {
  loadWelcome();


  // call Google maps on click
  $("#map").click(function () {createMap()});

  // call the form on click
  $("#planning").click(function() {loadStart()});


  $("#planner").click(function() {createPlanner()});
  // call welcome page on click
  $("#home").click(function() {loadWelcome()});

  // call around page on click
  $("#around").click(function() {loadAround()});

  // menu hover animation
  $(".button").hover(
    function() {
      setOrigTxtSize(this, "font-size");
      var size = parseFloat(origTxtSize.substring(0, origTxtSize.length - 2));
      $(this).animate({fontSize: (size * 1.2) + "px"}, 200)
    },
    function() {
      $(this).animate({fontSize: origTxtSize}, 200)
    });

});//end main.js
