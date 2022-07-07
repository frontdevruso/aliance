const blogItemTitle = document.querySelectorAll('.blog .blog__container ul li a');
const blogItemTitleSlider = document.querySelectorAll('.experts__slider-item a');
const productDescription = document.querySelectorAll('.products-catalog__table-item main p');
const serviceDescription = document.querySelectorAll('.services ul a main p');

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

if (serviceDescription) {
    serviceDescription.forEach(function(item) {
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