/* eslint-disable no-param-reassign */

export default (() => {
    const sidebar = document.querySelector('.sidebar');
    const sidettl = document.querySelector('.sidebar > p');
    const menu = document.querySelector('.menu');
    const lis = document.querySelectorAll('.projects > li');
    const newproj = document.querySelector('.newproj');
    const cover = document.querySelector('.cover');

    const MenuAnimation = () => {
        menu.classList.toggle('opened');
        menu.setAttribute('aria-expanded', menu.classList.contains('opened'));
    };

    const BarCheck = () => {
        const items = document.querySelectorAll('.cont > div');
        if (window.innerWidth >= 900) {
            if (sidebar.hasAttribute('style')) {
                sidebar.removeAttribute('style');
                sidettl.removeAttribute('style');
                lis.forEach((li) => li.removeAttribute('style'));
                items.forEach((item) => item.removeAttribute('style'));
            }

            if (!sidebar.classList.contains('sb-active')) {
                sidebar.classList.toggle('sb-active');
                MenuAnimation();
            }
        } else {
            if (sidebar.classList.contains('sb-active')) {
                sidebar.classList.toggle('sb-active');
                MenuAnimation();
            }
            lis.forEach((li) => {
                li.style['margin-left'] = '0px';
            });
            sidettl.style['align-self'] = 'center';
            sidebar.style.width = '100%';
            sidebar.style.textAlign = 'center';
            sidebar.style['font-size'] = '2em';
            items.forEach((item) => {
                item.style.width = '100%';
            });
        }
    };

    BarCheck();
    window.addEventListener('resize', BarCheck);

    menu.addEventListener('click', () => {
        sidebar.classList.toggle('sb-active');
        const items = document.querySelectorAll('.cont > div');
        if (window.innerWidth >= 900) {
            if (!sidebar.classList.contains('sb-active')) {
                items.forEach((item) => {
                    item.style.width = '100%';
                });
            } else if (sidebar.classList.contains('sb-active')) {
                items.forEach((item) => {
                    item.removeAttribute('style');
                });
            }
        }
    });
    newproj.addEventListener('click', () => {
        console.log('new proj');
    });
})();
