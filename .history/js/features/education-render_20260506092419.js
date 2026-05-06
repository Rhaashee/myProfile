import { educationData } from "../data/education.js";

const container = document.getElementById("education-container");

container.innerHTML = `
    <div class="education-grid">
        ${educationData.map(item => `
            <div class="card">
                <h3>${item.title}</h3>
                <p>${item.institution}</p>
                <p>${item.score}</p>
                <p>${item.year}</p>
            </div>
        `).join("")}
    </div>
`;