export function GetForm(tasks) {
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

export function Projects(list) {
    const projs = document.querySelectorAll('.projects > li');
    const allProj = [];
    const check = () => {
        projs.forEach((proj) => {
            allProj.push(proj.textContent);
        });
        return !allProj.includes(list[list.length - 1].proj);
    };

    const create = () => {
        if (list[list.length - 1].proj) {
            const cont = document.querySelector('.projects');
            const project = document.createElement('li');
            const projttl = document.createElement('p');
            const projrmv = document.createElement('img');

            projttl.textContent = list[list.length - 1].proj;
            projrmv.setAttribute('src', '9e963c8ceba7ebf6ced7.svg');
            projrmv.setAttribute('alt', 'delete project');
            cont.appendChild(project);
            project.appendChild(projttl);
            project.appendChild(projrmv);
            projrmv.addEventListener('click', (e) => {
                for (let i = 0; i < list.length; i++) {
                    if (list[i].proj === projrmv.previousSibling.textContent) {
                        // eslint-disable-next-line no-param-reassign
                        list[i].proj = false;
                    }
                }
                cont.removeChild(project);
                e.stopPropagation();
                document.querySelector('.home').click();
            });
            project.addEventListener('click', () => {
                const header = document.querySelector('.header');
                const newTask = document.querySelector('.newtask');
                const form = document.querySelector('.form-cont');
                const title = document.querySelector('.input-ttl');

                // Reset and hide side bar along with new task page
                header.textContent = projttl.textContent;
                form.classList.remove('visible');
                title.classList.remove('error');
                title.setAttribute('placeholder', 'Title');
                newTask.style.visibility = 'hidden';
                newTask.style.position = 'absolute';
                const rmv1 = document.querySelector('.input-desc');
                const rmv2 = document.querySelector('.prio:checked');
                const rmv3 = document.querySelector('.due-input');
                const rmv4 = document.querySelector('.proj');
                title.value = '';
                rmv1.value = '';
                if (rmv2) rmv2.checked = false;
                rmv3.value = '';
                rmv4.value = '';
                if (window.innerWidth < 900) {
                    document
                        .querySelector('.sidebar')
                        .classList.remove('sb-active');
                    document.querySelector('.menu').classList.remove('opened');
                }

                // Filter

                list.forEach((item) => {
                    const div =
                        document.querySelectorAll('.item')[list.indexOf(item)];

                    if (item.proj === projttl.textContent) {
                        div.removeAttribute('style');
                    } else {
                        div.style.visibility = 'hidden';
                        div.style.position = 'absolute';
                    }
                });
            });
        }
    };
    return { check, create };
}
