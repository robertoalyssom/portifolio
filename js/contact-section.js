const contactSection = document.querySelector("[data-contact]");
const contactButtons = document.querySelectorAll("#contact-button");
const closeButton = document.querySelector("[data-closeButton]");

contactButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    showContactSection(event);
  });
});

closeButton.addEventListener("click", (event) => {
  hideContactSection(event);
});

function showContactSection(event) {
  event.preventDefault();
  contactSection.style.display = "flex";
}

function hideContactSection(event) {
  event.preventDefault();
  contactSection.style.display = "none";
}
