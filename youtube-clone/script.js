// Botão menu


// ABrir input responsivo CEL
const magnifyingHidden = document.getElementById("magnifyingHidden");
const formDivHidden = document.getElementById("formDivHidden");
const faArrowLeft = document.getElementById("faArrowLeft");

magnifyingHidden.addEventListener("click", () => {
    formDivHidden.style.display = "flex";
})

faArrowLeft.addEventListener("click", () => {
    formDivHidden.style.display = "none";
})

// Abrir fechar menu principal 
function menuOpen() {
    const sugestionSection = document.getElementById("sugestion-section");
    const mainSection = document.getElementById("main-section");
    const btnMenu = document.getElementById("btnMenu");
    const asideBarHidden = document.getElementById("asideBarHidden");
    const asideBar = document.getElementById("asideBar");

    function toggleMenu() {
        sugestionSection.classList.toggle("left");
        mainSection.classList.toggle("left");
        mainSection.classList.toggle("widthClass")
        asideBarHidden.classList.toggle("hidden");
        asideBar.classList.toggle("hidden");
    }

    function confEvents() {
        const largura = window.innerWidth;

        if (largura > 1300) {
            btnMenu.addEventListener("click", toggleMenu);
        } else {
            btnMenu.removeEventListener("click", toggleMenu);
        }
    }

    confEvents();
    window.addEventListener("resize", confEvents);
}
menuOpen();

// Ativar microfone
function microphoneTurnOn() {
    const faMicrophone = document.getElementById("fa-microphone");
    const microphonePage = document.getElementById("microphone-page");
    const pageFaX = document.getElementById("page-fa-x");

    faMicrophone.addEventListener("click", () => {
        microphonePage.classList.toggle("hidden");
    })

    pageFaX.addEventListener("click", () => {
        microphonePage.classList.toggle("hidden");
    })
}
microphoneTurnOn();

// Abrir seção de login
function doLogin() {
    const loginNav = document.getElementById("login-nav");
    const fazerLogin = document.getElementById("fazer-login");
    const faXLogin = document.getElementById("fa-x-login");

    loginNav.addEventListener("click", () => {
        fazerLogin.classList.toggle("hidden");
    })

    faXLogin.addEventListener("click", () => {
        fazerLogin.classList.toggle("hidden");
    })

    fazerLogin.addEventListener("click", (e) => {
        if(e.target === fazerLogin) {
            fazerLogin.classList.toggle("hidden");
        }
    })

}
doLogin();

// Focus background na seção de sugestão
function focusSugestion() {
    const sugestionSection = document.getElementById("sugestion-section");
    const arraySection = Array.from(sugestionSection.children);

    arraySection.forEach(e => {
        e.addEventListener("click", () => {
            for(let i = 0; i < sugestionSection.children.length; i++) {
                if(sugestionSection.children[i].classList.contains("backWhite")) {
                    sugestionSection.children[i].classList.remove("backWhite");
                }
            }
            e.classList.add("backWhite");
        })
    })
}
focusSugestion();

// Botão para mostrar elementos escondidos na sugestão


// Abrir a opção de "X" no input
const searchBar = document.getElementById("search-bar");
const keybordWord = document.getElementById("keybord-word");
const xWord = document.getElementById("x-word");


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
    keybordWord.classList.remove("marginRight")
    xWord.classList.remove("show");
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

        let videoInicio = parseInt(Math.random()*35);
        let videoFinal = videoInicio + 10;
        
        videos.slice(videoInicio, videoFinal).forEach(video => {
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
                        <p class="video-views">${video.uploadedDate || 'N/A'}</p>
                        <p class="video-views">visualizações • ${video.views || 'Data desconhecida'}</p>
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

// Consumindo uma API do youtube PARA SEÇÃO SHORTS
fetch('https://pipedapi.kavin.rocks/trending?region=BR', {
    method: 'GET',
})
.then(response => response.json())
.then(data => {
    const shortsGrid = document.querySelector('.shorts-grid');

    const limitedData = data.slice(7, 14);

    // Verifique se os dados possuem a estrutura correta
    if (Array.isArray(limitedData)) {
        limitedData.forEach(item => {
            const shortContainer = document.createElement('div');
            shortContainer.classList.add('shorts-container');
            
            const shortDiv = document.createElement('div');
            shortDiv.classList.add('short-div');

            const imgDot = document.createElement("img");
            shortDiv.appendChild(imgDot);
            imgDot.src = "img/grip-vertical-dot.png"

            // Definindo o thumbnail como background da div
            shortDiv.style.backgroundImage = `url(${item.thumbnail})`;
            shortDiv.style.backgroundSize = 'cover';  // Garantir que a imagem cubra toda a div
            shortDiv.style.backgroundPosition = 'center';  // Centralizar a imagem
            shortDiv.style.backgroundSize = '210%';

            const title = document.createElement('h2');
            title.innerText = item.title;
            const views = document.createElement('p');
            views.innerText = `${item.views} views`; // Verifique se o campo de views está correto

            shortContainer.appendChild(shortDiv);
            shortContainer.appendChild(title);
            shortContainer.appendChild(views);

            shortsGrid.appendChild(shortContainer);
        });
    } else {
        console.error('A resposta da API não contém a estrutura esperada.');
    }
})
.catch(err => console.error('Error:', err));


console.log("Script carregado!");







