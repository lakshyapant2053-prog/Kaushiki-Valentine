function moveNo() {
  const noBtn = document.getElementById("noBtn");
  noBtn.style.left = Math.random() * 180 + "px";
  noBtn.style.top = Math.random() * 80 + "px";
}

function yesClicked() {
  window.location.href = "memories.html";
}

function goToLetter() {
  window.location.href = "letter.html";
}
