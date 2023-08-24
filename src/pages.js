// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from 'date-fns';

export default function Page(list) {
    const homePage = document.querySelector('.home');
    const todayPage = document.querySelector('.today');
    const weekPage = document.querySelector('.week');
    const header = document.querySelector('.header');
    const newTask = document.querySelector('.newtask');
    const form = document.querySelector('.form-cont');
    const title = document.querySelector('.input-ttl');

    // Includes basic resetting code when each list item is clicked
    const Reset = () => {
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
        if (window.innerWidth < 900) {
            document.querySelector('.sidebar').classList.remove('sb-active');
            document.querySelector('.menu').classList.remove('opened');
        }
    };

    homePage.addEventListener('click', () => {
        Reset();
        newTask.removeAttribute('style');
        header.textContent = 'Home';
        const items = document.querySelectorAll('.item');
        items.forEach((item) => {
            item.removeAttribute('style');
        });
    });
    todayPage.addEventListener('click', () => {
        Reset();
        newTask.style.visibility = 'hidden';
        newTask.style.position = 'absolute';
        const today = format(new Date(), 'MM/dd/yyyy');
        list.forEach((item) => {
            const div = document.querySelectorAll('.item')[list.indexOf(item)];
            if (!item.due) {
                div.style.visibility = 'hidden';
                div.style.position = 'absolute';
            } else {
                const date = item.due.split('-');

                if (
                    format(
                        new Date(`${date[1]}-${date[2]}-${date[0]}`),
                        'MM/dd/yyyy'
                    ) !== today
                ) {
                    div.style.visibility = 'hidden';
                    div.style.position = 'absolute';
                }
            }
        });
        header.textContent = 'Today';
    });
}
