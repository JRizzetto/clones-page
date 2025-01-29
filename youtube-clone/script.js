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





