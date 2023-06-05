/*
Lab 12 JavaScript
Sorting Hat Functionality
*/

var houses = {
    "Gryffindor": "Known for bravery, nerve, and chivalry. Gryffindor's mascot is the lion, and its colors are scarlet and gold.",
    "Ravenclaw": "Known for intelligence and wisdom. Ravenclaw's mascot is the eagle, and its colors are blue and bronze (or silver in the films).",
    "Slytherin": "Known for cunning and ambition. Slytherin's mascot is the serpent, and its colors are green and silver.",
    "Hufflepuff": "Known for dedication, hard work and loyalty. Hufflepuff's mascot is the badger, and its colors are yellow and black."
};

function sortingHat(str) {
    var length = str.length;
    var mod = length % 4;

    var houseArray = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
    var house = houseArray[mod];
    return [house, houses[house]];
}

document.getElementById('button').addEventListener('click', function() {
    var name = document.getElementById('input').value;
    var houseInfo = sortingHat(name);
    var outputDiv = document.getElementById('output');
    var newParagraph = document.createElement('p');
    newParagraph.style.color = "red";
    newParagraph.textContent = "The Sorting Hat has sorted you into " + houseInfo[0] + ". " + houseInfo[1];
    outputDiv.appendChild(newParagraph);
});
