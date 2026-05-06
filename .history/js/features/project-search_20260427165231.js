// render all projects initially
document.addEventListener("DOMContentLoaded", function () {
    filterProject(projectsData);
});

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("project-search");

    // show all projects initially
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

            filterProject(filteredProjects);
        });
    }

});