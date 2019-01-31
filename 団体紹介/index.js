const topBarBurger = document.querySelector(".top-bar__burger");
const topBar = document.querySelector(".top-bar");
const topBarOpenClassName = "top-bar--open";
let navVisible = false;
topBarBurger.onclick = () => {
  if (navVisible) {
    topBar.classList.remove(topBarOpenClassName);
  } else {
    topBar.classList.add(topBarOpenClassName);
  }
  navVisible = !navVisible;
}
