const heartIcon = document.getElementById("heart");

heartIcon.addEventListener("click", () => {
  // Alternar entre os estilos de coração
  heartIcon.classList.toggle("fa-solid");
  heartIcon.classList.toggle("fa-regular");
  heartIcon.classList.toggle("solid");

  // Adiciona a classe de animação e a remove após 300ms (tempo da animação)
  heartIcon.classList.add("pulse");
  setTimeout(() => {
    heartIcon.classList.remove("pulse");
  }, 300);
});