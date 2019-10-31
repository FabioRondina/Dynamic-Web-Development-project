function loadAround() {

  var aroundYou = document.createElement("form");
  aroundYou.setAttribute('method',"post");
  aroundYou.setAttribute('action',"");

  var heading = document.createElement('h2'); // Heading of Form
  heading.innerHTML = "What's around you";
  aroundYou.appendChild(heading);

  var line = document.createElement('hr'); // Giving Horizontal Row After Heading
  aroundYou.appendChild(line);

  var linebreak = document.createElement('br');
  aroundYou.appendChild(linebreak);


  $("#mainWindow").html(aroundYou);
  $('#mainWindow').append("<ul><li><b>Alte Pinakothek</b></li></ul>");
  $('#mainWindow').append("<p>The Alte Pinakothek is an art museum located in the Kunstareal area in Munich, Germany. It is one of the oldest <br/> galleries in the world and houses a significant collection of Old Master paintings.The name Alte Pinakothek refers to <br/> the time period covered by the collection - from the fourteenth to the eighteenth century.</p>");
  $('#mainWindow').append("<ul><li><b>Pinakothek der Moderne</b></li></ul>");
  $('#mainWindow').append("<p>The Pinakothek der Moderne is a modern art museum, situated in central Munich's Kunstareal. Locals sometimes <br/> refer to it as the Dritte Pinakothek after the Old and New. It is one of the world's largest museums for modern <br/> and contemporary art.</p>");
  $('#mainWindow').append("<ul><li><b>Museum Fünf Kontinente</b></li></ul>");
  $('#mainWindow').append("<p>The Museum Five Continents in Munich(Museum Fünf Kontinente in German), Germany is a museum for Non-European <br/> artworks and objects of cultural value. </p>");
  //$('#mainWindow').append("<ul><li><b>Museum Fünf Kontinente</b></li></ul>");
  //$('#mainWindow').append("<p>The Museum Five Continents in Munich(Museum Fünf Kontinente in German), Germany is a museum for Non-European <br/> artworks and objects of cultural value. </p>");

};
