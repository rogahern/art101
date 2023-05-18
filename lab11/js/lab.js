$(document).ready(function() {
    // Button creation
    const sections = ["challenge", "problems", "results"];
    for (const section of sections) {
        const button = $("<button>")
            .text("Toggle special class")
            .click(function() {
                $("#" + section).toggleClass("special");
            });
        $("#" + section).append(button);
    }
});
