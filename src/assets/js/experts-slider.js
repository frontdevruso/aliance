let expertsSlider = new Swiper(".experts__slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    grabCursor: true,

    navigation: {
      nextEl: ".experts__slider--next",
      prevEl: ".experts__slider--prev",
    },
});