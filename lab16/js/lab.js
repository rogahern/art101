$(document).ready(function() {
    $.ajax({
        url: "https://xkcd.com/614/info.0.json",
        type: "GET",
        dataType : "json",
        success: function(data) {
            $('#comicTitle').text(data.title);
            $('#comicImg').attr({
                src: data.img,
                alt: data.alt,
                title: data.alt
            });
        },
        error: function (jqXHR, textStatus, errorThrown) { 
            console.log("Error:", textStatus, errorThrown);
        }
    });
});
