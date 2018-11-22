// Code for the flower to follow mouse cursor
var flower = document.getElementById("flower");
document.addEventListener("mousemove", getMouse);


flower.style.position = "absolute"; //css
var flowerpos = {x:0, y:0};

setInterval(followMouse, 50); //executes function followMouse every 50 msec

var mouse = {x:0, y:0}; //mouse.x, mouse.y

function getMouse(el){ //gets the mouse coordinates on the page
  mouse.x = el.pageX;
  mouse.y = el.pageY;
}

function followMouse(){ //updates flower position so as to follow the mouse
  //1. find distance X , distance Y
  var distX = mouse.x - flowerpos.x;
  var distY = mouse.y - flowerpos.y;
  //Easing motion
   //Progressive reduction of distance
  flowerpos.x += distX/2;
  flowerpos.y += distY/2;

  flower.style.left = flowerpos.x + "px";
  flower.style.top = flowerpos.y + "px";
}
