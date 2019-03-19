var seeMore = document.getElementsByClassName("see-more");
var detailDesc = document.getElementsByClassName("detail__desc");
var i = 0;

seeMore[i].onclick = myFunction;

function myFunction() {
  if (detailDesc[i].style.height === "60px") {
    detailDesc[i].style.height = "max-content";
    seeMore[i].innerHTML = "一部表示";
  } else {
    detailDesc[i].style.height = "60px";
    seeMore[i].innerHTML = "全て表示";
  }
}
