export default function GetForm(list) {
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
        } else {
            // Throw error in placeholder when title is empty
            title.setAttribute('placeholder', 'TITLE REQUIRED!');
            if (!title.classList.contains('error')) {
                title.classList.add('error');
            }
        }
    });
}
