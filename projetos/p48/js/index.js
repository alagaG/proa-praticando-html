window.onload = main;
function main() {
    const button = document.querySelector(".searchbar > button");

    console.log("OI");
    if (!button) {
        alert("Botão não encontrado!");
        return;
    }

    button.addEventListener("mousedown", () => {
        button.classList.add("searchbar__action");
    });

    button.addEventListener("mouseup", () => {
        button.classList.remove("searchbar__action");
    });
}
