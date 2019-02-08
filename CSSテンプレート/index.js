const container = document.querySelector(".open-visual");
const shown = "open-visual__image--shown";
let i = 0;
setInterval(() => {
  container.children[i].classList.remove(shown);
  i++;
  if (i === container.children.length) {
    i = 0;
  }
  container.children[i].classList.add(shown);
}, 3000);
