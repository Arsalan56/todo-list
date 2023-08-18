export default function Events(list) {
    const index = list.length - 1;
    const del = document.querySelectorAll(`.item`)[index].lastChild;
    const cont = document.querySelector('.cont');
    let items = document.querySelectorAll('.item');
    const title = document.querySelector('.dt-ttl');
    const desc = document.querySelector('.dt-desc');
    const prio = document.querySelector('.dt-prio');
    const due = document.querySelector('.dt-due');
    const proj = document.querySelector('.dt-proj');
    const cover = document.querySelector('.cover');

    del.addEventListener('click', (e) => {
        const delNode = del.parentNode;
        list.splice(delNode.getAttribute('data'), 1);
        cont.removeChild(delNode);
        let i = 0;
        items = document.querySelectorAll('.item');
        items.forEach((item) => {
            item.setAttribute('data', i++);
        });
        e.stopPropagation();
    });

    del.parentNode.addEventListener('click', () => {
        const ind = list[del.parentNode.getAttribute('data')];
        title.textContent = ind.ttl;
        desc.textContent = ind.desc || 'No Description';
        prio.textContent = ind.prio ? `Priority: ${ind.prio}` : 'No Priority';
        if (ind.due) {
            const dates = ind.due.split('-');
            due.textContent = `Due: ${dates[1]}/${dates[2]}/${dates[0]}`;
        } else {
            due.textContent = 'No Due Date';
        }
        proj.textContent = ind.proj ? `Project: ${ind.proj}` : 'No Project';
        cover.style.visibility = 'visible';
    });
}
