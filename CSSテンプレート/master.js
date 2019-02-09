const topBarBurger = document.querySelector(".header__burger");
const topBar = document.querySelector(".header");
const topBarOpen = "header--open";
const noScroll = "no-scroll";
let topBarVisible = false;
topBarBurger.onclick = () => {
  if (topBarVisible) {
    document.documentElement.classList.remove(noScroll);
    topBar.classList.remove(topBarOpen);
  } else {
    document.documentElement.classList.add(noScroll);
    topBar.classList.add(topBarOpen);
  }
  topBarVisible = !topBarVisible;
};
