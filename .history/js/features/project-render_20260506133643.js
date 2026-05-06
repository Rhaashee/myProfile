const projectsContainer =
    document.getElementById("projects-container");

function renderProjects() {

    projectsContainer.innerHTML =
        projectsData.map(project => `

        <!-- PROJECT CARD -->

        <div
            class="
            project-card
            bg-white/80
            backdrop-blur-xl
            shadow-lg
            border border-purple-100
            rounded-3xl
            overflow-hidden
            hover:-translate-y-1
            hover:shadow-purple-200
            transition-all duration-300">

            <!-- HEADER -->

            <div
                class="
                project-header
                flex items-center justify-between
                p-6
                cursor-pointer">

                <!-- PROJECT NAME -->

                <h3
                    class="
                    text-2xl
                    font-bold
                    text-[#21135f]
                    max-w-[75%]
                    leading-snug">

                    ${project.name}

                </h3>

                <!-- STATUS -->

                <span
                    class="
                    bg-white
                    text-purple-600
                    px-5 py-2
                    rounded-sm
                    text-xs
                    font-bold
                    tracking-wide
                    whitespace-nowrap
                    border border-purple-200
                    shadow-[0_0_15px_rgba(255,255,255,0.9)]">

                    ${project.status}

                </span>

            </div>

            <!-- HIDDEN CONTENT -->

            <div
                class="
                project-content
                hidden
                border-t border-purple-100
                px-6 py-5">

                <!-- CATEGORY -->

                <p
                    class="
                    text-purple-500
                    text-sm
                    font-semibold
                    tracking-wide">

                    ${project.category}

                </p>

                <!-- DESCRIPTION -->

                <p
                    class="
                    text-slate-600
                    text-sm
                    leading-7
                    mt-4">

                    ${project.description}

                </p>

                <!-- TECH STACK -->

                <div
                    class="
                    flex flex-wrap
                    gap-3
                    mt-6">

                    ${project.technologies.map(tech => `

                        <span
                            class="
                            bg-purple-100
                            text-purple-700
                            px-4 py-2
                            rounded-lg
                            text-xs
                            font-semibold">

                            ${tech}

                        </span>

                    `).join("")}

                </div>

            </div>

        </div>

    `).join("");

    setupAccordion();
}

renderProjects();

function setupAccordion() {

    const projectHeaders =
        document.querySelectorAll(".project-header");

    projectHeaders.forEach(header => {

        header.addEventListener("click", () => {

            const content =
                header.nextElementSibling;

            content.classList.toggle("hidden");

        });

    });

}