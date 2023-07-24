import './style.css';
import './add.svg';
import './github-icon.svg';

(() => {
    const sidebar = document.querySelector('.sidebar');
    const sidettl = document.querySelector('.proj-title');
    const menu = document.querySelector('.menu');

    const MenuAnimation = () => {
        menu.classList.toggle('opened');
        menu.setAttribute('aria-expanded', menu.classList.contains('opened'));
    };

    const BarCheck = () => {
        if (window.innerWidth >= 900) {
            if (sidebar.hasAttribute('style')) {
                sidebar.removeAttribute('style');
            }

            if (sidettl.hasAttribute('style')) {
                sidettl.removeAttribute('style');
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

            sidettl.style['justify-content'] = 'center';
            sidebar.style.width = '100%';
            sidebar.style.textAlign = 'center';
            sidebar.style['font-size'] = '2em';
            sidebar.style.gap = '20px';
        }
    };

    BarCheck();
    window.addEventListener('resize', BarCheck);

    menu.addEventListener('click', () => {
        sidebar.classList.toggle('sb-active');
    });
})();
