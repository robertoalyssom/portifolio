const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // breakpoints: {
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 10,
  //   },
  // },
});

// const cardsListElements = document.querySelectorAll("[data-projectCard]");

// cardsListElements.forEach((card) => {
//   let slideElement = `<div class="swiper-slide">${card}</div>`;

//   console.log(card);
//   console.log(slideElement);

//   swiper.appendSlide(slideElement);
// });
