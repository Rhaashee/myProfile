function renderEducation() {
    const container = document.getElementById("education-container");

    if (!container) return;

    container.innerHTML = "";

    educationData.forEach((edu) => {

        const card = document.createElement("div");
        card.className =
            "flex items-center gap-6 bg-white dark:bg-blue-50 p-6 mb-6 rounded-xl shadow-md hover:shadow-lg transition";

        // DONUT CIRCLE
        const circle = document.createElement("div");
        circle.className = "progress-circle";

        const value = edu.percentage; // use percentage instead of score

        // Color logic
        let color = "#ef4444"; // red
        if (value >= 80) color = "#22c55e"; // green
        else if (value >= 70) color = "#3b82f6"; // blue
        else if (value >= 60) color = "#f59e0b"; // yellow

        circle.style.background =
            `conic-gradient(${color} ${value}%, #e5e7eb ${value}%)`;

        const inner = document.createElement("div");
        inner.className = "inner-circle";
        inner.textContent = value + "%";

        circle.appendChild(inner);

        // TEXT SECTION
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

        // FINAL APPEND
        card.append(circle, textBox);
        container.appendChild(card);
    });
}