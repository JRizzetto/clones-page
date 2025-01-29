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