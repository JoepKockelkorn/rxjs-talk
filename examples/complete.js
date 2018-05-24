var value$ = Rx.Observable
    .fromEvent($('#search'), 'input')
    .map(event => event.target.value)
    .filter(value => value)
    .debounceTime(500)
    .distinctUntilChanged();

const search$ = value$
    .switchMap(value => get('https://api.github.com/search/users?per_page=100&q=' + encodeURI(value), myHeaders));

search$.subscribe(value => {
    $('table > tbody > tr').remove();
    value.items.forEach(item => addRow(item));
});