document.addEventListener("DOMContentLoaded", () => {

    const dropdown = document.getElementById("project-filter-dropdown");
    const container = document.getElementById("projects-container");

    // Initially hide projects
    container.innerHTML = "";

    dropdown.addEventListener("change", () => {

        const selected = dropdown.value;

        // if nothing selected → hide again
        if (!selected) {
            container.innerHTML = "";
            return;
        }

        // filter projects
        const filtered = projectsData.filter(
            (p) => p.category === selected
        );

        renderProjects(filtered);
    });

});