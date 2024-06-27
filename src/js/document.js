window.addEventListener('DOMContentLoaded', () => {
    for (const accordion of document.querySelectorAll('.accordion')) {
        accordion.querySelector('.accordion__button').addEventListener('click', () => {
            accordion.querySelector('.accordion__text').classList.toggle('accordion__text--active');
            accordion.querySelector('.accordion__text--active')
                ? (accordion.querySelector('.accordion__button').querySelector('div').textContent = '-')
                : (accordion.querySelector('.accordion__button').querySelector('div').textContent = '+');
            accordion.querySelector('.accordion__text').style.maxHeight = accordion.querySelector('.accordion__text').scrollHeight + 'px';
        });
    }
});
