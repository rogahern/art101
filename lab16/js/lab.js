$(document).ready(function() {
    $('#activate').click(function() {
        $.ajax({
            url: "https://xkcd.com/info.0.json",
            type: "GET",
            dataType : "json",
            success: function(data) {
                $('#output').empty();
                $('#output').append(`<h2>${data.title}</h2>`);
                $('#output').append(`<img src="${data.img}" title="${data.alt}" alt="${data.alt}">`);
            },
            error: function (jqXHR, textStatus, errorThrown) { 
                console.log("Error:", textStatus, errorThrown);
                $('#output').empty();
                $('#output').append('<p>Failed to fetch data</p>');
            }
        })
    });
});
