/*
    Lab 9
    Experiment with DOM manipulation
*/

// Get the output div
var outputEl = document.getElementById('output');

// Create a new paragraph element and set its innerHTML
var new1El = document.createElement('p');
new1El.innerHTML = 'This is the new paragraph 1.';

// Create another new paragraph element and set its innerHTML
var new2El = document.createElement('p');
new2El.innerHTML = 'This is the new paragraph 2.';

// Append the new paragraphs to the output div
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the CSS attributes of two elements
document.getElementById('challenge').style.color = 'red';
document.getElementById('problems').style.backgroundColor = 'yellow';
