
document.addEventListener("DOMContentLoaded", () => {
// Curtida
const heartIcon = document.querySelector(".heart-icon");
  if (heartIcon) {
    heartIcon.addEventListener("click", () => {
      heartIcon.classList.toggle("fa-solid");
      heartIcon.classList.toggle("fa-regular");
      heartIcon.classList.toggle("solid");

      heartIcon.classList.add("pulse");
      setTimeout(() => {
        heartIcon.classList.remove("pulse");
      }, 300);
    });
  } else {
    console.error("Elemento heart não encontrado!");
  }

// Carregamento barra dos stories
  console.log("Página carregada!");
  const progress = document.querySelector(".progress"); // Corrigido
  setTimeout(() => {
    progress.style.width = "100%"; // Agora está certo
  }, 100);
});

//Pausar stories 
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
function togglePlayPause() {
  playButton.classList.toggle("hidden-i");
  pauseButton.classList.toggle("hidden-i");
}
playButton.addEventListener("click", togglePlayPause);
pauseButton.addEventListener("click", togglePlayPause);

