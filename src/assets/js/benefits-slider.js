if (document.querySelector('.benefits')) {
    let benefitsSlider = new Swiper(".benefits", {
        slidesPerView: "auto",
        grabCursor: true,
    
        navigation: {
          nextEl: ".benefits--next",
          prevEl: ".benefits--prev",
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