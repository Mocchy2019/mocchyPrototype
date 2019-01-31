const topBarBurger = document.querySelector(".top-bar__burger");
const topBar = document.querySelector(".top-bar");
const topBarOpen = "top-bar--open";
const noScroll = "no-scroll";
let navVisible = false;
topBarBurger.onclick = () => {
  if (navVisible) {
    document.documentElement.classList.remove(noScroll);
    topBar.classList.remove(topBarOpen);
  } else {
    document.documentElement.classList.add(noScroll);
    topBar.classList.add(topBarOpen);
  }
  navVisible = !navVisible;
}
