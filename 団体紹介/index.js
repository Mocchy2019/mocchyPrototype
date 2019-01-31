const topBarBurger = document.querySelector(".top-bar__burger");
const topBarNav = document.querySelector(".top-bar__nav");
const topBarNavOpenClassName = "top-bar__nav--open";
let navVisible = false;
topBarBurger.onclick = () => {
  if (navVisible) {
    topBarNav.classList.remove(topBarNavOpenClassName);
  } else {
    topBarNav.classList.add(topBarNavOpenClassName);
  }
  navVisible = !navVisible;
}
