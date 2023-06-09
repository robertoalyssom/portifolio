const projectsContainer = document.querySelector("[data-projectsLocation]");

async function takeProjects() {
  const response = await fetch("../js/projects/data.json");
  const projectsList = await response.json(); // extraindo dados json da resposta
  const projectsDatasetValue = projectsContainer.dataset.projectslocation;

  if (projectsDatasetValue === "homepage") {
    const firstFourProjects = projectsList.slice(0, 4);

    return firstFourProjects;
  } else {
    return projectsList;
  }
}

export { takeProjects };

// CRIAR FUNÇÃO SE SEPARAR PROJETOS NO WRITEcARDS.json
