export default function Display(list) {
    const last = list[list.length - 1];

    const cont = document.querySelector('.cont');
    const item = document.createElement('div');
    const cb = document.createElement('input');
    const ttl = document.createElement('p');
    const duecont = document.createElement('div');
    const due = document.createElement('p');
    const del = document.createElement('img');

    ttl.textContent = last.ttl;
    if (last.due) {
        const dates = last.due.split('-');
        due.textContent = `${dates[1]}/${dates[2]}/${dates[0]}`;
    } else {
        due.textContent = 'No Due';
    }
    item.setAttribute('class', 'item');
    del.setAttribute('src', '9e963c8ceba7ebf6ced7.svg');
    del.setAttribute('data', list.length - 1);
    cb.setAttribute('type', 'checkbox');
    cb.classList.add('cb');

    cont.insertBefore(item, document.querySelector('.newtask'));
    item.appendChild(cb);
    item.appendChild(ttl);
    item.appendChild(duecont);
    duecont.appendChild(due);
    item.appendChild(del);
}
