// sidebar
const sidebarButton = document.querySelector('[data-sidebarButton]');
const sidebar = document.querySelector('[data-sidebar]');

sidebarButton.addEventListener("click", () => sidebar.classList.toggle("active"));

