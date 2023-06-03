$(document).ready(function() {
    // FizzBuzz function
    function fizzBuzz() {
        let oneLongString = "";
        for (let i = 1; i <= 200; i++) {
            let str = i.toString() + " ";
            if (i % 3 === 0) str += "Fizz";
            if (i % 5 === 0) str += "Buzz";
            if (i % 7 === 0) str += "Boom";
            oneLongString += str + "<br>";
        }
        $("#output").html(oneLongString);
    }

    // Call the function
    fizzBuzz();
});
