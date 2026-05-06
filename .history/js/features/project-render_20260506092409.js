import { projectsData } from "../data/projects.js";

const container = document.getElementById("projects-container");

container.innerHTML = `
    <div class="projects-grid">
        ${projectsData.map(project => `
            <div class="card">
                <img src="${project.image}" class="project-image">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `).join("")}
    </div>
`;