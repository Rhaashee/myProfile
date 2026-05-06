const educationContainer =
document.getElementById("education-container");

function renderEducation(){

    educationContainer.innerHTML = "";

    educationData.forEach((edu) => {

        const card = document.createElement("div");

        card.className = `
        education-card
        flex items-center justify-between
        bg-white
        rounded-[32px]
        p-10
        shadow-sm
        border border-purple-100
        `;

        card.innerHTML = `

            <!-- LEFT SIDE -->

            <div>

                <h3 class="
                text-3xl
                font-black
                text-slate-900
                mb-3">

                    ${edu.title}

                </h3>

                <p class="
                text-xl
                text-slate-500
                mb-2">

                    ${edu.institution}

                </p>

                <p class="
                text-lg
                text-purple-500
                font-semibold">

                    ${edu.duration}

                </p>

            </div>

            <!-- DONUT CHART -->

            <div
            class="
            relative
            w-[150px]
            h-[150px]
            rounded-full
            flex items-center justify-center
            "

            style="
            background:
            conic-gradient(
            #8b5cf6 ${edu.percentage}%,
            #ede9fe ${edu.percentage}%);
            ">

                <!-- INNER CIRCLE -->

                <div class="
                absolute
                w-[110px]
                h-[110px]
                bg-white
                rounded-full
                flex items-center justify-center
                text-3xl
                font-black
                text-slate-900">

                    ${edu.percentage}%

                </div>

            </div>

        `;

        educationContainer.appendChild(card);

    });

}

renderEducation();