import { format, addDays } from 'date-fns';

export default function Page(list) {
    const homePage = document.querySelector('.home');
    const todayPage = document.querySelector('.today');
    const weekPage = document.querySelector('.week');
    const header = document.querySelector('.header');
    const newTask = document.querySelector('.newtask');
    const form = document.querySelector('.form-cont');
    const title = document.querySelector('.input-ttl');
    const today = format(new Date(), 'MM/dd/yyyy');

    // Includes basic resetting code when each list item is clicked
    const Reset = () => {
        form.classList.remove('visible');
        title.classList.remove('error');
        title.setAttribute('placeholder', 'Title');
        newTask.style.visibility = 'hidden';
        newTask.style.position = 'absolute';
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
                } else {
                    div.removeAttribute('style');
                }
            }
        });
        header.textContent = 'Today';
    });

    weekPage.addEventListener('click', () => {
        Reset();
        header.textContent = 'Week';

        const week = [];
        // Get the dates for the next 7 days and add it to the week list
        for (let i = 0; i < 7; i++) {
            week.push(format(addDays(new Date(), i), 'MM/dd/yyyy'));
        }

        list.forEach((item) => {
            const div = document.querySelectorAll('.item')[list.indexOf(item)];
            if (!item.due) {
                div.style.visibility = 'hidden';
                div.style.position = 'absolute';
            } else {
                const date = item.due.split('-');
                const dt = format(
                    new Date(`${date[1]}-${date[2]}-${date[0]}`),
                    'MM/dd/yyyy'
                );
                if (week.includes(dt)) {
                    div.removeAttribute('style');
                } else {
                    div.style.visibility = 'hidden';
                    div.style.position = 'absolute';
                }
            }
        });
    });
}
