const skillsContainer = document.getElementById("skills-container");

function getSkillIcon(skillName){

    switch(skillName){

        case "MongoDB":
            return `<i class="fa-solid fa-database"></i>`;

        case "ExpressJS":
            return `<i class="fa-solid fa-server"></i>`;

        case "ReactJS":
            return `<i class="fa-brands fa-react"></i>`;

        case "NodeJS":
            return `<i class="fa-brands fa-node-js"></i>`;

        case "Power BI":
            return `<i class="fa-solid fa-chart-column"></i>`;

        case "Tableau":
            return `<i class="fa-solid fa-chart-pie"></i>`;

        default:
            return `<i class="fa-solid fa-code"></i>`;
    }

}

function renderSkills(){

    skillsContainer.innerHTML = "";

    skillsData.forEach((skill) => {

        const card = document.createElement("div");

        card.className = `
        skill-card
        bg-white
        border border-purple-100
        rounded-[26px]
        p-7
        shadow-sm
        hover:shadow-xl
        transition-all duration-300
        flex items-start gap-6
        `;

        card.innerHTML = `

            <!-- ICON -->

            <div class="
            skill-icon
            w-20 h-20
            rounded-3xl
            bg-gradient-to-br
            from-purple-500
            to-indigo-500
            flex items-center justify-center
            text-white
            text-3xl
            shadow-lg
            shrink-0">

                ${getSkillIcon(skill.name)}

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
                mt-4
                leading-7
                text-lg">

                    ${skill.description}

                </p>

            </div>

        `;

        skillsContainer.appendChild(card);

    });

}

renderSkills();