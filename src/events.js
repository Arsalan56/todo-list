/* eslint-disable no-param-reassign */

export default (() => {
    const sidebar = document.querySelector('.sidebar');
    const sidettl = document.querySelector('.sidebar > p');
    const menu = document.querySelector('.menu');
    const lis = document.querySelectorAll('.projects > li');
    const cont = document.querySelector('.cont');
    const newtask = document.querySelector('.newtask > button');
    const form = document.querySelector('.form-cont');
    const exit = document.querySelector('.form-cont > div:first-of-type > img');
    const title = document.querySelector('.input-ttl');

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
                cont.removeAttribute('style');
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
            cont.style.width = '100%';
        }
    };

    BarCheck();
    window.addEventListener('resize', BarCheck);

    const reset = () => {
        if (document.querySelector('.header').textContent === 'Home') {
            newtask.parentNode.removeAttribute('style');
        }
        form.classList.remove('visible');
        title.classList.remove('error');
        title.setAttribute('placeholder', 'Title');

        // Reset inputs when done
        const rmv1 = document.querySelector('.input-desc');
        const rmv2 = document.querySelector('.prio:checked');
        const rmv3 = document.querySelector('.due-input');
        const rmv4 = document.querySelector('.proj');
        title.value = '';
        rmv1.value = '';
        if (rmv2) rmv2.checked = false;
        rmv3.value = '';
        rmv4.value = '';
    };

    menu.addEventListener('click', () => {
        sidebar.classList.toggle('sb-active');
        if (window.innerWidth >= 900) {
            if (!sidebar.classList.contains('sb-active')) {
                cont.style.width = '100%';
            } else if (sidebar.classList.contains('sb-active')) {
                cont.removeAttribute('style');
            }
        }
        reset();
    });

    newtask.addEventListener('click', () => {
        newtask.parentNode.style.visibility = 'hidden';
        form.classList.toggle('visible');
    });
    exit.addEventListener('click', reset);
})();
