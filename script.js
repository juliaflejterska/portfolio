import "core.js/stable";
import "regenerator-runtime/runtime";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const navDots = document.querySelectorAll(".nav2-item");
const jf = document.querySelector(".h1");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLinks.forEach((navLink) => navLink.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function changeText() {
  jf.style.color = "#fff333";
  jf.innerHTML = "JULIA FLEJTERSKA";
}

function changeTextTimeout() {
  setTimeout(changeText, 700);
}

jf.addEventListener("mouseenter", changeTextTimeout);
