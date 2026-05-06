const skillsContainer = document.getElementById("skills-container");

function renderSkills() {

    skillsContainer.innerHTML = "";

    skillsData.forEach((skill) => {

        const card = document.createElement("div");

        card.className = `
        skill-card
        bg-white
        border border-purple-100
        rounded-[24px]
        p-6
        shadow-sm
        hover:shadow-xl
        transition-all duration-300
        flex items-start gap-5
        `;

        card.innerHTML = `

            <!-- ICON -->

            <div class="
            w-16 h-16
            rounded-2xl
            bg-purple-100
            flex items-center justify-center
            text-purple-500
            text-2xl
            font-bold
            shrink-0">

                ${skill.shortLabel}

            </div>

            <!-- CONTENT -->

            <div>

                <h3 class="
                text-2xl
                font-bold
                text-slate-900">

                    ${skill.name}

                </h3>

                <p class="
                text-slate-500
                mt-3
                leading-7">

                    ${skill.description}

                </p>

            </div>

        `;

        skillsContainer.appendChild(card);

    });

}

renderSkills();