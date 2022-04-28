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