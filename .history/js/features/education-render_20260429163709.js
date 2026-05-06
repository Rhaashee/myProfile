function renderEducation() {
    const container = document.getElementById("education-container");

    if (!container) return;

    container.innerHTML = "";

    educationData.forEach((edu) => {

        // CARD
        const card = document.createElement("div");
        card.className =
            "flex items-center gap-6 bg-white dark:bg-blue-50 p-6 mb-6 rounded-xl shadow-md hover:shadow-lg transition";

        // 🔵 DONUT CIRCLE
        const circle = document.createElement("div");
        circle.className = "progress-circle";

        const value = edu.percentage;

        // BLUE DONUT
        circle.style.background =
            `conic-gradient(#2563eb ${value}%, #bfdbfe ${value}%)`;

        const inner = document.createElement("div");
        inner.className = "inner-circle";
        inner.textContent = value + "%";

        circle.appendChild(inner);

        // TEXT
        const textBox = document.createElement("div");

        const title = document.createElement("h3");
        title.className = "text-lg font-bold";
        title.textContent = edu.title;

        const inst = document.createElement("p");
        inst.className = "text-gray-600";
        inst.textContent = edu.institution;

        const duration = document.createElement("p");
        duration.className = "text-sm text-gray-500";
        duration.textContent = edu.duration;

        textBox.append(title, inst, duration);

        // FINAL
        card.append(circle, textBox);
        container.appendChild(card);
    });
}