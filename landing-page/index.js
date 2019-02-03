const topBarBurger = document.querySelector(".top-bar__burger");
const topBar = document.querySelector(".top-bar");
const topBarAs = document.querySelectorAll(".top-bar a");
const topBarOpen = "top-bar--open";
const noScroll = "no-scroll";
let topBarVisible = false;
const toggle = () => {
  if (topBarVisible) {
    document.documentElement.classList.remove(noScroll);
    topBar.classList.remove(topBarOpen);
  } else {
    document.documentElement.classList.add(noScroll);
    topBar.classList.add(topBarOpen);
  }
  topBarVisible = !topBarVisible;
};
topBarBurger.onclick = toggle;
for (const x of Array.from(topBarAs)) {
  x.onclick = toggle;
}


window.addEventListener("DOMContentLoaded", function(e) {

  var openVisual = document.getElementsByClassName("open-visual");
  var fadeComplete = function(e) { openVisual.appendChild(arr[0]); };
  var arr = openVisual.getElementsByTagName("img");
  for(var i=0; i < arr.length; i++) {
    arr[i].addEventListener("animationend", fadeComplete, false);
  }

}, false);