async function takeProjects() {
  const response = await fetch("/js/projects/data.json");
  const projectsList = await response.json(); // extraindo dados json da resposta
  let pageLocation = document.location.pathname;

  if (pageLocation === "/" || pageLocation === "/index.html") {
    const firstFourProjects = projectsList.slice(0, 4);

    return firstFourProjects;
  } else {
    return projectsList;
  }
}

export { takeProjects };
