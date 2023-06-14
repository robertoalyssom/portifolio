import data from "./data.js";

const projectsContainer = document.querySelector("[data-projectsLocation]");

export function takeProjects() {
  const projectsDatasetValue = projectsContainer.dataset.projectslocation;

  const firstFourProjects = data.slice(0, 4);
  if (projectsDatasetValue === "homepage") return firstFourProjects;
  return data;
}
