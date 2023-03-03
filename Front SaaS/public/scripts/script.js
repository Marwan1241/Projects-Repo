const nav = document.getElementById("topNav");
window.onscroll = function () {
  if (window.pageYOffset > 10) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const navButton = document.querySelector("button[aria-expanded]");

function toggleNav({ target }) {
  const expanded = target.getAttribute("aria-expanded") === "true" || false;

  navButton.setAttribute("aria-expanded", !expanded);

  if (expanded == false) {
    nav.classList.add("white");
  } else {
    nav.classList.remove("white");
  }
}

navButton.addEventListener("click", toggleNav);
