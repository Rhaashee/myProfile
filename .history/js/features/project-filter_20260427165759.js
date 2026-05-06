function filterProject(projects) {
    const container = document.getElementById("projects-container");

    if (!container) return;

    container.innerHTML = "";

    projects.forEach((project) => {

        const card = document.createElement("div");
        card.className =
            "bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300";

        // Status badge (Live / Demo)
        const badge = document.createElement("span");
        badge.className =
            "absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full";
        badge.textContent = project.status || "Live";

        // Wrapper (for badge positioning)
        const wrapper = document.createElement("div");
        wrapper.className = "relative";

        // 📌 Project Name
        const title = document.createElement("h2");
        title.className = "text-xl font-bold mb-2";
        title.textContent = project.name;

        // 🏷 Category (MERN / Frontend)
        const category = document.createElement("p");
        category.className = "text-blue-600 font-semibold mb-2";
        category.textContent = project.category;

        // 📄 Description
        const desc = document.createElement("p");
        desc.className = "text-gray-600 text-sm mb-4";
        desc.textContent = project.description;

        // ⚙️ Tech stack
        const tech = document.createElement("p");
        tech.className = "text-green-600 text-sm mb-4";
        tech.textContent = project.technologies.join(", ");

        // 🔗 Links container
        const links = document.createElement("div");
        links.className = "flex justify-center gap-4";

        const liveLink = document.createElement("a");
        liveLink.href = project.liveDemo || "#";
        liveLink.textContent = "Live";
        liveLink.className = "text-blue-600 hover:underline";

        const githubLink = document.createElement("a");
        githubLink.href = project.github || "#";
        githubLink.textContent = "GitHub";
        githubLink.className = "text-blue-600 hover:underline";

        links.appendChild(liveLink);
        links.appendChild(githubLink);

        // append all
        wrapper.appendChild(badge);
        wrapper.appendChild(title);
        wrapper.appendChild(category);
        wrapper.appendChild(desc);
        wrapper.appendChild(tech);
        wrapper.appendChild(links);

        card.appendChild(wrapper);
        container.appendChild(card);
    });
}