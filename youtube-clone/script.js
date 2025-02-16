const searchBar = document.getElementById("search-bar");
const keybordWord = document.getElementById("keybord-word");
const xWord = document.getElementById("x-word");

// Abrir a opção de "X" no input
searchBar.addEventListener("click", () => {
    searchBar.classList.toggle("active")
})

searchBar.addEventListener("input", () => {
    if (searchBar.value.length > 0) {
        keybordWord.classList.add("marginRight")
        xWord.classList.add("show");
    } else {
        keybordWord.classList.remove("marginRight")
        xWord.classList.remove("show");
    }
});

// Limpar imput e continuar foco dentro
xWord.addEventListener("click", () => {  
    searchBar.value = "";
    searchBar.focus();
})

// Consumindo uma API do youtube 
async function fetchVideos() {
    try {
        const response = await fetch("https://pipedapi.kavin.rocks/trending?region=BR");
        const data = await response.json();

        console.log("Resposta completa da API:", data);

        const videos = data.videos || data.items || data;

        if (!Array.isArray(videos) || videos.length === 0) {
            console.error("Nenhum vídeo encontrado!");
            return;
        }

        const videosContainer = document.querySelector(".grid-section");
        videosContainer.innerHTML = ""; // Limpa antes de adicionar novos vídeos

        videos.slice(0, 15).forEach(video => {
            const videoElement = document.createElement("div");
            videoElement.classList.add("video-container");
            videoElement.innerHTML = `
                <div class="video-screen">
                    <a href="https://www.youtube.com/watch?v=${video.url.split('/').pop()}" target="_blank">
                        <img src="${video.thumbnailUrl || video.thumbnail}" alt="${video.title}">
                    </a>
                </div>
                <div class="info-section">
                    <a href="https://www.youtube.com/channel/${video.uploaderUrl?.split('/').pop()}" class="avatar">
                        <img class="avatar-img" src="${video.uploaderAvatar || 'https://via.placeholder.com/50'}" alt="${video.uploader}">
                    </a>
                    <div class="title-section">
                        <h2 class="video-title">${video.title}</h2>
                        <p class="video-author">${video.uploaderName} <i class="fa-solid fa-check"></i></p>
                        <p class="video-views">${video.uploadedDate || 'N/A'} visualizações • ${video.views || 'Data desconhecida'}</p>
                    </div>
                    <img src="./img/grip-vertical-dot.png" alt="Menu">
                </div>
            `;
            videosContainer.appendChild(videoElement);
        });
    } catch (error) {
        console.error("Erro ao buscar vídeos:", error);
    }
}

fetchVideos();






