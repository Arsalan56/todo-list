export default function Events(list) {
    const del = document.querySelector(`[data='${list.length - 1}']`);
    const cont = document.querySelector('.cont');
    del.addEventListener('click', () => {
        const index = del.getAttribute('data');
        cont.removeChild(del.parentNode);
        list.splice(index, 1);
    });

    const item = del.parentNode;
    item.addEventListener('click', () => {});
}
