var inputx = document.getElementById("x");
      var inputy = document.getElementById("y");
      var inputn = document.getElementById("ne")
      inputx.addEventListener("keyup", function(event) {
  if(event.keyCode===13){
    document.getElementById("y").focus();
  }
});
inputy.addEventListener("keyup", function(event){
  if(event.keyCode===13){
    document.getElementById("ne").focus();
  }
});
  
inputn.addEventListener("keyup", function(event){
  if(event.keyCode===13){
  var res;
  var vrijednostx=inputx.value;
  var vrijednosty=inputy.value;
  var vrijednostn=inputn.value;

  function stamitreba(a, b, n) {
  a = a % n;
  var result = 1;
  var x = a;

  while(b > 0){
    var leastSignificantBit = b % 2;
    b = Math.floor(b / 2);

    if (leastSignificantBit == 1) {
      result = result * x;
      result = result % n;
    }

    x = x * x;
    x = x % n;
  }
  return result;
};

var assert = function(actual, expected){
  if (actual != expected){
    throw new Error('Assertion failed');
  }
};
var k=stamitreba(vrijednostx,vrijednosty,vrijednostn);
document.getElementById("ispis?").innerHTML+=k;
  }
});