export default function Events(list) {
    const del = document.querySelector(`[data='${list.length - 1}']`);
    const cont = document.querySelector('.cont');
    const close = document.querySelector('.dt-close');
    const cover = document.querySelector('.cover');
    const checkbox = document.querySelectorAll('.cb')[list.length - 1];

    console.log(checkbox);
    del.addEventListener('click', (e) => {
        const index = del.getAttribute('data');
        cont.removeChild(del.parentNode);
        list.splice(index, 1);
        e.stopPropagation();
    });

    checkbox.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    const item = del.parentNode;
    item.addEventListener('click', () => {
        cover.style.visibility = 'visible';
    });

    close.addEventListener('click', () => {
        cover.style.visibility = 'hidden';
    });
}
