$('#activate').click(function() {
    $.ajax({
        url: "https://swapi.dev/api/people/1/",
        type: "GET",
        dataType : "json",
        success: function(data) {
            console.log(data);
            $('#output').html("Character Name: " + data.name);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    });
});
