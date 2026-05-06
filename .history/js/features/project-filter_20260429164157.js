// RENDER + FILTER UI
let currentFilter = "All";

// 🎯 RENDER PROJECTS
function renderProjects(projects) {
  const container = document.getElementById("projects-container");
  container.innerHTML = "";

  projects.forEach((project) => {

    const card = document.createElement("div");
    card.className =
      "bg-white dark:bg-blue-50 text-gray-800 rounded-2xl shadow-md p-6 pb-12 text-center hover:shadow-xl transition";

    const wrapper = document.createElement("div");
    wrapper.className = "relative";

    // STATUS BADGE
    const badge = document.createElement("span");
    badge.className =
      "absolute bottom-4 right-4 text-white text-xs px-3 py-1 rounded-full";

    badge.classList.add("bg-blue-500");
    badge.textContent = project.status;

    const title = document.createElement("h2");
    title.className = "text-lg font-semibold mb-2";
    title.textContent = project.name;

    const category = document.createElement("p");
    category.className = "text-blue-600 font-semibold mb-2";
    category.textContent = project.category;

    const desc = document.createElement("p");
    desc.className = "text-gray-600 text-sm mb-4";
    desc.textContent = project.description;

    wrapper.append(badge, title, category, desc);
    card.appendChild(wrapper);
    container.appendChild(card);
  });
}

// 🎯 RENDER FILTER BUTTONS
function renderFilters() {
  const filterContainer = document.getElementById("project-filters");

  const categories = ["All", "AI", "ML", "Frontend", "Backend"];

  categories.forEach((cat) => {

    const btn = document.createElement("button");

    btn.textContent = cat;
    btn.className =
      "px-4 py-2 rounded border font-medium transition";

    // active style
    if (cat === currentFilter) {
      btn.classList.add("bg-blue-500", "text-white");
    }

    btn.addEventListener("click", () => {
      currentFilter = cat;

      const filtered =
        cat === "All"
          ? projectsData
          : projectsData.filter(p => p.category === cat);

      renderProjects(filtered);

      // re-render buttons to update active state
      filterContainer.innerHTML = "";
      renderFilters();
    });

    filterContainer.appendChild(btn);
  });
}