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