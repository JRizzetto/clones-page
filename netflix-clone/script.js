const dropdownContent = document.getElementById("dropdown-content");
const dropdownButton = document.getElementById("dropdown-button");

dropdownButton.addEventListener("click", (event) => {
    dropdownContent.classList.toggle("hidden");
    event.stopPropagation();
})

document.addEventListener("click", (event) => {
    if (!dropdownContent.classList.contains("hidden") && !dropdownButton.contains(event.target)) {
        dropdownContent.classList.add("hidden");
    }
});

// Carrossel das imagens em alta 
function scrollCarrossel(distance) {
    const emaltaDiv = document.getElementById("emalta-div");
    const btnLeft = document.getElementById("scroll-btn-left");

    if (!emaltaDiv) {
        console.error("Elemento com ID 'emalta-div' não encontrado.");
        return;
    }

    // Faz o scroll horizontal suavemente
    emaltaDiv.scrollBy({
        left: distance,
        behavior: "smooth"
    });


    if(emaltaDiv.scrollLeft == 0) {
        btnLeft.classList.add("hidden");
    }else {
        btnLeft.classList.remove("hidden");
    }

    
}

