const projectsContainer = document.querySelector("[data-projectsLocation]");

function cardMaker(image, title, technologies, link, repoLink) {
  const card = document.createElement("div");
  card.classList = "projects-card";

  card.innerHTML = `
          <img src="${startPath()}${image}" alt="test" class="projects-card__img">
          <div class="card-description" data-darkMode="card">
            <h4 class="card-description__title">${title}</h4>
            <div class="card-container__1 id="tecnologies">
              ${writeTecnologies(technologies)}
            </div>
            <div class="card-container__2">
                <a href="${link}" target="_blank" class="card-description__link" aria-label="external link"><i class="fa-solid fa-up-right-from-square fa-sm"></i></a>
                <a href="${repoLink}" target="_blank" class="card-description__link" aria-label="repository link"><i class="fa-brands fa-square-github"></i></a>
            </div>
          </div>
      `;

  return card;
}

function startPath() {
  let projectsDatasetValue = projectsContainer.dataset.projectslocation;

  if (projectsDatasetValue === "homepage") return ".";
  return "..";
}

function writeTecnologies(technologies) {
  let pElementsArray = technologies.map((tec) => {
    return `<p class="card-description__item">${tec}</p>`;
  });

  let tecnologiesElements = pElementsArray.join(" "); // juntar elementos do array
  return tecnologiesElements;
}

export { cardMaker };
