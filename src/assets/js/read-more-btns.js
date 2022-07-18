if (document.querySelectorAll('.read-more__btn')) {
    const allBtns = document.querySelectorAll('.read-more__btn');
    const allContainer = document.querySelectorAll('.read-more__container');

    allBtns.forEach(function(btn, index) {
        btn.setAttribute('data-read-btn', `${index + 1}`);
    })

    allContainer.forEach(function(container, index) {
        container.setAttribute('data-read-container', `${index + 1}`);
    });

    allBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            btn.querySelector('svg').style.transform = "rotate(270deg)";
            btn.querySelector('svg').style.marginRight = "10px";
            let orderNumber = btn.getAttribute('data-read-btn');

            setTimeout(function() {
                btn.classList.add('clicked');
                allContainer.forEach(function(container) {
                    if (container.getAttribute('data-read-container') == orderNumber) {
                        container.classList.add('active');
                    }
                });
            }, 600);
        })
    });
}