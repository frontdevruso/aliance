if(document.querySelector('.work-scheme__table')) {
    let benefitsSlider = new Swiper(".work-scheme__table", {
        slidesPerView: 'auto',
        spaceBetween: 0,
        grabCursor: true,
        freeMode: true,
    
        navigation: {
          nextEl: ".work-scheme__table--next",
          prevEl: ".work-scheme__table--prev",
        },
    
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1210: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    });
}