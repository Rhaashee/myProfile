function renderProjects(data) {
  const container = document.getElementById("projects-container");
  container.innerHTML = "";

  data.forEach(p => {
    const row = document.createElement("div");
    row.className = "project-row";

    row.innerHTML = `
      <p class="text-sm text-blue-600">${p.status}</p>
      <h3 class="text-lg font-semibold">${p.name}</h3>
      <p class="text-gray-600">${p.description}</p>
      <p class="text-sm text-gray-500">${p.technologies.join(", ")}</p>

      <div class="mt-2 flex gap-4">
        <a href="${p.github}" class="link">GitHub →</a>
        <a href="${p.liveDemo}" class="link">Live →</a>
      </div>
    `;

    container.appendChild(row);
  });
}