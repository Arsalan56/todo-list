/* eslint-disable no-param-reassign */
import './style.css';
import './add.svg';
import './github-icon.svg';
import './close.svg';

// Sidebar animations
(() => {
    const sidebar = document.querySelector('.sidebar');
    const sidettl = document.querySelector('.sidebar > p');
    const menu = document.querySelector('.menu');
    const lis = document.querySelectorAll('.projects > li');
    const newproj = document.querySelector('.newproj');
    const cover = document.querySelector('.cover');
    const close = document.querySelector('.form-cont > img');

    const MenuAnimation = () => {
        menu.classList.toggle('opened');
        menu.setAttribute('aria-expanded', menu.classList.contains('opened'));
    };

    const BarCheck = () => {
        if (window.innerWidth >= 900) {
            if (sidebar.hasAttribute('style')) {
                sidebar.removeAttribute('style');
                sidettl.removeAttribute('style');
                lis.forEach((li) => li.removeAttribute('style'));
                const items = document.querySelectorAll('.cont > div');
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
            const items = document.querySelectorAll('.cont > div');
            items.forEach((item) => {
                item.style.width = '100%';
            });
        }
    };

    BarCheck();
    window.addEventListener('resize', BarCheck);

    menu.addEventListener('click', () => {
        sidebar.classList.toggle('sb-active');
    });
    newproj.addEventListener('click', () => {
        cover.style.visibility = 'visible';
    });
    close.addEventListener('click', () => {
        cover.style.visibility = 'hidden';
    });
})();
