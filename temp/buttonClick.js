const myElem = document.querySelector('#myElem');

function clickHandler(x) {
    console.log(`Clicked: ${x}`);
}

myElem.addEventListener('click', clickHandler);