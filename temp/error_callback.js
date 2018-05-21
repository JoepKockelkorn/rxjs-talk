var data = [];

function callback(data) {
    // do something
}

function errorHandler(err) {
    console.log(err);
}

fetch('... some url')
    .then(callback)
    .catch(errorHandler);