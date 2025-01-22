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
const API_KEY = "AIzaSyC04KXRFksNB_45vOla0Ql6vW4WCgZeUAA";  // Substitua com sua chave de API do YouTube
const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=JavaScript&key=${API_KEY}`;

document.addEventListener('DOMContentLoaded', function() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const videoScreen = document.querySelector('.video-screen');

            // Para cada vídeo retornado pela API
            data.items.forEach(item => {
                // Criando o elemento de vídeo (iframe)
                const videoEmbed = document.createElement('iframe');
                videoEmbed.src = `https://www.youtube.com/embed/${item.id.videoId}`;
                videoEmbed.width = "560"; // Tamanho do vídeo
                videoEmbed.height = "315"; // Tamanho do vídeo
                videoEmbed.frameBorder = "0";
                videoEmbed.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
                videoEmbed.allowFullscreen = true;

                // Adicionando o vídeo à div "video-screen"
                videoScreen.appendChild(videoEmbed);
            });
        })
        .catch(error => console.error('Erro ao buscar vídeos:', error));
});





