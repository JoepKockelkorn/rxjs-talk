function get(url, headers) {
    return Rx.Observable.create(observer => {
        const req = new XMLHttpRequest();
        req.open('GET', url);
        for (const headerName in headers) {
            if (headers.hasOwnProperty(headerName)) {
                req.setRequestHeader(headerName, headers[headerName])
            }
        }
        req.onload = () => {
            if (req.status === 200) {
                // observer.error(new Error(req.statusText));
                observer.next(JSON.parse(req.response));
                observer.complete();
            } else {
                observer.error(new Error(req.statusText));
            }
        };

        req.onerror = () => {
            observer.error(new Error('An error occured'));
        };

        req.send();
        return () => req.abort();
    });
}

function addRow(user) {
    var newRow = $('<tr>');
    newRow.append(createCell(user.login));
    newRow.append(createCell('<img class="img-thumbnail" src="'+ user.avatar_url + '">'));
    newRow.append(createCell('<a href="' + user.url + '">Link<a>'));
    $('table').append(newRow);
}

function createCell(data) {
    return '<td>' + data + '</td>';
}