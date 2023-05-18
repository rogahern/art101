// Function to sort name
function nameSort(name) {
    // Split, sort and join name
    let sortedName = name.split('').sort().join('');
    return sortedName;
}

// Function to handle button click
function handleClick() {
    // Get the user name input
    let userName = document.getElementById('user-name').value;

    // Sort the name
    let sortedName = nameSort(userName);

    // Get the output div
    let outputDiv = document.getElementById('output');

    // Clear previous output
    outputDiv.innerHTML = "";

    // Create a new p element
    let pElement = document.createElement('p');

    // Set the text of the p element
    pElement.textContent = "Hi, my name is " + sortedName + ".";

    // Append the p element to the output div
    outputDiv.appendChild(pElement);
}

// Add event listener to the button
let myButton = document.getElementById('my-button');
if(myButton) {
    myButton.addEventListener("click", handleClick);
}
else {
    console.log("Element not found");
}
