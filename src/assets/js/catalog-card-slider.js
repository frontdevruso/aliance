function catalogCardSliderInit(allSliders) {
    if (allSliders) {
        allSliders.forEach(function(slider) {
            let prevArrow = slider.querySelector('.catalog-card__slider--prev')
            let nextArrow = slider.querySelector('.catalog-card__slider--next')

            if (!slider.classList.contains('catalog-card__slider--info')) {
                new Swiper(slider.querySelector('.catalog-card__slider-init'), {
                    slidesPerView: 2,
                    grabCursor: true,
                
                    navigation: {
                        nextEl: nextArrow,
                        prevEl: prevArrow,
                    },
                    
                    breakpoints: {
                        0: {
                            slidesPerView: "auto",
                        },
                        400: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 2,
                        },
                        1440: {
                            slidesPerView: 3,
                        },
                    }
                });
            } else {
                new Swiper(slider.querySelector('.catalog-card__slider-init'), {
                    slidesPerView: "auto",
                    grabCursor: true,
                
                    navigation: {
                        nextEl: nextArrow,
                        prevEl: prevArrow,
                    },
                
                    breakpoints: {
                        1440: {
                            slidesPerView: 2,
                        },
                    }
                });
            }
        })
    }
}

catalogCardSliderInit(document.querySelectorAll('.catalog-card__slider'));