$(document).ready(() => {

    let api = "http://api.giphy.com/v1/gifs/search?";

    let apiKey = "&api_key=JjKJIuZ3TirvGEdcKy2gaMVWXTNnjv2F";

    let query = "&q=cats";

    $.ajax({
        url: api + apiKey + query,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
    
    
    
    /*function setup() {
        let url = api + apiKey + query;
        loadJSON(url.gotData);
   
    }*/
    
    




















});