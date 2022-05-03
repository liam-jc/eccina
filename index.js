

var screenHeight = document.documentElement.clientHeight;

// Make sections the height of viewport.
$(function(){ 
    var screenHeightElements = document.getElementsByClassName("screen-height");
    for (var i = 0; i < screenHeightElements.length; i++){
        screenHeightElements[i].style.height = screenHeight + "px";
    }
    
});

// window.addEventListener('resize', function(event){
//     var element = document.querySelector("#music-content");
//     var style = this.getComputedStyle(element);
//     var h = style.height;
//     console.log("height: " + h);
//     var newHeight = h + 100; 
//     var screenHeightElements = document.getElementsByClassName("screen-height");
//     for (var i = 0; i < screenHeightElements.length; i++){
//         screenHeightElements[i].style.height = newHeight + "px";
//     }
// });

window.addEventListener('resize', function(event){
    var screenHeight = document.documentElement.clientHeight;
    var musicImgSize = screenHeight * .25;
    var musicImgElement = document.getElementsByClassName("Music-img1");
    musicImgElement.style.width = musicImgSize + "px";
});


