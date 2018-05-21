const { fromEvent } = rxjs;
const { map, filter } = rxjs.operators;

const clickObservable = fromEvent(document, 'click');

const filteredObservable = clickObservable.pipe(
    map(event => event.clientX),
    filter(x => x > 200)
);

filteredObservable.subscribe(
    x => console.log(x),
    e => console.error(e),
    () => console.log('done')
);