var original;

function mouseOn(obj){
  getOriginal(obj, "font-size");
  var size = parseFloat(original.substring(0, original.length - 2));
  $(obj).animate({fontSize: (size * 1.4) + "px"}, 200)
};

function mouseOff(obj) {
  $(obj).animate({fontSize: original}, 200)
};

function getOriginal(element, property) {
  original = $(element).css(property);
  console.log(original);
}
