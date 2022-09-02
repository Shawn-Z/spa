
//hamburger nav bar
var hamburger = document.querySelector(".hamburger");
var hamburgerContainer = document.querySelector(".hamburgerMenuContainer");
var menu = document.querySelector(".navlinks");

// var menuStyle = window.getComputedStyle(menu);

hamburgerContainer.addEventListener("click", toggleOpen);

function toggleOpen() {
  hamburger.classList.toggle("animate");
  if (menu.classList.contains("hide")) {
    menu.style.opacity = ".95";
    menu.style.width = "100%"
    menu.style.left = "0%";
    document.querySelector("body").style.overflow = "hidden"
  } else {
    menu.style.opacity = "0";
    menu.style.width = "0%"
    menu.style.left = "110%";
    document.querySelector("body").style.overflow = "auto"
  }
  menu.classList.toggle("hide");
}