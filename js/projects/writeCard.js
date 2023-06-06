import { takeProjects } from "/js/projects/conectData.js";
import { cardMaker } from "/js/projects/cardMaker.js";

const projectsSection = document.getElementById("projects");

async function writeCards() {
  const data = await takeProjects();

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
