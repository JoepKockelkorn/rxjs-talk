var button = document.querySelector('button');

var click$ = Rx.Observable.fromEvent(button, 'click');
var filteredClick$ = click$.filter(event => event.clientX < 250);

filteredClick$.subscribe(() => {
    // doe iets...
});