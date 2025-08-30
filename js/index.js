window.onload = main;
function main() {
    const subtitle = document.querySelector("h2");
    const projects = Array.from(document.querySelectorAll("#projects li"));

    const projectsCount = projects.length;
    const projectsDone = projects.filter((project) =>
        project.hasChildNodes()
    ).length;

    subtitle.textContent = `${projectsDone}/${projectsCount} Projetos`;
}
