$(document).ready(() => {


    $("#cats").on("click", (function () {
        $("#images").empty();
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=cats%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
        displayGIF(queryURL);
    }));

    $("#garfield").on("click", (function () {
        $("#images").empty();
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=garfield%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
        displayGIF(queryURL);
    }));

    $("#pikachu").on("click", (function () {
        $("#images").empty();
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=cartoon+pikachu%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
        displayGIF(queryURL);
    }));

    $("#tiger").on("click", (function () {
        $("#images").empty();
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=tiger%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
        displayGIF(queryURL);
    }));

    $("#thunderstorm").on("click", (function () {
        $("#images").empty();
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=thunderstorm%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
        displayGIF(queryURL);
    }));

    $("#jumping").on("click", (function () {
        $("#images").empty();
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=jumping%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
        displayGIF(queryURL);
    }));

    $("#dancing").on("click", (function () {
        $("#images").empty();
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=dancing%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
        displayGIF(queryURL);
    }));

    $("#tornado").on("click", (function () {
        $("#images").empty();
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=tornado%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
        displayGIF(queryURL);
    }));

    $("#aircraft").on("click", (function () {
        $("#images").empty();
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=airplane+landing%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
        displayGIF(queryURL);
    }));

    $("#driving").on("click", (function () {
        $("#images").empty();
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=driving+accident%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
        displayGIF(queryURL);
    }));

    $("#topicList").bind('change', function () {
        switch ($('#topicList').val()) {
            case "Cats":
                $("#images").empty();
                queryURL = "http://api.giphy.com/v1/gifs/search?q=cats%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
                displayGIF(queryURL);
                break;
            case "Garfield":
                $("#images").empty();
                queryURL = "http://api.giphy.com/v1/gifs/search?q=garfield%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
                displayGIF(queryURL);
                break;
            case "Pikachu":
                $("#images").empty();
                queryURL = "http://api.giphy.com/v1/gifs/search?q=cartoon+pikachu%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
                displayGIF(queryURL);
                break;
            case "Tigers":
                $("#images").empty();
                queryURL = "http://api.giphy.com/v1/gifs/search?q=tiger%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
                displayGIF(queryURL);
                break;
            case "Thunderstorm":
                $("#images").empty();
                queryURL = "http://api.giphy.com/v1/gifs/search?q=thunderstorm%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
                displayGIF(queryURL);
                break;
            case "Jumpings":
                $("#images").empty();
                queryURL = "http://api.giphy.com/v1/gifs/search?q=jumping%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
                displayGIF(queryURL);
                break;
            case "Dancing":
                $("#images").empty();
                queryURL = "http://api.giphy.com/v1/gifs/search?q=dancing%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
                displayGIF(queryURL);
                break;
            case "Tornados":
                $("#images").empty();
                queryURL = "http://api.giphy.com/v1/gifs/search?q=tornado%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
                displayGIF(queryURL);
                break;
            case "Airplane Landings":
                $("#images").empty();
                queryURL = "http://api.giphy.com/v1/gifs/search?q=airplane%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
                displayGIF(queryURL);
                break;
            case "Driving Accidents":
                $("#images").empty();
                queryURL = "http://api.giphy.com/v1/gifs/search?q=driving+accident%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
                displayGIF(queryURL);
                break;
            default:
                alert('fuck');

        }
    });


    function displayGIF(topic) {
        let queryURL = topic;
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then((giphy) => {

            for (let i = 0; i < giphy.data.length; i++) {
                let imgPlayURL = giphy.data[i].images.fixed_width.url;
                let imgURL = giphy.data[i].images.fixed_width_still.url;
                let topicImg = $("<img>");
                topicImg.attr("src", imgURL);
                topicImg.attr("data-still", imgURL);
                topicImg.attr("data-animate", imgPlayURL);
                topicImg.attr("data-state", "still");
                topicImg.attr("id", "images")


                topicImg.addClass("gif");
                $("#images").prepend(topicImg);
            };

            $(".gif").on("click", function () {
                let state = $(this).attr("data-state");
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });
        });
    }



})
