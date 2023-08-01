import './events';
import GetForm from './form';
import './style.css';
import './add.svg';
import './github-icon.svg';
import './close.svg';
import './close-white.svg';

const list = [];

const submit = document.querySelector('.form-cont button');
submit.addEventListener('click', () => {
    GetForm(list);
    console.log(list);
});
