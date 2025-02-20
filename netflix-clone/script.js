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

// Seção de perguntas frequentes
const detailsElements = document.querySelectorAll(".perguntas-frequentes details");

detailsElements.forEach(details => {
    details.addEventListener("click", () => {
        detailsElements.forEach(item => {
            if(item !== details) {
                item.removeAttribute('open');
            }
        })
    })
})

// API para consumir 
const API_URL = "https://pipedapi.kavin.rocks";
const CHANNEL_ID = "UC_x5XG1OV2P6uZZ5FSM9Ttw"; 

async function fetchVideos() {
    try {
        const response = await fetch(`${API_URL}/channel/${CHANNEL_ID}`);
        const data = await response.json();

        if(!data.videos) {
            console.log("Nenhum vídeo encontrado");
            return;
        }

        displayVideos(data.videos);
    }catch (error) {
        console.log("Erro ao buscar:", error);
    }
}

function displayVideos(videos) {
    
}