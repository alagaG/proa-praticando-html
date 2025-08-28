function main() {
    const toggle = document.querySelector(".toggle");

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");

        const icon = toggle.querySelector("i");
        if (icon.classList.contains("bi-unlock-fill")) {
            icon.classList.replace("bi-unlock-fill", "bi-lock-fill");
        } else {
            icon.classList.replace("bi-lock-fill", "bi-unlock-fill");
        }
    });
}
window.onload = main;
