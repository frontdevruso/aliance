if (document.querySelector('.header')) {
    const header = document.querySelector('.header');
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 94 || document.documentElement.scrollTop > 94) {
            header.classList.add('header--floating');
        } else {
            header.classList.remove('header--floating');
        }
    }
}