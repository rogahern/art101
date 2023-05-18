// lab.js
// Author: Roman
// Date: Today's Date

// Function to get the user's name and sort the letters
function sortUserName() {
    // Use window.prompt() to get the user's name
    var userName = window.prompt("Please enter your name:");
    
    // Convert the string to an array, sort the array, then convert it back to a string
    var sortedName = userName.split("").sort().join("");
  
    // Return the sorted name
    return sortedName;
  }
  
  // Call the function and output the result with document.writeln()
  document.writeln("Here is your sorted name: " + sortUserName());
  