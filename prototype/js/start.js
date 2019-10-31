function loadStart() {
  $("#mainWindow").html("<div id='formContainer'></div>");
  $("#formContainer").append("<form id='form' style='background-color: rgba(142, 215, 198, 0.7)'></form>");
  var padding = "2px 25px 10px 25px";
  $("#form").css("padding", padding);
  $("#form").css("margin", "40px");

  $("#form").append("<h2>Start planning</h2>");
  $("#form").append("<hr>");
  $("#form").append("<label class='label'><b>Starting date : </b></label>");
  $("#form").append("<input class='box' type='date' name='date'></input><br/>");
  $("#form").append("<label class='label'><b>Location: </b></label>");
  $("#form").append("<input class='box' type='text' name='location'></input><br/>");
  $("#form").append("<label class='label'><b>Starting point: </b></label>");
  $("#form").append("<input class='box' type='text' name='startpoint'></input><br/>");
  $("#form").append("<label class='label'><b>Preferences: </b><br/></label>");

  $('#form').append("<input type='checkbox' name='busStation'> Bus Station <br/>");
  $('#form').append("<input type='checkbox' name='cafe'> Cafe <br/>");
  $('#form').append("<input type='checkbox' name='carRental'> Car Rental <br/>");
  $('#form').append("<input type='checkbox' name='museum'> Museum <br/>");
  $('#form').append("<input type='checkbox' name='restaurant'> Restaurant <br/>");
  $('#form').append("<input type='checkbox' name='shoppingCentre'> Shopping Centre <br/>");
  $('#form').append("<input type='checkbox' name='supermarket'> Supermarket <br/>");

  $(".label").css("margin-bottom", "10px");
  $(".box").css("margin-bottom", "15px");
  $(".box").css("margin-left", "15px");

};
