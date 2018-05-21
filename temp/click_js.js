var button = document.querySelector('button');

button.addEventListener('click', event => {
    if (event.clientX < 250) {
        // do something
    }
});