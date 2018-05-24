// var click$ = Rx.Observable.fromEvent($('.input-group-text'), 'click');
// var username$ = Rx.Observable.fromEvent($('#username'), 'input').map(event => event.target.value);
// var password$ = Rx.Observable.fromEvent($('#password'), 'input').map(event => event.target.value);
var input$ = Rx.Observable.fromEvent($('#search'), 'input');
var value$ = input$.map(event => event.target.value);
// var enter$ = Rx.Observable.fromEvent($('#search'), 'keyup').filter(e => e.keyCode == 13);

// var trigger$ = Rx.Observable.merge(enter$, click$);
var userSearch$ = value$
    .debounceTime(500)
    .distinctUntilChanged();
// trigger$
//     .withLatestFrom(value$)
//     .map(values => values[1])
//     .distinctUntilChanged()
//     .filter(value => value !== '');
var search$ = userSearch$
    // .withLatestFrom(username$, password$)
    .switchMap(value => {
        return get(
            'https://api.github.com/search/users?per_page=100&q=' + encodeURI(value),
            { 'Authorization': 'Basic ' + btoa(confidential.username + ':' + confidential.pw) }
        );
            // .retry(2);
    });

search$.subscribe(value => {
    $('table > tbody > tr').remove();
    value.items.forEach(item => addRow(item));
});