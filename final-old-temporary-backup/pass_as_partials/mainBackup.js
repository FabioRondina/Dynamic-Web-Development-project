// var origTxtSize;

$(function() {
  //show Welcome
  // loadWelcome();
  //initial setup on load


  // call welcome page on click
  // $("#home").click(function() {loadWelcome()});

  // call the form on click
  // $("#planning").click(function() {loadStart()});

  // call around page on click
  // $("#around").click(function() {loadAround()});

  // call Google maps on click
  $("#map").click(function () {createMap()});

  $("#map").attr("disabled", true);

  // call planner on click
  $("#planner").click(function() {createPlanner()});

  $("#login").click(function() {$('#loginForm').show()});

  //hide profile page
  document.getElementById('profile').style.visibility='hidden';



  // menu hover animation
  // $(".button").hover(
  //   function() {
  //     setOrigTxtSize(this, "font-size");
  //     var size = parseFloat(origTxtSize.substring(0, origTxtSize.length - 2));
  //     $(this).animate({fontSize: (size * 1.2) + "px"}, 200)
  //   },
  //   function() {
  //     $(this).animate({fontSize: origTxtSize}, 200)
  //   });


  // -------- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -------------//
//     $(".button").hover(function(){
// <<<<<<< Melina2
//         $(this).css("background-color", "rgba(#5c8a03)");
//         }, function(){
//         $(this).css("background-color", "#82b21e");
// =======
//         $(this).css("background-color", "rgba(142, 215, 198, 0.7)");
//         }, function(){
//         $(this).css("background-color", "cornsilk");
//     });
// -------------------------------------------------------- //


  // menu hover animation
  // $(".button").hover(
  //   function() {
  //     setOrigTxtSize(this, "font-size");
  //     var size = parseFloat(origTxtSize.substring(0, origTxtSize.length - 2));
  //     $(this).css({cursor: 'pointer'});
  //     $(this).animate({fontSize: (size * 1.2) + "px"}, 200)
  //   },
  //   function() {
  //     $(this).css({cursor: 'default'});
  //     $(this).animate({fontSize: origTxtSize}, 200)
  //   });

  // $(".button").click(function() {
  //   var size = parseFloat(origTxtSize.substring(0, origTxtSize.length - 2));
  //   $(this).css({width: "100%", fontSize: (size * 1.2) + "px"});
  //   $('.button').not(this).css({width: "90%", fontSize: origTxtSize});
  // });


});//end main.js

// function setOrigTxtSize(element, property) {
//   origTxtSize = $(element).css(property);
// }
