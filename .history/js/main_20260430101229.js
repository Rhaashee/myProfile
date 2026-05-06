document.addEventListener("DOMContentLoaded", () => {

  // ✅ INITIAL RENDER
  renderSkills();
  renderEducation();
  renderProjects(projectsData);

  // ✅ INIT FEATURES
  initModal();
  initContactValidation();
  initThemeToggle();

  // ✅ VIEW WORK TOGGLE
  const btn = document.getElementById("view-work-btn");
  const workSection = document.getElementById("work-section");

  if (btn && workSection) {

    let isVisible = false;

    btn.addEventListener("click", (e) => {
      e.preventDefault();

      isVisible = !isVisible;

      if (isVisible) {
        workSection.classList.remove("hidden");
        btn.textContent = "Hide Work";

        workSection.scrollIntoView({ behavior: "smooth" });

      } else {
        workSection.classList.add("hidden");
        btn.textContent = "View Work";

        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });

  }

});