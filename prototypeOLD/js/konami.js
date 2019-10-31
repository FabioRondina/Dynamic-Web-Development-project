// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});


function activateCheats() {
  document.body.style.backgroundImage = "url('images/cheatBackground.png')";

  var audio = new Audio('js/kon.mp3');
  audio.play();

  alert("cheats activated, click to see the it");
  var i =0;
  $("body").click(function() {
  var img = ['kon/kon.jpg','kon/kon1.jpg','kon/kon2.jpg','kon/kon3.png','kon/kon4.jpg','kon/kon5.png'];
  // var i =0;
  console.log(img[i]);
  if ( i < img.length-1){
    i++;
  }else{
    i=0;
  }

  $('h1').append(" <img  src='" + img[i] +"' />");

 });

}// end of cheats
