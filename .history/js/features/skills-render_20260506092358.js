import { skillsData } from "../data/skills.js";

const container = document.getElementById("skills-container");

container.innerHTML = `
    <div class="skills-grid">
        ${skillsData.map(skill => `
            <div class="card">
                <h3>${skill}</h3>
            </div>
        `).join("")}
    </div>
`;