$(document).ready(() => {

    let api = "https://api.giphy.com/v1/gifs/search?";

    let apiKey = "&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F";

    let query = "&q=smile cat";

    let limit = "&limit-10";

    let rating = "&rating=g";


    let topics = ["cats", "playing cats", "fighting cats", "eating cats", "sleeping cats", "poopoo cats", "baby kitten", "wild cats", "cat walk", "jumping cats"]


    /*function setup() {
        let queryURL = api + apiKey + query + limit + rating;
        loadJSON(url.gotData);
    
    }*/

    $("#cats").on("click", (() => {
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=cats%22&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F&limit=10&action&rating=g";

        /*let stopPlayingAnimation = () => {
            catImg.addEventListner("click", playPlayingAnimation, true);*/
        /*$("#cats").gifplayer(() => {
            if (img = click)
            AnimationPlaybackEvent;
        }
    
        })*/


        $.ajax({
            url: queryURL,
            method: "GET",

        }).then((giphy) => {
            for (let i = 0; i < giphy.data.length; i++) {
                //let imgPauseURL = giphy.data[i].images.fixed_width_still.url;
                let imgURL = giphy.data[i].images.fixed_width_still.url;
                let catImg = $("<img>");
                //($("button").on("click", ".gif"(() => {
                //let imgPlayURL = giphy.data[i].images.fixed_width.url;
                catImg.attr("src", imgURL);
                catImg.attr("alt", "Cats");
                //if (click) {
                //    catImg.attr("src", src.replace(imgPlayURL));
                //} else {
                //    imgPauseURL

                //}
                /*let src = $(this).attr("src", imgURL);
                let alt = $(this).attr("alt", "cats")*/


              

                $("#images").prepend(catImg);
                //})));
            }
        });

    }));

});

