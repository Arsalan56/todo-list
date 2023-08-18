export function Events(list) {
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
    const checkbox = document.querySelectorAll('.cb')[index];
    const edit = document.querySelectorAll('.edit')[index];
    const edtcover = document.querySelector('.edit-cover');
    const ttl2 = document.querySelector('.edit-ttl');
    const desc2 = document.querySelector('.edit-desc');
    const prio2 = document.querySelectorAll('.edit-prio');
    const due2 = document.querySelector('.edit-due');
    const proj2 = document.querySelector('.edit-proj');

    // Delete tasks and re-organize data attribute
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

    // Toggle task completion
    checkbox.addEventListener('click', (e) => {
        del.parentNode.classList.toggle('done');
        e.stopPropagation();
    });

    // Show task information when task is clicked
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

    edit.addEventListener('click', (e) => {
        const ind = list[del.parentNode.getAttribute('data')];
        edtcover.style.visibility = 'visible';
        ttl2.value = ind.ttl;
        desc2.value = !ind.desc ? '' : ind.desc;
        due2.value = !ind.due ? '' : ind.due;
        proj2.value = !ind.proj ? '' : ind.proj;
        prio2.forEach((pr) => {
            if (pr.value === ind.prio) {
                // eslint-disable-next-line no-param-reassign
                pr.checked = true;
            }
        });
        e.stopPropagation();
    });
}

export function TaskInfo() {
    const cover = document.querySelector('.cover');
    const dtls = document.querySelector('.info-cont');
    const close = document.querySelector('.dt-close');

    // Close task info when x is clicked
    close.addEventListener('click', () => {
        cover.style.visibility = 'hidden';
    });

    // Close task info when grey cover is clicked
    cover.addEventListener('click', () => {
        cover.style.visibility = 'hidden';
        console.log('hi');
    });

    // Prevent task info page from closing when the div is clicked
    dtls.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}
