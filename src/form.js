export default function GetForm(tasks) {
    const submit = document.querySelector('.form-cont button');
    submit.addEventListener('click', () => {
        const title = document.querySelector('.input-ttl');
        const newtask = document.querySelector('.newtask > button');
        const form = document.querySelector('.form-cont');

        if (title.value !== '') {
            title.classList.remove('error');
            title.setAttribute('placeholder', 'TITLE');
            newtask.parentNode.removeAttribute('style');
            form.classList.toggle('visible');

            const ttl = title.value;
            let desc = document.querySelector('.input-desc');
            desc = desc.value ? desc.value : false;
            let prio = document.querySelectorAll('.prio:checked');
            prio = prio[0].value ? prio[0].value : false;
            let due = document.querySelector('.due-input');
            due = due.value ? due.value : false;
            let project = document.querySelector('.proj');
            project = project.value ? project.value : false;

            const task = { ttl, desc, prio, due, project };
            tasks.push(task);
            console.log(tasks);
        } else {
            // Throw error in placeholder when title is empty
            title.setAttribute('placeholder', 'TITLE REQUIRED!');
            if (!title.classList.contains('error')) {
                title.classList.add('error');
            }
        }
    });
}
