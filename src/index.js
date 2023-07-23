import './style.css';
import './add.svg';
import './github-icon.svg';

const sidebar = document.querySelector('.sidebar');
const sidettl = document.querySelector('.proj-title');

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
        }
    } else {
        sidettl.style['justify-content'] = 'center';
        sidebar.style.width = '100%';
        sidebar.style.textAlign = 'center';
    }
};

BarCheck();

window.addEventListener('resize', BarCheck);

const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    sidebar.classList.toggle('sb-active');
});
