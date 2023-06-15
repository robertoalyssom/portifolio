const sunMoonButton = document.querySelectorAll("[data-darkLight-button]");
const elements = document.querySelectorAll("[data-darkMode]");

sunMoonButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    changeMode(button);
  });
});

function changeMode(button) {
  changeIcon(button);

  elements.forEach((element) => {
    let datasetValue = element.dataset.darkmode;

    if (element.tagName === "HEADER") {
      changeImage(element);
    }

    bgBlack(element);

    if (datasetValue === "card" || datasetValue === "footer") {
      bgGrey(element);
    }
  });
}

function changeIcon(button) {
  let iconElement = button.firstChild;
  let elementFatherTag = button.parentNode.tagName;
  let bodyClassListLength = document.body.classList.length;

  // if clicked element's father is <nav> or <header>
  if (bodyClassListLength === 0 && elementFatherTag === "NAV") {
    iconElement.outerHTML = `<i class="fa-solid fa-sun navbar-icon"></i>`;
  } else if (bodyClassListLength === 0) {
    iconElement.outerHTML = `<i class="fa-solid fa-sun navegation-icon"></i>`;
  } else {
    iconElement.outerHTML = `<i class="fa-solid fa-moon navbar-icon"></i>`;
  }
}

function changeImage(element) {
  let logoImgElement = element.firstElementChild.firstElementChild.firstChild;
  let containsDarkModeClassInBody =
    document.body.classList.contains("dark-mode");
  let blackLogo = "../img/logo/logo-preto.png";
  let whiteLogo = "../img/logo/logo-branco.png";

  logoImgElement.src = blackLogo;

  if (containsDarkModeClassInBody) {
    logoImgElement.src = whiteLogo;
  }
}

function bgBlack(element) {
  element.classList.toggle("dark-mode");
}

function bgGrey(element) {
  element.classList.toggle("dark-mode__bg-grey");
}
