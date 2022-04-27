if(document.querySelector('.modal')) {
    const modalWindow = document.querySelectorAll('.modal');
    modalWindow.forEach(function(item) {
        item.querySelector('.modal-close').addEventListener('click', function() {
            item.classList.remove('modal--open');
            document.querySelector('body').classList.remove('m-hidden');
        });
        item.querySelector('.modal__btn').addEventListener('click', function() {
            item.classList.remove('modal--open');
            document.querySelector('body').classList.remove('m-hidden');
        });
    })
}