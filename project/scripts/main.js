const navToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");
const newsletterForm = document.getElementById("newsletter-form");
const productList = document.getElementById("product-list");

document.addEventListener('DOMContentLoaded', function () {
     // Menu toggle
     navToggle.addEventListener("click", () => {
          navLinks.classList.toggle("open");
     });
     
     // Newsletter form submission
     newsletterForm.addEventListener("submit", (e) => {
          e.preventDefault();
          localStorage.setItem("subscribed", "true");
          modal.style.display = "flex";
     });
     
     // Close modal
     closeModal.addEventListener("click", () => {
          modal.style.display = "none";
     });
     
     window.addEventListener("click", (e) => {
          if (e.target === modal) {
               modal.style.display = "none";
          }
     });
});
     
// Sample product data (you can replace with fetch to external JSON/API)
const products = [
  {
    name: "Amber Bloom",
    scent: "Warm, Floral",
    price: "$49.99",
    image: "images/amber.jpg",
  },
  {
    name: "Citrus Noir",
    scent: "Zesty, Fresh",
    price: "$59.99",
    image: "images/citrus.jpg",
  },
  {
    name: "Musk Whisper",
    scent: "Soft, Musky",
    price: "$39.99",
    image: "images/musk.jpg",
  },
];

// Render products
function renderProducts() {
  productList.innerHTML = "";
  products.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src=\"${p.image}\" alt=\"${p.name}\" loading=\"lazy\" />
      <h3>${p.name}</h3>
      <p>${p.scent}</p>
      <p>${p.price}</p>
    `;
    productList.appendChild(card);
  });
}

renderProducts();
