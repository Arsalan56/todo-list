import './events';
import GetForm from './form';
import Display from './display';
import './style.css';
import './add.svg';
import './github-icon.svg';
import './close.svg';
import './close-white.svg';

const list = [];

const submit = document.querySelector('.form-cont button');
submit.addEventListener('click', () => {
    const title = document.querySelector('.input-ttl');
    const newtask = document.querySelector('.newtask > button');
    const form = document.querySelector('.form-cont');

    // Check if title input is given
    if (title.value !== '') {
        title.classList.remove('error');
        title.setAttribute('placeholder', 'TITLE');
        newtask.parentNode.removeAttribute('style');
        form.classList.toggle('visible');
        GetForm(list);
        Display(list);
    } else {
        // Throw error in placeholder when title is empty
        title.setAttribute('placeholder', 'TITLE REQUIRED!');
        if (!title.classList.contains('error')) {
            title.classList.add('error');
        }
    }
});
