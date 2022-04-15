let benefitsSlider = new Swiper(".work-scheme__table", {
    slidesPerView: "auto",
    grabCursor: true,

    navigation: {
      nextEl: ".work-scheme__table--next",
      prevEl: ".work-scheme__table--prev",
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1210: {
            slidesPerView: 4,
        },
    }
});