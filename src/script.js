const menu = document.querySelector("#menu-down");
const menuItems = document.querySelectorAll(".menu-item");
const hamburger = document.querySelector("#burger");
const cross = document.querySelector("#cross");
const lines = document.querySelector("#lines-menu");

function toggle() {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    menu.style.display = "none";
    cross.style.display = "none";
    lines.style.display = "block";
  } else {
    menu.classList.add("show-menu");
    menu.style.display = "block";
    cross.style.display = "block";
    lines.style.display = "none";
  }
}

hamburger.addEventListener("click", toggle);

window.addEventListener("resize", () => {
  menu.style.display = "none";
  cross.style.display = "none";
  lines.style.display = "block";
});
