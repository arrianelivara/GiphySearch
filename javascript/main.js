/* 1. Grab Input */

//add event listener to button
document.querySelector(".js-go").addEventListener('click',function(){
    //get input value
    var inp = document.querySelector("input").value;
    //printing to console for testing
    console.log(inp);
    GiphySearch(inp);
   

    
});


document.querySelector(".js-userinput").addEventListener('keyup',function(e){
    //get input value
    var inp = document.querySelector("input").value;
    //printing to console for testing
    console.log(inp);

    if(e.which == 13){
        GiphySearch(inp);
        
    }
    
});


/* 2. Do the data stuff with API */
function GiphySearch(inp){ 
    var url = "http://api.giphy.com/v1/gifs/search?q="+ inp + "&api_key=dc6zaTOxFJmzC";
    console.log(url);
    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();
    GiphyAJAXCall.addEventListener('load',function(e){

        var data = e.target.response;
        //console.log(data);
        pushToDOM(data);
    
        });
}

    

/* 3. Show GIFs */
function pushToDOM(inp){
    
    var response = JSON.parse(inp);
    var imageUrls = response.data;
    var container = document.querySelector(".js-container");
   
    container.innerHTML = "";
    imageUrls.forEach(function(image){
        
        
        setTimeout(function(){
            var src = image.images.fixed_height.url;
            console.log(src);
            container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";

        },1000);
        
    
      });
}

