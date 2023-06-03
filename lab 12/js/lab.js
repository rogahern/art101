/* 
Lab 12 JavaScript
Sorting Hat Functionality
*/

function sortingHat(str) {
    let length = str.length;
    let mod = length % 4;

    // Conditional block returning different houses based on mod value
    if (mod === 0) {
        return "Gryffindor";
    } else if (mod === 1) {
        return "Ravenclaw";
    } else if (mod === 2) {
        return "Slytherin";
    } else {
        return "Hufflepuff";
    }
}

// Add event listener to the button
$('#button').click(function() {
    let name = $('#input').val();
    let house = sortingHat(name);
    $('#output').append(`<p style="color: red;">The Sorting Hat has sorted you into ${house}</p>`);
});
