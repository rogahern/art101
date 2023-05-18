// index.js - purpose and description here
// Author: Roman
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it does and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");

  // Declare variables and output
  var myTransport = ["car", "bike", "bus", "walking"];
  var myMainRide = {
      make: "Toyota",
      model: "Corolla",
      color: "Blue",
      year: 2004,
      ownIt: true
  };

  document.writeln("Getting around: " + myTransport + "<br>");
  document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");

  // the code that makes everything happen
}

// let's get this party started
main();
