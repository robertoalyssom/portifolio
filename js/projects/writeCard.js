import { takeProjects } from "./conectData.js";
import { cardMaker } from "./cardMaker.js";

const projectsSection = document.getElementById("projects");

function writeCards() {
  const data = takeProjects();

  data.forEach((project) => {
    projectsSection.appendChild(
      cardMaker(
        project.image,
        project.title,
        project.technologies,
        project.link,
        project.repoLink
      )
    );
  });
}

writeCards();
