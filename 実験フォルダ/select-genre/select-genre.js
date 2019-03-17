var sgUnit = document.getElementsByClassName("select-genre__unit");
var i = []; //ここが問題、、、
sgUnit[i].onclick = changeColor;

function changeColor() {
  if (
    sgUnit[i].style.backgroundColor == "orangered" ||
    sgUnit[i].style.color == "black"
  ) {
    sgUnit[i].style.backgroundColor = "red";
    sgUnit[i].style.color = "white";
  } else {
    sgUnit[i].style.backgroundColor = "orangered";
    sgUnit[i].style.color = "black";
  }
}
