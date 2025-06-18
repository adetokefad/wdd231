// scripts/collection.js
const grid = document.getElementById("collection-container");

// Modal setup
let modal;
function openModal(perfume) {
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <img src="${perfume.image}" alt="${perfume.name}" />
      <h3>${perfume.name}</h3>
      <p><strong>Type:</strong> ${perfume.type}</p>
      <p><strong>Price:</strong> ${perfume.price}</p>
      <p>${perfume.description}</p>
    </div>
  `;
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

document.addEventListener('DOMContentLoaded', () => {
  const gridBtn = document.getElementById("grid-btn");
  const listBtn = document.getElementById("list-btn");
  const collectionContainer = document.getElementById("collection-container");

  gridBtn.addEventListener('click', () => {
    collectionContainer.className = 'grid';
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
  });

  listBtn.addEventListener('click', () => {
    collectionContainer.className = 'list';
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
  });
});

// View toggle functionality
    document.addEventListener('DOMContentLoaded',() =>{
        gridBtn.addEventListener('click', () => {
            collectionContainer.className = 'grid';
            gridBtn.classList.add('active');
            listBtn.classList.remove('active');
        });
        listBtn.addEventListener('click', () => {
            collectionContainer.className = 'list';
            listBtn.classList.add('active');
            gridBtn.classList.remove('active');
        });
    });

// Fetch perfume data
async function loadPerfumes() {
  try {
    const response = await fetch("./data/perfumes.json");
    if (!response.ok) throw new Error("Failed to fetch perfumes");
    const perfumes = await response.json();

    perfumes.forEach((perfume) => {
      const card = document.createElement("div");
      card.classList.add("perfume-card");
      card.innerHTML = `
        <img src="${perfume.image}" alt="${perfume.name}" loading="lazy" />
        <h3>${perfume.name}</h3>
        <p>${perfume.price}</p>
        <button data-id="${perfume.id}">View Details</button>
      `;
      grid.appendChild(card);

      // Button click opens modal
      card
        .querySelector("button")
        .addEventListener("click", () => openModal(perfume));
    });
  } catch (err) {
    console.error("Error loading perfumes:", err);
    grid.innerHTML =
      '<p class="error">Failed to load collection. Please try again later.</p>';
  }
}

// Modal setup
document.addEventListener("DOMContentLoaded", () => {
  modal = document.createElement("div");
  modal.classList.add("modal");
  document.body.appendChild(modal);

  modal.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("close-btn") ||
      e.target.classList.contains("modal")
    ) {
      closeModal();
    }
  });

  loadPerfumes();
});

function openModal(perfume) {
  const modal = document.querySelector("#modal");
  modal.querySelector("h2").textContent = perfume.name;
  modal.querySelector("p").textContent = perfume.description;
  modal.querySelector("img").src = perfume.image;
  modal.classList.add("show");
}

document.querySelector("#modal .close").addEventListener("click", () => {
  document.querySelector("#modal").classList.remove("show");
});

