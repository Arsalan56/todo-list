export default function Events(list) {
    const index = list.length - 1;
    const last = list[index];
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
    const dtls = document.querySelector('.info-cont');
    const cbcont = document.querySelector(`img[data='${index}']`).parentNode;
    const edit = document.querySelectorAll('.edit')[index];
    const edtcover = document.querySelector('.edit-cover');
    const edtcont = document.querySelector('.edit-cover > div');
    const edtclose = document.querySelector('.edt-close');
    const edtbtn = document.querySelector('.edit-cover button');
    const ttl2 = document.querySelector('.edit-ttl');
    const desc2 = document.querySelector('.edit-desc');
    const prio2 = document.querySelectorAll('.edit-prio');
    const due2 = document.querySelector('.edit-due');
    const proj2 = document.querySelector('.edit-proj');

    del.addEventListener('click', (e) => {
        const ind = del.getAttribute('data');
        cont.removeChild(del.parentNode);
        list.splice(ind, 1);
        e.stopPropagation();
    });

    // Make checkbox clearly show a task is completed
    checkbox.addEventListener('click', (e) => {
        cbcont.classList.toggle('done');

        e.stopPropagation();
    });

    const retitle = () => {
        ttl2.placeholder = 'Title';
        ttl2.classList.remove('error');
    };

    const item = del.parentNode;
    item.addEventListener('click', () => {
        title.textContent = last.ttl;
        desc.textContent = last.desc || 'No Description';
        prio.textContent = last.due ? `Priority: ${last.prio}` : 'No Priority';
        if (last.due) {
            const dates = last.due.split('-');
            due.textContent = `Due: ${dates[1]}/${dates[2]}/${dates[0]}`;
        } else {
            due.textContent = 'No Due Date';
        }

        proj.textContent = last.proj ? `Project: ${last.proj}` : 'No Project';

        cover.style.visibility = 'visible';
    });

    close.addEventListener('click', () => {
        cover.style.visibility = 'hidden';
    });

    dtls.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    cover.addEventListener('click', () => {
        cover.style.visibility = 'hidden';
    });

    edit.addEventListener('click', (e) => {
        edtcover.style.visibility = 'visible';
        e.stopPropagation();
        ttl2.value = last.ttl;

        desc2.value = !last.desc ? '' : last.desc;
        prio2.value = !last.prio ? '' : last.prio;
        prio2.forEach((pr) => {
            if (pr.value === last.prio) {
                console.log(pr.value);
                // eslint-disable-next-line no-param-reassign
                pr.checked = true;
            }
        });
        due2.value = !last.due ? '' : last.due;
        proj2.value = !last.proj ? '' : last.proj;
    });
    edtcover.addEventListener('click', () => {
        edtcover.style.visibility = 'hidden';
        retitle();
    });
    edtcont.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    edtclose.addEventListener('click', () => {
        edtcover.style.visibility = 'hidden';
        retitle();
    });

    edtbtn.addEventListener('click', () => {
        if (ttl2.value !== '') {
            ttl2.classList.remove('error');
            ttl2.setAttribute('placeholder', 'Title');
            edtcover.style.visibilty = 'hidden';

            // const last = last;
        } else {
            // Throw error in placeholder when title is empty
            title.setAttribute('placeholder', 'TITLE REQUIRED!');
            if (!title.classList.contains('error')) {
                title.classList.add('error');
            }
        }
    });
}
