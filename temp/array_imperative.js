var array = [14, 9, 5, 2, 10, 13, 4];

var newArray = [];

for (let i = 0; i < array.length; i++) {
    const el = array[i];
    if (el % 2 === 0) {
        newArray.push(el);
    }
}

console.log(newArray); // [ 14, 2, 10, 4 ]