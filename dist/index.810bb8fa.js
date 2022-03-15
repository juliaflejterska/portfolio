const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const year = document.querySelector(".year");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
navLinks.forEach((navLink)=>navLink.addEventListener("click", closeMenu)
);
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
const now = new Date();
const yearNow = now.getFullYear();
year.innerHTML = yearNow;

//# sourceMappingURL=index.810bb8fa.js.map
