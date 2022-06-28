if(document.querySelector('.seo-more-info')) {
    const seoMoreTextBtn = document.querySelector('.seo-more-info');
    const serviceSeoAdditional = document.querySelector('.services__seo-additional');

    seoMoreTextBtn.addEventListener('click', function() {
        seoMoreTextBtn.querySelector('svg').style.transform = "rotate(270deg)";
        seoMoreTextBtn.querySelector('svg').style.marginRight = "10px";
        setTimeout(function() {
            seoMoreTextBtn.classList.add('clicked');
            setTimeout(function() { serviceSeoAdditional.classList.add('active') }, 300);
        }, 600);
    });
}
const blogItemTitle = document.querySelectorAll('.blog .blog__container ul li a');
const blogItemTitleSlider = document.querySelectorAll('.experts__slider-item a');
const productDescription = document.querySelectorAll('.products-catalog__table-item main p');

if (blogItemTitle) {
    blogItemTitle.forEach(function(item) {
        item.style.setProperty("-webkit-box-orient", "vertical");
    })
}

if (blogItemTitleSlider) {
    blogItemTitleSlider.forEach(function(item) {
        item.style.setProperty("-webkit-box-orient", "vertical");
    })
}

if (productDescription) {
    productDescription.forEach(function(item) {
        item.style.setProperty("-webkit-box-orient", "vertical");
    })
}

const mapOnPage = document.getElementById('map');

if (mapOnPage) {
    mapOnPage.addEventListener('click', function() {
        if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
            window.location.href = "https://yandex.ru/maps/213/moscow/house/kholodilny_pereulok_3k1s8/Z04YcAVoSEACQFtvfXtxeXRgZQ==/?ll=37.628481%2C55.708633&z=18";
        }
    }, {once : true});
}
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
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const body = document.body;
    
    burger.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("isOpen");
        body.classList.toggle('m-open');
    });
});

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
                        0: {
                            slidesPerView: 1,
                        },
                        400: {
                            slidesPerView: "auto",
                        },
                        992: {
                            slidesPerView: "auto",
                        },
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
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelectorAll('.contact-form');
    if (contactForm) {
        contactForm.forEach(function(form) {
            const formPhone = form.querySelector('[data-validate-field="tel"]');
            const formName = form.querySelector('[data-validate-field="name"]');
        
            const formAllInput = form.querySelectorAll('[data-validate-field]');
            const contactFormSubmitBtn = form.querySelector('.contact-form-submit');
            
            formAllInput.forEach(function(item) {
                item.addEventListener('focus', function() {
                    item.parentElement.classList.remove('g-input-error');
                    item.parentElement.classList.remove('policy-error');
                })
    
                inputEl = item.querySelector('input');
                item.addEventListener('blur', onInputBlur);
    
                function onInputBlur(inputEl) {
                    if(inputEl.target && inputEl.target.value) {
                        console.log(inputEl.target.parentElement);
                        inputEl.target.parentElement.classList.add('input--filled');
                    } else {
                        console.log('is-empty');
                        inputEl.target.parentElement.classList.remove('input--filled');
                    }
                }
            });
        
            contactFormSubmitBtn.addEventListener('click', function(e) {
                e.preventDefault();
                let errCount = 0;
    
                if (formName.value.length === 0) {
                    formName.parentElement.classList.add('g-input-error');
                    errCount++;
                } else { formName.parentElement.classList.remove('g-input-error') }
    
                if (formPhone.value.length >= 24 || formPhone.value.length === 0 || formPhone.value.length < 15) {
                    formPhone.parentElement.classList.add('g-input-error');
                    errCount++;
                } else { formPhone.parentElement.classList.remove('g-input-error') }
    
                if (errCount === 0) {
                    // HERE YOU CAN ADD A AJAX REQUEST TO SEND DATA

                    window.location.href = "./thanks.html";
                }
            });
        })
    }
});

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
if (document.querySelector('.header')) {
    const header = document.querySelector('.header');
    const headerHeight = parseInt(window.getComputedStyle(header).height);

    const checkingHeaderPosition = () => {    
        if (window.scrollY > headerHeight) {
            header.classList.add('header--floating');
        } else {
            header.classList.remove('header--floating');
        }
    }

    checkingHeaderPosition();

    window.addEventListener("scroll", function() {
        checkingHeaderPosition();
    });
}
const tels = document.querySelectorAll("input[type=\"tel\"]");

if (tels) {
    tels.forEach(el => {
        IMask(el, { mask: "+ {0} (000) 000 00 000 00" });
    });
}
const observer = lozad('.lozad', {
    loaded: function(img) {
        img.addEventListener('load', function() {
            img.classList.add('loaded');
        });
        
        if(img.hasAttribute('data-background-image')) {
            img.classList.add('loaded');
        };
    },
});


observer.observe();
if (document.querySelector('.menu')) {
    const allLinks = document.querySelectorAll('.menu__container ul li');
    const allDropDownLinks = document.querySelectorAll('.menu__container ul li .menu__drop-down .menu__drop-down-item');
}
if(document.querySelector('.modal')) {
    const modalWindow = document.querySelectorAll('.modal');
    const modalOpenBtns = document.querySelectorAll('.open-modal-form');

    modalWindow.forEach(function(item) {
        if(item.querySelector('.modal-close')) {
            item.querySelector('.modal-close').addEventListener('click', function() {
                item.classList.remove('modal--open');
                document.querySelector('body').classList.remove('m-hidden');
            });
        }
        if(item.querySelector('.modal__btn')) {            
            item.querySelector('.modal__btn').addEventListener('click', function() {
                item.classList.remove('modal--open');
                document.querySelector('body').classList.remove('m-hidden');
            });
        }
    })

    modalOpenBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelector('body').classList.add('m-hidden');
            document.querySelector('.modal--form').classList.add('modal--open');
        });
    })
}
function initSelect(selectItems) {
    if (selectItems) {
        selectItems.forEach(function(item) {
            item.addEventListener('click', function() {
                if (!item.disabled === true) {
                    selectItems.forEach(function(i) { i.classList.remove('active') });
                    item.classList.add('active');
                }
            });
        });
    }
}

initSelect(document.querySelectorAll('.catalog-card__select button'));
const smoothLinks = document.querySelectorAll('a[href^="#"]');
if (smoothLinks) {
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');
    
            if (id === "#") return
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
}
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