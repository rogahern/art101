let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // Array of numbers

// Named function to square a number
function square(x) {
    return x * x;
}

// Using map with the square function as a callback
let squaredNumbers = numbers.map(square);  // Squares of the numbers

// Using map with an anonymous function to get the square root of each number
let rootNumbers = numbers.map(function(x) {
    return Math.sqrt(x);
});  // Square roots of the numbers

// Get the output div
let outputDiv = document.getElementById('output');

// Set the innerHTML of the output div to the results
outputDiv.innerHTML = '<h3>Squared Numbers:</h3>' + squaredNumbers.join(', ') + 
                      '<h3>Square Root Numbers:</h3>' + rootNumbers.join(', ');
