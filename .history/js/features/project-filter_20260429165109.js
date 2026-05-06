function renderProjects(projects) {
  const container = document.getElementById("projects-container");

  if (!container) return;

  container.innerHTML = "";

  projects.forEach((project) => {

    // MAIN CARD
    const card = document.createElement("div");
    card.className =
      "flex flex-col md:flex-row justify-between items-start md:items-center bg-white dark:bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition";

    // LEFT SECTION
    const left = document.createElement("div");
    left.className = "flex-1";

    // STATUS BADGE
    const status = document.createElement("span");
    status.className =
      "inline-block text-xs px-3 py-1 rounded-full mb-2";

    if (project.status === "Completed") status.classList.add("bg-green-500", "text-white");
    else if (project.status === "Ongoing") status.classList.add("bg-yellow-500", "text-white");
    else if (project.status === "Prototype") status.classList.add("bg-purple-500", "text-white");
    else status.classList.add("bg-blue-500", "text-white");

    status.textContent = project.status;

    // TITLE
    const title = document.createElement("h2");
    title.className = "text-xl font-bold mb-1";
    title.textContent = project.name;

    // CATEGORY
    const category = document.createElement("p");
    category.className = "text-blue-600 font-semibold mb-2";
    category.textContent = project.category;

    // DESCRIPTION
    const desc = document.createElement("p");
    desc.className = "text-gray-600 mb-2";
    desc.textContent = project.description;

    // TECH
    const tech = document.createElement("p");
    tech.className = "text-green-600 text-sm";
    tech.textContent = project.technologies.join(", ");

    left.append(status, title, category, desc, tech);

    // RIGHT SECTION
    const right = document.createElement("div");
    right.className = "mt-4 md:mt-0";

    const githubBtn = document.createElement("a");
    githubBtn.href = project.github || "#";
    githubBtn.target = "_blank";
    githubBtn.textContent = "View Code";

    githubBtn.className =
      "bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition";

    right.appendChild(githubBtn);

    // FINAL
    card.append(left, right);
    container.appendChild(card);
  });
}