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

const container = document.querySelector(".open-visual");
const shown = "open-visual__image--shown";
let i = 0;
setInterval(() => {
  container.children[i].classList.remove(shown);
  i++;
  if (i == container.children.length) {
    i = 0;
  }
  container.children[i].classList.add(shown);
}, 3000);
container.children[0].classList.add(shown);
