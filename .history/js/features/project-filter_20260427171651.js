// RENDER + FILTER UI
function renderProjects(projects) {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";

    projects.forEach((project) => {

        const card = document.createElement("div");
        card.className =
            "bg-white rounded-2xl shadow-md p-6 pb-12 text-center hover:shadow-xl transition";

        const wrapper = document.createElement("div");
        wrapper.className = "relative";

        // Status badge (bottom-right)
        const badge = document.createElement("span");
        badge.className =
            "absolute bottom-4 right-4 text-white text-xs px-3 py-1 rounded-full shadow";

        // status color
        if (project.status === "Completed") badge.classList.add("bg-green-500");
        else if (project.status === "Ongoing") badge.classList.add("bg-yellow-500");
        else if (project.status === "Prototype") badge.classList.add("bg-purple-500");
        else badge.classList.add("bg-red-500");

        badge.textContent = project.status;

        const title = document.createElement("h2");
        title.className =
            "text-lg font-semibold mb-2 leading-snug h-14 overflow-hidden line-clamp-2";
        title.textContent = project.name;

        const category = document.createElement("p");
        category.className = "text-blue-600 font-semibold mb-2";
        category.textContent = project.category;

        const desc = document.createElement("p");
        desc.className = "text-gray-600 text-sm mb-4";
        desc.textContent = project.description;

        const tech = document.createElement("p");
        tech.className = "text-green-600 text-sm mb-4";
        tech.textContent = project.technologies.join(", ");

        const links = document.createElement("div");
        links.className = "flex justify-center gap-4";

        const live = document.createElement("a");
        live.href = project.liveDemo;
        live.textContent = "Live";
        live.className = "text-blue-600 hover:underline";

        const github = document.createElement("a");
        github.href = project.github;
        github.textContent = "GitHub";
        github.className = "text-blue-600 hover:underline";

        links.append(live, github);

        wrapper.append(badge, title, category, desc, tech, links);
        card.appendChild(wrapper);
        container.appendChild(card);
    });
}

// FILTER BUTTONS
function renderFilters() {
    const filterContainer = document.getElementById("project-filters");

    const categories = ["All", ...new Set(projectsData.map(p => p.category))];

    categories.forEach((cat) => {
        const btn = document.createElement("button");
        btn.textContent = cat;
        btn.className =
            "px-4 py-2 border rounded hover:bg-blue-500 hover:text-white";

        btn.addEventListener("click", () => {
            if (cat === "All") renderProjects(projectsData);
            else {
                const filtered = projectsData.filter(p => p.category === cat);
                renderProjects(filtered);
            }
        });

        filterContainer.appendChild(btn);
    });
}