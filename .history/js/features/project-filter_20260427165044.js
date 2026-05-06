function filterProject(projects) {
    const projectsContainer = document.getElementById("projects-container");

    if (!projectsContainer) {
        console.log("Project container not found");
        return;
    }

    projectsContainer.innerHTML = "";

    projects.forEach(function (project) {

        const card = document.createElement("div");
        card.className = "p-8 text-center bg-white rounded-3xl shadow-lg";

        const iconBox = document.createElement("div");
        iconBox.className = "w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-blue-500 rounded-full";

        const iconText = document.createElement("span");
        iconText.className = "text-2xl text-white font-bold";
        iconText.textContent = project.shortLabel || "P";

        iconBox.appendChild(iconText);

        const projectName = document.createElement("h2");
        projectName.className = "text-xl font-bold mb-2";
        projectName.textContent = project.name;

        const projectDescription = document.createElement("p");
        projectDescription.className = "text-sm";
        projectDescription.textContent = project.description;

        card.appendChild(iconBox);
        card.appendChild(projectName);
        card.appendChild(projectDescription);

        projectsContainer.appendChild(card);
    });
}