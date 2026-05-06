document.addEventListener("DOMContentLoaded", function () {
    // Render Skills
    renderSkills();
    initModal();
    initContactValidation();
    initThemeToggle();
})
document.addEventListener("DOMContentLoaded", () => {
    renderEducation();
});
document.addEventListener("DOMContentLoaded", () => {
    renderProjects(projectsData);
    renderFilters();
});