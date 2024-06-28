window.addEventListener('DOMContentLoaded', () => {
    for (const accordion of document.querySelectorAll('.accordion')) {
        if (accordion.querySelector('.accordion__text').classList.contains('accordion__text--active')) {
            accordion.querySelector('.accordion__button').querySelector('div').textContent = '-';
            accordion.querySelector('.accordion__button').classList.add('accordion__button--active');
            accordion.querySelector('.accordion__text').style.maxHeight = accordion.querySelector('.accordion__text').scrollHeight + 48 + 'px';
        }
        accordion.querySelector('.accordion__button').addEventListener('click', () => {
            accordion.querySelector('.accordion__text').classList.toggle('accordion__text--active');
            if (accordion.querySelector('.accordion__text').style.maxHeight) {
                accordion.querySelector('.accordion__button').classList.remove('accordion__button--active');
                accordion.querySelector('.accordion__text').style.maxHeight = null;
                accordion.querySelector('.accordion__button').querySelector('div').textContent = '+';
            } else {
                accordion.querySelector('.accordion__button').classList.add('accordion__button--active');
                accordion.querySelector('.accordion__text').style.maxHeight = accordion.querySelector('.accordion__text').scrollHeight + 48 + 'px';
                accordion.querySelector('.accordion__button').querySelector('div').textContent = '-';
            }
        });
    }
    // document.querySelector('.form__button').addEventListener('click', () => {
    //     for (const inputLabel of document.querySelectorAll('.input-label')) {
    //         // console.log(!inputLabel.querySelector('input').value);
    //         // if (inputLabel.querySelector('input').value == '') {
    //         //     inputLabel.style.paddingBottom = '24px';
    //         //     // inputLabel.
    //         // } else {
    //         //     inputLabel.removeAttribute('style');
    //         // }
    //     }
    // });
    $('#form').validate({
        rules: {
            fullname: {
                required: true,
                minlength: 2,
            },
            phone: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            file: 'required',
            event: 'required',
        },
        messages: {
            fullname: {
                required: '*Обязательное поле',
                minlength: 'ФИО должно быть не менее 2 символов',
            },
            phone: {
                required: '*Обязательное поле',
            },
            email: {
                required: '*Обязательное поле',
                email: 'Введите корректный email',
            },
            file: '*Обязательное поле',
            event: '*Обязательное поле',
        },
    });
    $('#tel').mask('+7(000)-000-00-00');
});
