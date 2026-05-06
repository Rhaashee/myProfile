const educationContainer =
    document.getElementById("education-container");

function renderEducation() {

    educationContainer.innerHTML =
        educationData.map(item => `

        <!-- EDUCATION CARD -->

        <div
            class="education-card
            bg-white
            border border-slate-200
            shadow-lg
            rounded-2xl
            p-8
            flex flex-col md:flex-row
            items-center justify-between
            gap-10
            transition-all duration-300
            hover:-translate-y-1">

            <!-- LEFT CONTENT -->

            <div class="flex-1">

                <!-- DEGREE -->

                <h3
                    class="text-2xl font-bold text-slate-800">

                    ${item.degree}

                </h3>

                <!-- INSTITUTION -->

                <p
                    class="text-slate-600 text-lg mt-4 leading-7">

                    ${item.institution}

                </p>

                <!-- YEAR -->

                <p
                    class="text-slate-500 mt-4 font-medium">

                    ${item.year}

                </p>

            </div>

            <!-- DONUT CHART -->

            <div
                class="relative w-[140px] h-[140px] flex items-center justify-center">

                <!-- CIRCLE -->

                <svg
                    class="w-full h-full rotate-[-90deg]"
                    viewBox="0 0 120 120">

                    <!-- BACKGROUND -->

                    <circle
                        cx="60"
                        cy="60"
                        r="48"
                        stroke-width="12"
                        class="stroke-slate-200 fill-none">
                    </circle>

                    <!-- PROGRESS -->

                    <circle
                        cx="60"
                        cy="60"
                        r="48"
                        stroke-width="12"
                        stroke-linecap="round"
                        class="fill-none

                        ${item.score >= 80
                            ? "stroke-blue-500"

                            : item.score >= 70
                            ? "stroke-green-500"

                            : "stroke-orange-400"
                        }"

                        stroke-dasharray="${2 * 3.14 * 48}"

                        stroke-dashoffset="${2 * 3.14 * 48 * (1 - item.score / 100)}">
                    </circle>

                </svg>

                <!-- PERCENTAGE -->

                <div
                    class="absolute text-2xl font-bold text-slate-800">

                    ${item.score}%

                </div>

            </div>

        </div>

    `).join("");

}

renderEducation();