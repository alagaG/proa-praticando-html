window.onload = main;
function main() {
    const pagination = {
        startButton: document.querySelector("#pagination__start"),
        prevButton: document.querySelector("#pagination__prev"),
        nextButton: document.querySelector("#pagination__next"),
        endButton: document.querySelector("#pagination__end"),
        links: document.querySelectorAll(".pagination__link"),
    };

    let currentPage = 0;
    pagination.startButton.addEventListener("click", () => {
        changePage(0);
    });

    pagination.endButton.addEventListener("click", () => {
        changePage(pagination.links.length - 1);
    });

    pagination.prevButton.addEventListener("click", () => {
        if (currentPage > 0) changePage(currentPage - 1);
    });

    pagination.nextButton.addEventListener("click", () => {
        if (currentPage < pagination.links.length - 1)
            changePage(currentPage + 1);
    });

    pagination.links.forEach((link, index) => {
        link.addEventListener("click", () => {
            changePage(index);
        });
    });

    function changePage(page) {
        currentPage = page;
        document
            .querySelector(".pagination__link--active")
            .classList.remove("pagination__link--active");

        pagination.links[page].classList.add("pagination__link--active");

        pagination.startButton.disabled = page === 0;
        pagination.prevButton.disabled = page === 0;

        pagination.endButton.disabled = page === pagination.links.length - 1;
        pagination.nextButton.disabled = page === pagination.links.length - 1;
    }

    changePage(0);
}
