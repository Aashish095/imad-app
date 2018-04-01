console.log('Loaded!');

// chAange the text of the main text div
var element = document.getElementById("main-text"
);
element.innerHTML ='aashish';

var img = document.getElementById("madi");
var marginleft = 0;
function moveRight (){
    marginleft = marginleft + 30;
    img.style.marginleft = marginleft + 'px';
}

img.onclick = function moveRight(){
    var Interval = setInterval(moveRight,100);

};