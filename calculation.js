function calculate(){

  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  var display = document.getElementById("display");
  var outputText;

  var ans1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
  var ans2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
  outputText = ans1 + " or " + ans2 + ".";

document.getElementById("display").innerHTML = outputText;

}
