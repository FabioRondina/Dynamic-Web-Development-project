function loadStart() {
  var plan = document.createElement("form");
  plan.setAttribute('method',"post");
  plan.setAttribute('action',"");

  var heading = document.createElement('h2'); // Heading of Form
  heading.innerHTML = "Start planning";
  plan.appendChild(heading);

  var line = document.createElement('hr'); // Giving Horizontal Row After Heading
  plan.appendChild(line);

  var linebreak = document.createElement('br');
  plan.appendChild(linebreak);

  var calLabel = document.createElement('label'); // Create Label for Calendar
  calLabel.innerHTML = "<b>Starting date : </b>"; // Set Field Labels
  plan.appendChild(calLabel);

  var calendar = document.createElement("input"); // Create Input Field for Calendar
  calendar.setAttribute('type', 'date');
  plan.appendChild(calendar);
  plan.appendChild(linebreak);

  var locLabel = document.createElement('label'); // Create Label for Location Field
  locLabel.innerHTML = "<b>Location : </b>"; // Set Field Labels
  plan.appendChild(locLabel);

  var location = document.createElement('input'); // Create Input Field for Location
  location.setAttribute("type", "text");
  location.setAttribute("location", "dloc");
  plan.appendChild(location);
  plan.appendChild(linebreak);

  var startLabel = document.createElement('label'); // Create Label for Starting point
  startLabel.innerHTML = "<b>Starting point : </b>"; // Set Field Labels
  plan.appendChild(startLabel);

  var startPoint = document.createElement('input'); // Create Input Field for Starting point
  startPoint.setAttribute("type", "text");
  startPoint.setAttribute("startPoint", "dstartpoint");
  plan.appendChild(startPoint);
  plan.appendChild(linebreak);

  var prefLabel = document.createElement('label'); // Create Label for Preferences
  prefLabel.innerHTML = "<b>Preferences : </b>"; // Set Field Labels
  plan.appendChild(prefLabel);

  var linebreak = document.createElement('br');
  plan.appendChild(linebreak);

  $("#mainWindow").html(plan);

  $('#mainWindow').append("<input type='checkbox' name='busStation'> Bus Station <br/>");
  $('#mainWindow').append("<input type='checkbox' name='cafe'> Cafe <br/>");
  $('#mainWindow').append("<input type='checkbox' name='carRental'> Car Rental <br/>");
  $('#mainWindow').append("<input type='checkbox' name='museum'> Museum <br/>");
  $('#mainWindow').append("<input type='checkbox' name='restaurant'> Restaurant <br/>");
  $('#mainWindow').append("<input type='checkbox' name='shoppingCentre'> Shopping Centre <br/>");
  $('#mainWindow').append("<input type='checkbox' name='supermarket'> Supermarket <br/>");
};
