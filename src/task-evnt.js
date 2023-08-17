import { Projects } from './form';

export function Events(list) {
    const index = list.length - 1;
    const del = document.querySelectorAll(`.item`)[index].lastChild;
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
    const cbcont = del.parentNode;
    const edit = document.querySelectorAll('.edit')[index];
    const edtcover = document.querySelector('.edit-cover');
    // const edtcont = document.querySelector('.edit-cover > div');
    // const edtclose = document.querySelector('.edt-close');
    // const edtbtn = document.querySelector('.edit-cover button');
    const ttl2 = document.querySelector('.edit-ttl');
    const desc2 = document.querySelector('.edit-desc');
    const prio2 = document.querySelectorAll('.edit-prio');
    const due2 = document.querySelector('.edit-due');
    const proj2 = document.querySelector('.edit-proj');
    // const allItems = document.querySelectorAll('.item');
    // const newList = [];
    // for (let i = 0; i < allItems.length; i++) {
    //     newList.push(allItems[i]);
    // }
    // const ind = newList.indexOf(cbcont);
    // const item = list[ind];

    del.addEventListener('click', (e) => {
        console.log(cont);
        console.log(del.parentNode);
        cont.removeChild(del.parentNode);
        list.splice(newList.indexOf(cbcont), 1);
        e.stopPropagation();
    });

    const getInd = () => ind;
    // Make checkbox clearly show a task is completed
    checkbox.addEventListener('click', (e) => {
        cbcont.classList.toggle('done');
        e.stopPropagation();
    });

    cbcont.addEventListener('click', () => {
        title.textContent = item.ttl;
        desc.textContent = item.desc || 'No Description';
        prio.textContent = item.prio ? `Priority: ${item.prio}` : 'No Priority';
        if (item.due) {
            const dates = item.due.split('-');
            due.textContent = `Due: ${dates[1]}/${dates[2]}/${dates[0]}`;
        } else {
            due.textContent = 'No Due Date';
        }

        proj.textContent = item.proj ? `Project: ${item.proj}` : 'No Project';

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
        const allItems = document.querySelectorAll('.item');
        const newList = [];
        for (let i = 0; i < allItems.length; i++) {
            newList.push(allItems[i]);
        }
        const ind = newList.indexOf(cbcont);
        const item = list[ind];

        edtcover.style.visibility = 'visible';
        e.stopPropagation();
        ttl2.value = item.ttl;
        desc2.value = !item.desc ? '' : item.desc;
        prio2.value = !item.prio ? '' : item.prio;
        prio2.forEach((pr) => {
            if (pr.value === item.prio) {
                // eslint-disable-next-line no-param-reassign
                pr.checked = true;
            }
        });
        due2.value = !item.due ? '' : item.due;
        proj2.value = !item.proj ? '' : item.proj;
    });

    return { getInd };
}

export function Cover(list) {
    const Projs = Projects(list);
    const edtcont = document.querySelector('.edit-cover > div');
    const edtclose = document.querySelector('.edt-close');
    const edtbtn = document.querySelector('.edit-cover button');
    const ttl2 = document.querySelector('.edit-ttl');
    const desc2 = document.querySelector('.edit-desc');
    const edtcover = document.querySelector('.edit-cover');
    const due2 = document.querySelector('.edit-due');
    const proj2 = document.querySelector('.edit-proj');
    const due = document.querySelector('.dt-due');

    const retitle = () => {
        ttl2.placeholder = 'Title';
        ttl2.classList.remove('error');
    };

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
        const index = Events(list).getInd();
        console.log(index);
        const screenttl = document.querySelectorAll('.item > p')[index];
        const screendate = document.querySelectorAll('.item > div > p')[index];
        console.log(screenttl);

        // if (ttl2.value !== '') {
        //     ttl2.classList.remove('error');
        //     ttl2.setAttribute('placeholder', 'Title');
        //     edtcover.style.visibility = 'hidden';
        //     last.ttl = ttl2.value;
        //     last.desc = desc2.value ? desc2.value : false;
        //     const checkedprio =
        //         document.querySelector('.edit-prio:checked') || false;
        //     last.prio = checkedprio.value || false;
        //     last.due = due2.value ? due2.value : false;
        //     last.proj = proj2.value ? proj2.value : false;

        //     screenttl.textContent = last.ttl;
        //     if (last.due) {
        //         const dates = last.due.split('-');
        //         screendate.textContent = `${dates[1]}/${dates[2]}/${dates[0]}`;
        //     } else {
        //         due.textContent = 'No Due';
        //     }
        //     if (Projs.check()) {
        //         Projs.create();
        //     }
        // } else {
        //     // Throw error in placeholder when title is empty
        //     ttl2.setAttribute('placeholder', 'TITLE REQUIRED!');
        //     if (!ttl2.classList.contains('error')) {
        //         ttl2.classList.add('error');
        //     }
        // }
    });
}
