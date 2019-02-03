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
