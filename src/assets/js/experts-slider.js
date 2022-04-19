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
if(document.querySelector('.experts__slider--about')) {
  let expertsSliderAbout = new Swiper(".experts__slider--about", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
      allowTouchMovement: false,
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