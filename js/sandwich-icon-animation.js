const headerIcon = document.querySelector("[data-sidebarButton]");

headerIcon.addEventListener("click", (e) => {
  let classes = e.target.classList;
  const classActive = "sandwich-active";

  classes.add(classActive);

  console.log(typeof classes);
  console.log(classes.includes(classActive));
});
