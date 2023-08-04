export default function GetForm(tasks) {
    const title = document.querySelector('.input-ttl');
    const ttl = title.value;
    let desc = document.querySelector('.input-desc');
    desc = desc.value ? desc.value : false;
    let prio = document.querySelector('.prio:checked') || false;
    prio = prio.value || false;
    let due = document.querySelector('.due-input');
    due = due.value ? due.value : false;
    let proj = document.querySelector('.proj');
    proj = proj.value ? proj.value : false;
    const task = { ttl, desc, prio, due, proj };
    tasks.push(task);

    // Reset inputs when done
    const rmv1 = document.querySelector('.input-desc');
    const rmv2 = document.querySelector('.prio:checked');
    const rmv3 = document.querySelector('.due-input');
    const rmv4 = document.querySelector('.proj');
    title.value = '';
    rmv1.value = '';
    if (rmv2) rmv2.checked = false;
    rmv3.value = '';
    rmv4.value = '';
}
