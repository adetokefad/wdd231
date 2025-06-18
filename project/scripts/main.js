// const navToggle = document.getElementById("menu-toggle");
// const navLinks = document.getElementById("nav-links");
// const modal = document.getElementById("modal");
// const closeModal = document.querySelector(".close");
// const newsletterForm = document.getElementById("newsletter-form");

// document.addEventListener('DOMContentLoaded', function () {
//      // Menu toggle
//      navToggle.addEventListener("click", () => {
//           navLinks.classList.toggle("open");
//      });
     
//      // Newsletter form submission
//      newsletterForm.addEventListener("submit", (e) => {
//           e.preventDefault();
//           localStorage.setItem("subscribed", "true");
//           modal.style.display = "flex";
//      });
     
//      // Close modal
//      closeModal.addEventListener("click", () => {
//           modal.style.display = "none";
//      });
     
//      window.addEventListener("click", (e) => {
//           if (e.target === modal) {
//                modal.style.display = "none";
//           }
//      });
// });
     
document.addEventListener('DOMContentLoaded', function () {
     const navToggle = document.getElementById("menu-toggle");
     const navLinks = document.getElementById("nav-links");
     const modal = document.getElementById("modal");
     const closeModal = document.querySelector(".close");
     const newsletterForm = document.getElementById("newsletter-form");

     if (navToggle && navLinks) {
          navToggle.addEventListener("click", () => {
               navLinks.classList.toggle("open");
          });
     }

     if (newsletterForm && modal) {
          newsletterForm.addEventListener("submit", (e) => {
               e.preventDefault();
               localStorage.setItem("subscribed", "true");
               modal.style.display = "flex";
          });
     }

     if (closeModal && modal) {
          closeModal.addEventListener("click", () => {
               modal.style.display = "none";
          });
     }

     window.addEventListener("click", (e) => {
          if (e.target === modal) {
               modal.style.display = "none";
          }
     });
});
