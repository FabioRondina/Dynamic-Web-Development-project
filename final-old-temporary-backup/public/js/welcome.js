function loadWelcome() {

  var greeting = document.createElement("div");

  $("#mainWindow").html(greeting);
  $(greeting).append("<h2 style='text-align: center;'> Welcome!</h2>")

  $(greeting).append("<p style='text-align: center;'>This is our trip assistant website to use it you need to start planning your day by picking a date, selecting the city as your location and starting point which is your place of accommodation.</p>");
  $(greeting).append("<p style='text-align: center;'>After you choose your preferences and the mean of transportation, the map will load along with pin suggestions. You can check what's around you and finally, make a daily plan on the calendar.</p>");
  $(greeting).append("<p style='text-align: right;'><i><b>- the Three Pin team</b></i></p>");
  $(greeting).css("margin", "40px");
  $(greeting).css("padding", "2px 25px 10px 25px");
  $(greeting).css("background-color", "rgba(214, 245, 142, 0.9)");
  $(greeting).css("color", "black");

  };
