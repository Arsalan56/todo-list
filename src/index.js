import './events';
import { GetForm, Projects } from './form';
import Display from './display';
import { Events, Cover } from './task-evnt';
import './style.css';
import './add.svg';
import './github-icon.svg';
import './close.svg';
import './close-white.svg';
import './edit.svg';

const list = [];
Cover([list]);

const submit = document.querySelector('.form-cont button');
submit.addEventListener('click', () => {
    const title = document.querySelector('.input-ttl');
    const newtask = document.querySelector('.newtask > button');
    const form = document.querySelector('.form-cont');
    // Check if title input is given
    if (title.value !== '') {
        const Projs = Projects(list);
        title.classList.remove('error');
        title.setAttribute('placeholder', 'Title');
        newtask.parentNode.removeAttribute('style');
        form.classList.toggle('visible');

        GetForm(list);
        Display(list);
        Events(list);

        if (Projs.check()) Projs.create();
    } else {
        // Throw error in placeholder when title is empty
        title.setAttribute('placeholder', 'TITLE REQUIRED!');
        if (!title.classList.contains('error')) {
            title.classList.add('error');
        }
    }
});
