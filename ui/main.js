console.log('Loaded!');

// chAange the text of the main text div
var element = document.getElementById("main-text"
);
element.innerHTML ='aashish';

var img = document.getElementById("madi");

img.onclick = function(){
    var interval = setInterval(moveRight,100);

};