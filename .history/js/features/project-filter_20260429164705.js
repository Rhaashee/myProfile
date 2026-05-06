function renderProjects(projects) {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";

    projects.forEach((project) => {

        const card = document.createElement("div");
        card.className =
            "bg-white dark:bg-blue-50 p-6 rounded-xl shadow-md text-center";

        const title = document.createElement("h2");
        title.className = "text-lg font-bold mb-2";
        title.textContent = project.name;

        const category = document.createElement("p");
        category.className = "text-blue-600 mb-2";
        category.textContent = project.category;

        const desc = document.createElement("p");
        desc.className = "text-gray-600 text-sm";
        desc.textContent = project.description;

        card.append(title, category, desc);
        container.appendChild(card);
    });
}