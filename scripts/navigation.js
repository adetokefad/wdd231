// function filterItems(category) {
//   const items = document.querySelectorAll(".item");

//   items.forEach((item) => {
//     if (category === "all" || item.getAttribute("data-category") === category) {
//          item.classList.remove("hidden");
//     } else {
//       item.classList.add("hidden");
//     }
//   });
// }

let bar = document.querySelector(".bars");
let xmark = document.querySelector(".xmark");
let mobileView = document.querySelector(".mobile-view");
mobileView.style.display = "none";
let desktop = document.querySelector(".desktop");

bar.addEventListener("click", function () {
  mobileView.style.display = "block";
  desktop.style.display = "none";
  console.log("working");
});

xmark.addEventListener("click", function () {
  mobileView.style.display = "none";
  desktop.style.display = "flex";
});