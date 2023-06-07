const projectsSection = document.getElementById("projects");

async function takeProjects() {
  const response = await fetch("./js/projects/data.json");
  const projectsList = await response.json(); // extraindo dados json da resposta

  return projectsList;
}

function cardMaker(image, title, technologies, link, repoLink) {
  let eachTecnology = [...technologies];
  console.log(eachTecnology);

  const card = document.createElement("div");
  card.classList = "projects-card";
  card.innerHTML = `
        <img src="${image}" alt="test" class="projects-card__img">
        <div class="card-description" data-darkMode="card">
          <h4 class="card-description__title">${title}</h4>
          <div class="card-container__1">
              <p class="card-description__item">HTML</p>
              <p class="card-description__item">CSS</p>
              <p class="card-description__item">JavaScript</p>
          </div>
          <div class="card-container__2">
              <a href="${link}" target="_blank" class="card-description__link"><i class="fa-solid fa-up-right-from-square fa-sm"></i></a>
              <a href="${repoLink}" target="_blank" class="card-description__link"><i class="fa-brands fa-square-github"></i></a>
          </div>
        </div>
    `;

  return card;
}

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
