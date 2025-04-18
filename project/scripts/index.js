const navToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

document.addEventListener('DOMContentLoaded', function () {
     // Menu toggle
     navToggle.addEventListener("click", () => {
          navLinks.classList.toggle("open");
     });
});