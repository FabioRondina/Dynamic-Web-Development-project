$(function() {
  //check if the div is in the page then ,load planner on ready page, will work only on div calendar

  //switch to dark theme on reload if actualTheme is dark
  if(localStorage.actualTheme == "dark"){

    $("#test").attr("href", "css/main-dark.css");
  }

  //change theme on click
  $('#changeTheme').click(function(){
    // check if localStorage is active
    if (typeof(Storage) !== "null") {
      //switch default to dark theme
      if(localStorage.actualTheme == "default" ){
        console.log("should change on dark theme");
        $("#test").attr("href", "css/main-dark.css");
        localStorage.actualTheme = "dark";
      } else {
        localStorage.actualTheme = "default";
        console.log("should change on default theme");
        $("#test").attr("href", "css/main.css");
      }

    } else {
      console.log("Sorry, your browser does not support web storage");
    }
   });// end change theme


    // function to request city suggestions
    $("#cityText").keyup(function() {
       var city = $("#cityText").val();

       if(city.length > 2) {
           $.ajax({
               url: "/cityautocompl",
               method: 'GET',
               data: {city: city},
               success: function(data) {
                   $('.dropdown-content-city').html(data.candidates).show();
                  }  // end of callback function
           });  // end of the AJAX call
         }  // end of if statement
        else{
            $(".dropdown-content-city").hide();
        }
       });  // end of city field change function


    // function to request location suggestion within the city
    $("#locText").keyup(function() {
        var city = $("#cityText").val();
        var loc = $("#locText").val();

        if(loc.length > 2) {
            $.ajax({
                url: "/locautocompl",
                method: "GET",
                data: {city: city, loc: loc},
                success: function(data) {
                    $('.dropdown-content-loc').html(data.candidates).show();
                }  // end of callback function
            });  // end of AJAX request
        }  // end of if statement
        else {
            $(".dropdown-content-loc").hide();
        }
    });  // end of location field change function
});  // end of main function
   
// function to fill the city field with the chosen city
function selectCity(val) {
    $("#cityText").val(val);
    $(".dropdown-content-city").hide();
}

// function to fill the location field with the chosen location
function selectLoc(val) {
    $("#locText").val(val);
    $(".dropdown-content-loc").hide();
}
