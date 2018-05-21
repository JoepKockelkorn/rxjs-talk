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

function createObservable(subscribeFn) {
    return {
        subscribe: subscribeFn,
        map: map
    };
}

const arrayObservable = createObservable(function(ob) {
    [10,20,30].forEach(ob.next);
    ob.complete();
})

arrayObservable
    .map(x => x/10)
    .subscribe(observer);