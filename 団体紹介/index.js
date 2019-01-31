const topBarBurger = document.querySelector(".top-bar__burger");
const topBar = document.querySelector(".top-bar");
const topBarOpenClassName = "top-bar--open";
const noScroll = "no-scroll";
let navVisible = false;
topBarBurger.onclick = () => {
  if (navVisible) {
    document.documentElement.classList.remove(noScroll);
    topBar.classList.remove(topBarOpenClassName);
  } else {
    document.documentElement.classList.add(noScroll);
    topBar.classList.add(topBarOpenClassName);
  }
  navVisible = !navVisible;
}
