function renderProjects(projects) {
    const row = document.createElement("div");

row.className = "flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b hover:bg-gray-50 transition";

  if (!container) return;

  container.innerHTML = "";

  projects.forEach((project) => {

    // MAIN ROW
    const row = document.createElement("div");
    row.className =
      "flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b";

    // LEFT SIDE
    const left = document.createElement("div");
    left.className = "flex-1";

    // STATUS
    const status = document.createElement("span");
    status.className = "text-xs font-semibold mr-2";

    if (project.status === "Completed") status.classList.add("text-green-600");
    else if (project.status === "Ongoing") status.classList.add("text-yellow-600");
    else if (project.status === "Prototype") status.classList.add("text-purple-600");
    else status.classList.add("text-blue-600");

    status.textContent = project.status;

    // TITLE
    const title = document.createElement("h2");
    title.className = "text-lg font-bold";
    title.textContent = project.name;

    // CATEGORY
    const category = document.createElement("p");
    category.className = "text-blue-600 text-sm mb-1";
    category.textContent = project.category;

    // DESCRIPTION
    const desc = document.createElement("p");
    desc.className = "text-gray-600 text-sm mb-1";
    desc.textContent = project.description;

    // TECH
    const tech = document.createElement("p");
    tech.className = "text-green-600 text-sm";
    tech.textContent = project.technologies.join(", ");

    left.append(status, title, category, desc, tech);

    // RIGHT SIDE
    const right = document.createElement("div");
    right.className = "mt-3 md:mt-0 flex gap-3";

    // LIVE BUTTON
    const live = document.createElement("a");
    live.href = project.liveDemo || "#";
    live.target = "_blank";
    live.textContent = "Live";
    live.className = "text-blue-600 hover:underline";

    // GITHUB BUTTON
    const github = document.createElement("a");
    github.href = project.github || "#";
    github.target = "_blank";
    github.textContent = "GitHub";
    github.className = "text-blue-600 hover:underline";

    right.append(live, github);

    // FINAL
    row.append(left, right);
    container.appendChild(row);
  });
}