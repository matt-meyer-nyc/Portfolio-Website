window.onload = function () {
console.log("giddyup");

var text = $('#myname').text();

var length = text.length;
var timeOut;
var character = 0;

  (function typeWriter() {
      timeOut = setTimeout(function() {
          character++;
          var type = text.substring(0, character);
          $('#myname').text(type);
          typeWriter();

          if (character == length) {
              clearTimeout(timeOut);
          }
      }, 300);
  }());

}; //end window.onload
