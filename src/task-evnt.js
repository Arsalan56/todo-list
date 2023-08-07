export default function Events(list) {
    const index = list.length - 1;
    const del = document.querySelector(`[data='${index}']`);
    const cont = document.querySelector('.cont');
    const close = document.querySelector('.dt-close');
    const cover = document.querySelector('.cover');
    const checkbox = document.querySelectorAll('.cb')[index];
    const title = document.querySelector('.dt-ttl');
    const desc = document.querySelector('.dt-desc');
    const prio = document.querySelector('.dt-prio');
    const due = document.querySelector('.dt-due');
    const proj = document.querySelector('.dt-proj');

    console.log(title);

    del.addEventListener('click', (e) => {
        const ind = del.getAttribute('data');
        cont.removeChild(del.parentNode);
        list.splice(ind, 1);
        e.stopPropagation();
    });

    checkbox.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    const item = del.parentNode;
    item.addEventListener('click', () => {
        title.textContent = list[index].ttl;
        desc.textContent = list[index].desc || 'No Description';
        prio.textContent = `Priority: ${list[index].prio}` || 'No Priority';
        if (list[index].due) {
            const dates = list[index].due.split('-');
            due.textContent = `Due: ${dates[1]}/${dates[2]}/${dates[0]}`;
        } else {
            due.textContent = 'No Due';
        }
        due.textContent = `Priority: ${list[index].due}` || 'No Due';

        proj.textContent = `Project: ${list[index].proj}` || 'No Project';

        cover.style.visibility = 'visible';
    });

    close.addEventListener('click', () => {
        cover.style.visibility = 'hidden';
    });
}
