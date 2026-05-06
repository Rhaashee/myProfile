const projectsContainer =
    document.getElementById("projects-container");

function renderProjects(projects) {

    projectsContainer.innerHTML = projects.map(project => `

        <div class="project-card bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200">

            <!-- TOP BAR -->

            <div
                class="flex items-center justify-between p-6 cursor-pointer project-header">

                <div>

                    <h3 class="text-2xl font-bold text-slate-800">

                        ${project.name}

                    </h3>

                    <p class="text-slate-500 mt-1">

                        ${project.category}

                    </p>

                </div>

                <!-- STATUS -->

                <span
                    class="px-4 py-2 rounded-full text-sm font-semibold

                    ${project.status === "Live"
                        ? "bg-green-100 text-green-700"
                        : project.status === "Completed"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-orange-100 text-orange-700"
                    }">

                    ${project.status}

                </span>

            </div>

            <!-- HIDDEN CONTENT -->

            <div
                class="project-content hidden px-6 pb-6 border-t">

                <!-- Description -->

                <p class="text-slate-600 leading-8 mt-6">

                    ${project.description}

                </p>

                <!-- Technologies -->

                <div class="flex flex-wrap gap-3 mt-6">

                    ${project.technologies.map(tech => `

                        <span
                            class="bg-slate-100 px-4 py-2 rounded-full text-sm font-semibold">

                            ${tech}

                        </span>

                    `).join("")}

                </div>

                <!-- Buttons -->

                <div class="flex gap-4 mt-8">

                    <a href="${project.liveDemo}"
                        target="_blank"
                        class="bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-xl font-semibold transition">

                        Live Demo

                    </a>

                    <a href="${project.github}"
                        target="_blank"
                        class="bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-xl font-semibold transition">

                        GitHub

                    </a>

                </div>

            </div>

        </div>

    `).join("");

    setupAccordion();
}

renderProjects(projectsData);

function setupAccordion() {

    const projectHeaders =
        document.querySelectorAll(".project-header");

    projectHeaders.forEach(header => {

        header.addEventListener("click", () => {

            const content =
                header.parentElement.querySelector(".project-content");

            content.classList.toggle("hidden");

        });

    });

}