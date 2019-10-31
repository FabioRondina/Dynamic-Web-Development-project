function loadStart() {
  $("#mainWindow").html("<div id='formContainer'></div>");

  $("#formContainer").append("<form id='form' action='/plan' method='POST' style='background-color: rgba(214, 245, 142, 0.9)'></form>");
  var padding = "2px 25px 90px 25px";

  $("#form").css("padding", padding);
  $("#form").css("margin", "40px");

  $("#form").append("<h2>Start planning</h2>");
  $("#form").append("<hr>");
  $("#form").append("<label class='label'><b>Starting date : </b></label>");
  $("#form").append("<input class='box' type='date' name='date'></input><br/>");
  $("#form").append("<label class='label'><b>Location: </b></label>");

  $("#form").append("<input class='box' type='text' name='location' placeholder='City'></input><br/>");
  $("#form").append("<label class='label'><b>Starting point: </b></label>");
  $("#form").append("<input class='box' type='text' name='startpoint' placeholder='Accommodation'></input><br/>");
  $("#form").append("<label class='label'><b>Preferences: </b></label><br/>");

  $('#form').append("<div class='row'><div class='column'><input type='checkbox' name='amusementPark'> Amusement Park <br/></div></div>");
  $('#form').append("<div class='row'><div class='column'><input type='checkbox' name='aquarium'> Aquarium <br/></div></div>");
  $('#form').append("<div class='row'><div class='column'><input type='checkbox' name='artGallery'> Art Gallery <br/></div></div>");
  $('#form').append("<div class='row'><div class='column'><input type='checkbox' name='Church'> Church <br/></div></div>");
  $('#form').append("<div class='row'><div class='column'><input type='checkbox' name='departmentStore'> Department Store <br/></div></div>");
  $('#form').append("<div class='row'><div class='column'><input type='checkbox' name='embassy'> Embassy <br/></div></div>");
  $('#form').append("<div class='row'><div class='column'><input type='checkbox' name='mosque'> Mosque <br/></div></div>");
  $('#form').append("<div class='row'><div class='column'><input type='checkbox' name='museum'> Museum <br/></div></div>");
  $('#form').append("<div class='row'><div class='column'><input type='checkbox' name='postOffice'> Post Office <br/></div></div>");
  $('#form').append("<div class='row'><div class='column'><input type='checkbox' name='shoppingCentre'> Shopping Centre <br/></div></div>");
  $('#form').append("<div class='row'><div class='column'><input type='checkbox' name='synagogue'> Synagogue <br/></div></div>");
  $('#form').append("<div class='row'><div class='column'><input type='checkbox' name='travel agency'> Travel Agency <br/></div></div>");
  $("#form").append("<hr>");

  $("#form").append("<label class='label'><b>Means of transportation: </b></label><br/>");
  $('#form').append("<input type='checkbox' name='publicTransport'> Public Transport <br/>");
  $('#form').append("<input type='checkbox' name='car'> Car <br/>");
  $('#form').append("<input type='checkbox' name='foot'> On foot <br/>");
  $('#form').append("<input type='checkbox' name='bicyle'> Bicycle <br/>");

  $('#form').append("<button class='submit'>Submit</button>");
  $('#form').append("<button class='reset'>Reset</button>");

  $(".label").css("margin-bottom", "10px");
  $(".label").css("display", "inline-block");
  $(".label").css("width", "120px");
  $(".column").css("float", "left");
  $(".column").css("width", "50%");
  $(".row:after").css("content", "");
  $(".row:after").css("display", "table");
  $(".row:after").css("clear", "both");

  $(".submit").css("float", "left");
  $(".submit").css("margin-top", "15px");
  $(".reset").css("float", "right");
  $(".reset").css("margin-top", "15px");
};
