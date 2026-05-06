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
});
document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("view-work-btn");
  const workSection = document.getElementById("work-section");

  let isVisible = false;

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    isVisible = !isVisible;

    if (isVisible) {
      workSection.classList.remove("hidden");
      btn.textContent = "Hide Work";

      // scroll to section
      workSection.scrollIntoView({ behavior: "smooth" });

    } else {
      workSection.classList.add("hidden");
      btn.textContent = "View Work";

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

});