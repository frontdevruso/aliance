const blogItemTitle = document.querySelectorAll('.blog .blog__container ul li a');
const blogItemTitleSlider = document.querySelectorAll('.experts__slider-item a');

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