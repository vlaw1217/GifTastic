$(document).ready(() => {

    let api = "https://api.giphy.com/v1/gifs/search?";
    let apiKey = "&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F";
    let query = "&q=smile cat";
    let limit = "&limit-10";
    let rating = "&rating=g";
    let topics = ["cats", "playing cats", "fighting cats", "eating cats", "sleeping cats", "poopoo cats", "baby kitten", "wild cats", "cat walk", "jumping cats"]



    $("#cats").on("click", (function(){
        $("#images").empty();
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=cats%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
        displayGIF(queryURL);
    }));

    $("#garfield").on("click", (function(){
        $("#images").empty();
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=garfield%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
        displayGIF(queryURL);
    }));

    $("#pikachu").on("click", (function(){
        $("#images").empty();
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=pikachu%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=12&action&rating=g";
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
                topicImg.attr("alt", "Cats");

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
