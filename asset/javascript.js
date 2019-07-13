$(document).ready(function(){

    let api = "https://api.giphy.com/v1/gifs/search?";
    let apiKey = "&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F";
    let query = "&q=smile cat";
    let limit = "&limit-10";
    let rating = "&rating=g";
    let topics = ["cats", "playing cats", "fighting cats", "eating cats", "sleeping cats", "poopoo cats", "baby kitten", "wild cats", "cat walk", "jumping cats"]



    $("#cats").on("click", (() => {

        let queryURL = "http://api.giphy.com/v1/gifs/search?q=cats%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=10&action&rating=g";

        $.ajax({

            url: queryURL,
            method: "GET",

        }).then(function(giphy) {

            for (let i = 0; i < giphy.data.length; i++) {

                let imgPlayURL = giphy.data[i].images.fixed_width.url;
                let imgURL = giphy.data[i].images.fixed_width_still.url;
                let catImg = $("<img>");

                catImg.attr("src", imgURL);
                catImg.attr("data-still", imgURL);
                catImg.attr("data-animate", imgPlayURL);
                catImg.attr("data-state", "still");
                catImg.attr("class", "gif");
                catImg.attr("alt", "Cats");

                $("#images").prepend(catImg);
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


    }));

})
