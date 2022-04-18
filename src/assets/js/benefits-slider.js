if (document.querySelector('.about-preview__benefits')) {
    let benefitsSlider = new Swiper(".about-preview__benefits", {
        slidesPerView: "auto",
        grabCursor: true,
    
        navigation: {
          nextEl: ".about-preview__benefits--next",
          prevEl: ".about-preview__benefits--prev",
        },
    
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1210: {
                slidesPerView: 5,
            },
        }
    });
}