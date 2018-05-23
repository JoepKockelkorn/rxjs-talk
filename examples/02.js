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

const arrayObservable = createObservable(function(ob) {
    [10,20,30].forEach(ob.next);
    ob.complete();
});

arrayObservable
    //.map(x => x/10)
    .subscribe(observer);