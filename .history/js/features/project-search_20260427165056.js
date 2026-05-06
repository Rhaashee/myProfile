const searchInput = document.getElementById("project-search");

// initial render (all projects)
filterProject(projectsData);

if (searchInput) {
    searchInput.addEventListener("input", function () {

        const searchTerm = searchInput.value.toLowerCase();

        const filteredProjects = projectsData.filter(function (project) {
            return (
                project.name.toLowerCase().includes(searchTerm) ||
                project.description.toLowerCase().includes(searchTerm) ||
                (project.technologies &&
                    project.technologies.join(" ").toLowerCase().includes(searchTerm)) ||
                (project.category &&
                    project.category.toLowerCase().includes(searchTerm))
            );
        });

        // re-render filtered list
        filterProject(filteredProjects);
    });
}