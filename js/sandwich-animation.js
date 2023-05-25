const sandwichButton = document.querySelector("[data-sandwichButton]");

sandwichButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.classList.toggle("sandwich-animation-active");
});
