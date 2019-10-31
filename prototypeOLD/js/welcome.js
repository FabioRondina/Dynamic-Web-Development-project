function loadWelcome() {

  var greeting = document.createElement("div");


  $("#mainWindow").html(greeting);
  $(greeting).append("<h2 style='text-align: center;'> Welcome!</h2>")
  $(greeting).append("<p style='text-align: center;'>This is our trip assistant website where you can start planning your trip by picking a date,<br/> selecting location and starting point, and choosing your preferences.</p>");
  $(greeting).append("<p style='text-align: center;'>After that, our web app will generate a route on the map along with pin suggestions.<br/> You can check what's around you and finally, make a daily plan.</p>");
  };
