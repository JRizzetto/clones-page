// Curtida
document.addEventListener("DOMContentLoaded", () => {

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
});


// Botão de salvar 
const faBookmark = document.getElementById("fa-bookmark");

faBookmark.addEventListener("click", () => {
  faBookmark.classList.toggle("fa-regular");
  faBookmark.classList.toggle("fa-solid");
});

