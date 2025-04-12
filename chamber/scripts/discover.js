document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("discover-grid");

  // Fetch JSON data
  fetch("data/items.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("discover-card");

        card.innerHTML = `
                    <h2>${item.name}</h2>
                    <figure>
                        <img src="${item.image}" alt="${item.name}">
                    </figure>
                    <address>${item.address}</address>
                    <p>${item.description}</p>
                    <button>Learn More</button>
                `;

        gridContainer.appendChild(card);
      });
    })
    .catch((error) => console.error("Error loading data:", error));

  // Visitor tracking
  trackVisitor();
});

function trackVisitor() {
  const visitorMessage = document.getElementById("visitor-message");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
    visitorMessage.textContent =
      "Welcome! Let us know if you have any questions.";
  } else {
    const daysSinceLastVisit = Math.floor(
      (now - lastVisit) / (1000 * 60 * 60 * 24)
    );

    if (daysSinceLastVisit < 1) {
      visitorMessage.textContent = "Back so soon! Awesome!";
    } else {
      visitorMessage.textContent = `You last visited ${daysSinceLastVisit} day${
        daysSinceLastVisit > 1 ? "s" : ""
      } ago.`;
    }
  }

  localStorage.setItem("lastVisit", now);
}
