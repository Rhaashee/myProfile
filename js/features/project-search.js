// Search
document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("project-search");

    // initial render
    renderProjects(projectsData);
    renderFilters();

    searchInput.addEventListener("input", () => {

        const term = searchInput.value.toLowerCase();

        const filtered = projectsData.filter((p) =>
            p.name.toLowerCase().includes(term) ||
            p.description.toLowerCase().includes(term) ||
            p.technologies.join(" ").toLowerCase().includes(term) ||
            p.category.toLowerCase().includes(term)
        );

        renderProjects(filtered);
    });

});