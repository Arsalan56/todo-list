/* eslint-disable no-param-reassign */
import { Projects } from './form';

const ttl2 = document.querySelector('.edit-ttl');
const edtcover = document.querySelector('.edit-cover');
const edtclose = document.querySelector('.edt-close');
let first = false; // variable to prevent multiple edit confirm calls
let check = 0;
const Close = () => {
    ttl2.placeholder = 'Title';
    ttl2.classList.remove('error');
    edtcover.style.visibility = 'hidden';
    first = false;
};

export function Events(list) {
    const Projs = Projects(list);
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
    const desc2 = document.querySelector('.edit-desc');
    const prio2 = document.querySelectorAll('.edit-prio');
    const due2 = document.querySelector('.edit-due');
    const proj2 = document.querySelector('.edit-proj');
    const ind = list[del.parentNode.getAttribute('data')];
    const edtbtn = document.querySelector('.edit-cover button');

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

    // Pencil button that shows edit page
    edit.addEventListener('click', (e) => {
        first = true;
        check = list.indexOf(ind);
        edtcover.style.visibility = 'visible';
        ttl2.value = ind.ttl;
        desc2.value = !ind.desc ? '' : ind.desc;
        due2.value = !ind.due ? '' : ind.due;
        proj2.value = !ind.proj ? '' : ind.proj;
        prio2.forEach((pr) => {
            if (pr.value === ind.prio) {
                pr.checked = true;
            }
        });
        e.stopPropagation();
    });

    // Edit confirm logic
    edtbtn.addEventListener('click', () => {
        if (ttl2.value !== '' && first) {
            const screenttl = document.querySelectorAll('.item > p')[check];
            const screendate =
                document.querySelectorAll('.item > div > p')[check];
            Close();
            // Change list info according to inputted values
            list[check].ttl = document.querySelector('.edit-ttl').value;
            list[check].desc = document.querySelector('.edit-desc').value
                ? document.querySelector('.edit-desc').value
                : false;
            list[check].prio =
                (document.querySelector('.edit-prio:checked') || false).value ||
                false;
            list[check].due = document.querySelector('.edit-due').value
                ? document.querySelector('.edit-due').value
                : false;
            list[check].proj = document.querySelector('.edit-proj').value
                ? document.querySelector('.edit-proj').value
                : false;
            screenttl.textContent = document.querySelector('.edit-ttl').value;
            if (list[check].due) {
                const dates = list[check].due.split('-');
                screendate.textContent = `${dates[1]}/${dates[2]}/${dates[0]}`;
            } else {
                due.textContent = 'No Due';
            }
            if (Projs.check()) {
                Projs.create();
            }
        } else if (ttl2.value === '') {
            // Throw error in placeholder when title is empty
            ttl2.setAttribute('placeholder', 'TITLE REQUIRED!');
            if (!ttl2.classList.contains('error')) {
                ttl2.classList.add('error');
            }
        }
    });
}

export function TaskInfo() {
    const cover = document.querySelector('.cover');
    const dtls = document.querySelector('.info-cont');
    const close = document.querySelector('.dt-close');
    const edtcont = document.querySelector('.edit-cover > div');

    // Close task info when x is clicked
    close.addEventListener('click', () => {
        cover.style.visibility = 'hidden';
    });

    // Close task info when grey cover is clicked
    cover.addEventListener('click', () => {
        cover.style.visibility = 'hidden';
    });

    // Prevent task info page from closing when the div is clicked
    dtls.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Close the edit page and set title placeholder to default
    edtcover.addEventListener('click', Close);
    edtclose.addEventListener('click', Close);
    edtcont.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}
