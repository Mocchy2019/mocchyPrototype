const topBarBurger = document.querySelector(".top-bar__burger");
const topBar = document.querySelector(".top-bar");
const topBarOpen = "top-bar--open";
const noScroll = "no-scroll";
let topBarVisible = false;
topBarBurger.onclick = () => {
  if (topBarVisible) {
    document.body.classList.remove(noScroll);
    topBar.classList.remove(topBarOpen);
  } else {
    document.body.classList.add(noScroll);
    topBar.classList.add(topBarOpen);
  }
  topBarVisible = !topBarVisible;
};
