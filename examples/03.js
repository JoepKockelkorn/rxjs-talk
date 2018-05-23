const observer = {
    next: x => console.log(x),
    error: e => console.error(e),
    complete: () => console.log('done')
};

function createObservable(subscribeFn) {
    return {
        subscribe: subscribeFn
    };
}

const clickObservable = createObservable(function(ob) {
    document.addEventListener('click', ob.next);
});

clickObservable.subscribe(observer);