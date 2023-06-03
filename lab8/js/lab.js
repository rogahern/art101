/*
    Lab 8
    Experiment with map function and callback functions
*/

var numbers = [1, 2, 3, 4, 5];

function square(x) {
    return x * x;
}

console.log(numbers.map(square));

console.log(numbers.map(function(x) {
    return x * 2;
}));
