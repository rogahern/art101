$(document).ready(function() {
    // SortingHat function
    function sortingHat(str) {
        let length = str.length;
        let mod = length % 4;
        let house;

        switch(mod) {
            case 0:
                house = "Gryffindor";
                break;
            case 1:
                house = "Ravenclaw";
                break;
            case 2:
                house = "Slytherin";
                break;
            default:
                house = "Hufflepuff";
                break;
        }
        return house;
    }

    // Event listener
    $("#button").click(function() {
        let name = $("#input").val();
        let house = sortingHat(name);
        $("#output").append("<p>The Sorting Hat has sorted you into " + house + "</p>");
    });
});
