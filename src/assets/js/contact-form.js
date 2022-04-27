document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelectorAll('.contact-form');
    if (contactForm) {
        contactForm.forEach(function(form) {
            const formPhone = form.querySelector('[data-validate-field="tel"]');
            const formName = form.querySelector('[data-validate-field="name"]');
            const formCheckbox = form.querySelector('[data-validate-field="checkbox"]');
            const formCheckboxWrapper = form.querySelector('.contact-form__wrapper-form-policy label');
        
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
            
            formCheckbox.addEventListener('change', function() {
                if(this.checked) { formCheckboxWrapper.classList.remove('policy-error') }
            });
        
            contactFormSubmitBtn.addEventListener('click', function(e) {
                e.preventDefault();
                let errCount = 0;
                const formCheckbox = form.querySelector('[data-validate-field="checkbox"]');
    
                if (formName.value.length === 0) {
                    formName.parentElement.classList.add('g-input-error');
                    errCount++;
                } else { formName.parentElement.classList.remove('g-input-error') }
    
                if (formPhone.value.length >= 24 || formPhone.value.length === 0 || formPhone.value.length < 15) {
                    formPhone.parentElement.classList.add('g-input-error');
                    errCount++;
                } else { formPhone.parentElement.classList.remove('g-input-error') }
    
                if (formCheckbox.checked == false) {
                    errCount++;
                    formCheckboxWrapper.parentElement.classList.add('policy-error');
                } else { formCheckbox.parentElement.classList.remove('policy-error') }
    
                if (errCount === 0) {
                    // HERE YOU CAN ADD A AJAX REQUEST TO SEND DATA
                    
                    document.querySelector('body').classList.add('m-hidden');
                    document.querySelector('.modal--thanks').classList.add('modal--open');

                    if(form.classList.contains('contact-form--modal')) {
                        document.querySelector('.modal--form').classList.remove('modal--open');
                    }
                }
            });
        })
    }
});