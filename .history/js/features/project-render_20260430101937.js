function renderProjects(projects) {
  const container = document.getElementById("projects-container");
  container.innerHTML = "";

  projects.forEach((p) => {

    const row = document.createElement("div");
    row.className = "project-row";

    row.innerHTML = `
      <p class="text-sm text-blue-600 mb-1">${p.status}</p>

      <h2 class="text-xl font-semibold mb-2">${p.name}</h2>

      <p class="text-gray-600 mb-2">${p.description}</p>

      <p class="text-sm text-gray-500">${p.technologies.join(", ")}</p>

      <div class="mt-3 flex gap-4">
        <a href="${p.github}" target="_blank" class="link">GitHub →</a>
        <a href="${p.liveDemo}" target="_blank" class="link">Live →</a>
      </div>
    `;

    container.appendChild(row);
  });
}