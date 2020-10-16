var a = false;

function btnClicked() {
  var btn1 = document.getElementById("msg");
  btn1.innerHTML = a ? "Click Me" : "Click";
  a = !a;
}
