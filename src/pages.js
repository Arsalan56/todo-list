// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from 'date-fns';

export default function Page(list) {
    const todayPage = document.querySelector('.today');
    const HideSide = () => {
        if (window.innerWidth < 900) {
            document.querySelector('.sidebar').classList.remove('sb-active');
            document.querySelector('.menu').classList.remove('opened');
        }
    };

    todayPage.addEventListener('click', () => {
        HideSide();
        const today = format(new Date(), 'MM/dd/yyyy');

        list.forEach((item) => {
            const date = item.due.split('-');

            if (
                format(
                    new Date(`${date[1]}-${date[2]}-${date[0]}`),
                    'MM/dd/yyyy'
                ) === today
            ) {
                console.log('today');
            } else {
                //
            }
        });
    });
}
