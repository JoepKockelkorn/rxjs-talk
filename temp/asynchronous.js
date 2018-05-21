var data = [];

fetch('... some url').then(newData => {
    data = newData;

    console.log('data retrieved');
});

console.log('hello!');

// hello!

// ...later
// data retrieved