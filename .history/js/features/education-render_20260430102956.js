function renderEducation() {
    const container = document.getElementById("education-container");

    if (!container) return;

    container.innerHTML = "";

    educationData.forEach((edu) => {

        // MAIN ROW (clean layout)
        const row = document.createElement("div");
        row.className =
            "flex items-center gap-6 py-6 border-b border-gray-200 dark:border-gray-700";

        // DONUT (left)
        const circle = document.createElement("div");
        circle.className = "progress-circle";

        const value = edu.percentage;

        circle.style.background =
            `conic-gradient(#2563eb ${value}%, #e2e8f0 ${value}%)`;

        const inner = document.createElement("div");
        inner.className = "inner-circle";
        inner.textContent = value + "%";

        circle.appendChild(inner);

        // 📝 TEXT (right)
        const textBox = document.createElement("div");

        const title = document.createElement("h3");
        title.className = "text-lg font-semibold";
        title.textContent = edu.title;

        const inst = document.createElement("p");
        inst.className = "text-gray-600 text-sm";
        inst.textContent = edu.institution;

        const duration = document.createElement("p");
        duration.className = "text-xs text-gray-400 mt-1";
        duration.textContent = edu.duration;

        textBox.append(title, inst, duration);

        // FINAL
        row.append(circle, textBox);
        container.appendChild(row);
    });
}