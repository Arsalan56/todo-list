export default function Events(list) {
    const index = list.length - 1;
    const del = document.querySelectorAll(`.item`)[index].lastChild;
    const cont = document.querySelector('.cont');
    let items = document.querySelectorAll('.item');

    del.addEventListener('click', () => {
        const delNode = del.parentNode;
        list.splice(delNode.getAttribute('data'), 1);
        cont.removeChild(delNode);
        let i = 0;
        items = document.querySelectorAll('.item');
        items.forEach((item) => {
            item.setAttribute('data', i++);
        });

        console.log(items);
    });
}
