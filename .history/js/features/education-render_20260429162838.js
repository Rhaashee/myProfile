function renderEducation() {
    const container = document.getElementById("experience");

    if (!container) return;

    const wrapper = document.createElement("div");
    wrapper.className = "space-y-6";

    educationData.forEach((edu) => {

        const card = document.createElement("div");
        card.className =
            "bg-white dark:bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition";

        const title = document.createElement("h3");
        title.className = "text-lg font-bold";
        title.textContent = edu.title;

        const inst = document.createElement("p");
        inst.className = "text-gray-600";
        inst.textContent = edu.institution;

        const score = document.createElement("p");
        score.className = "text-green-600 text-sm";
        score.textContent = edu.score;

        const duration = document.createElement("p");
        duration.className = "text-sm text-gray-500";
        duration.textContent = edu.duration;

        card.append(title, inst, score, duration);
        wrapper.appendChild(card);
    });

    container.appendChild(wrapper);
}