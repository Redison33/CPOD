window.addEventListener('DOMContentLoaded', () => {
    const rangeSlider = document.getElementById('rangeSlider');
    if (rangeSlider) {
        noUiSlider.create(rangeSlider, {
            start: [1, 99],
            margin: 1,
            connect: true,
            step: 1,
            range: {
                min: [1],
                max: [99],
            },
        });
    }
    const input1 = document.querySelector('.menu__input-1');
    const input2 = document.querySelector('.menu__input-2');
    const inputs = [input1, input2];

    rangeSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);
    });
    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;
        rangeSlider.noUiSlider.set(arr);
    };
    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value);
        });
    });
    for (const btn of document.querySelectorAll('.filter__button-open')) {
        btn.addEventListener('click', () => {
            document.querySelector('.menu').classList.add('menu--active');
            document.querySelector('.menu-overlay').classList.add('menu-overlay--active');
            document.querySelector('body').style.overflow = 'hidden';
        });
    }
    document.querySelector('.menu-overlay').addEventListener('click', () => {
        document.querySelector('.menu').classList.remove('menu--active');
        document.querySelector('.menu-overlay').classList.remove('menu-overlay--active');
        document.querySelector('body').removeAttribute('style');
    });
    document.querySelector('.menu__button-reset').addEventListener('click', () => {
        document.querySelector('.menu').classList.remove('menu--active');
        document.querySelector('.menu-overlay').classList.remove('menu-overlay--active');
        document.querySelector('body').removeAttribute('style');
    });
});
