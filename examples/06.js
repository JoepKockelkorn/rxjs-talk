const observer = {
    next: x => console.log(x),
    error: e => console.error(e),
    complete: () => console.log('done')
}

function map(transformFn) {
    const inputObservable = this;
    return createObservable(outputObserver => {
        inputObservable.subscribe({
            next: x => outputObserver.next(transformFn(x)),
            error: e => outputObserver.error(e),
            complete: () => outputObserver.complete()
        });
    });
}

function filter(conditionFn) {
    const inputObservable = this;
    return createObservable(outputObserver => {
        inputObservable.subscribe({
            next: x => {
                if (conditionFn(x)) {
                    outputObserver.next(x);
                }
            },
            error: e => outputObserver.error(e),
            complete: () => outputObserver.complete()
        });
    });
}

function createObservable(subscribeFn) {
    return {
        subscribe: subscribeFn,
        map: map,
        filter: filter
    };
}

const clickObservable = createObservable(function(ob) {
    document.addEventListener('click', ob.next);
})

clickObservable
    .map(event => event.clientX)
    .filter(x => x > 200)
    .subscribe(observer);