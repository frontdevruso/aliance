if(document.querySelector('.experts__slider')) {
  let expertsSlider = new Swiper(".experts__slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
  
      navigation: {
        nextEl: ".experts__slider--next",
        prevEl: ".experts__slider--prev",
      },
  
      breakpoints: {
        1100: {
            slidesPerView: 2,
        },
    }
  });
}