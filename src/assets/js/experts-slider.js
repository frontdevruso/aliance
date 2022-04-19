if(document.querySelector('.experts__slider--informative')) {
  let expertsSlider = new Swiper(".experts__slider--informative", {
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
  
      navigation: {
        nextEl: ".experts__slider--informative--next",
        prevEl: ".experts__slider--informative--prev",
      },
  
      breakpoints: {
        1100: {
          slidesPerView: 2,
        },
    }
  });
}
if(document.querySelector('.experts__slider--about')) {
  let expertsSliderAbout = new Swiper(".experts__slider--about", {
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      loop: true,
  
      navigation: {
        nextEl: ".experts__slider--about--next",
        prevEl: ".experts__slider--about--prev",
      },
  
      breakpoints: {
        1100: {
          slidesPerView: 2,
        },
    }
  });
}