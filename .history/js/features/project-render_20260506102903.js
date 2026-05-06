const projectsContainer =
    document.getElementById("projects-container");

function renderProjects() {

    projectsContainer.innerHTML =
        projectsData.map(project => `

        <div
            class="project-card
            bg-white
            shadow-md
            border border-slate-300
            p-6
            flex flex-col justify-between
            h-[220px]
            hover:shadow-xl
            hover:-translate-y-1
            transition-all duration-300">

            <!-- TOP -->

            <div>

                <!-- TITLE + STATUS -->

                <div
                    class="flex items-start justify-between gap-3">

                    <!-- TITLE -->

                    <h3
                        class="text-xl font-bold text-slate-800 leading-snug max-w-[75%]">

                        ${project.name}

                    </h3>

                    <!-- STATUS -->

                    <span
                        class="px-3 py-1 text-xs font-bold whitespace-nowrap

                        ${project.status === "Live"
                            ? "bg-green-100 text-green-700"

                            : project.status === "Completed"
                            ? "bg-blue-100 text-blue-700"

                            : project.status === "Prototype"
                            ? "bg-purple-100 text-purple-700"

                            : "bg-orange-100 text-orange-700"
                        }">

                        ${project.status}

                    </span>

                </div>

                <!-- CATEGORY -->

                <p
                    class="text-slate-500 text-sm mt-3">

                    ${project.category}

                </p>

                <!-- DESCRIPTION -->

                <p
                    class="text-slate-600 text-sm leading-6 mt-4 line-clamp-3">

                    ${project.description}

                </p>

            </div>

            <!-- BOTTOM -->

            <div>

                <!-- TECH STACK -->

                <div
                    class="flex flex-wrap gap-2 mt-5">

                    ${project.technologies.map(tech => `

                        <span
                            class="bg-slate-100 text-slate-700
                            px-3 py-1 text-xs font-semibold">

                            ${tech}

                        </span>

                    `).join("")}

                </div>

                <!-- BUTTONS -->

                <div
                    class="flex gap-3 mt-5">

                    <!-- LIVE DEMO -->

                    <a href="${project.liveDemo}"
                        target="_blank"
                        class="flex-1 bg-red-400 hover:bg-red-500
                        text-white text-center py-2
                        text-sm font-semibold transition">

                        Live Demo

                    </a>

                    <!-- GITHUB -->

                    <a href="${project.github}"
                        target="_blank"
                        class="flex-1 bg-slate-900 hover:bg-black
                        text-white text-center py-2
                        text-sm font-semibold transition">

                        GitHub

                    </a>

                </div>

            </div>

        </div>

    `).join("");

}

renderProjects();