document.getElementById("timestamp").value = new Date().toISOString();

function openModal(level) {
  document.getElementById(level + "-modal").style.display = "block";
}

function closeModal(level) {
  document.getElementById(level + "-modal").style.display = "none";
}
