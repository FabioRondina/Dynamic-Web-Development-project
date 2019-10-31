// var origTxtSize;

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
  // $(".button").hover(
  //   function() {
  //     setOrigTxtSize(this, "font-size");
  //     var size = parseFloat(origTxtSize.substring(0, origTxtSize.length - 2));
  //     $(this).animate({fontSize: (size * 1.2) + "px"}, 200)
  //   },
  //   function() {
  //     $(this).animate({fontSize: origTxtSize}, 200)
  //   });

    $(".button").hover(function(){
        $(this).css("background-color", "rgba(142, 215, 198, 0.7)");
        }, function(){
        $(this).css("background-color", "cornsilk");
    });

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


  //Screen resize testing
  $(window).resize(function() {

    console.log("actual width is " +screen.availWidth);
    var wi = $(window).width();
    console.log(wi);
    // console.log($(window).width());screen.availWidth
    if ( wi < 800 || screen.availWidth < 800) {
      console.log("mobile layout");
      //resize width of menu
      $('#menuDiv').css('width','100%');
      //change menuitem display
      $('menu').css('display','inline-block');
      //resize width of mainwindow
      $('#mainWindow').css('width','100%')
    } else {
      console.log("large")
      // console.log("")
      //resize width of menu to the original
      $('#menuDiv').css('width','20%')
      // $('menu').css('display','inline-grid');
      // //change menuitem display
      $('menu').css('display','grid');
      // //resize width of mainwindow
      $('#mainWindow').css('width','75%')
    }
  });


});//end main.js

function setOrigTxtSize(element, property) {
  origTxtSize = $(element).css(property);
}
