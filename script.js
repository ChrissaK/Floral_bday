// Code for the flower to follow mouse cursor
var flower = document.getElementById("flower");
document.addEventListener("mousemove", getMouse);
document.addEventListener("touchstart", getTouchPos);


flower.style.position = "absolute"; //css
var flowerpos = {x:0, y:0};

setInterval(followMouse, 50); //executes function followMouse every 50 msec

var client = {x:0, y:0}; //mouse.x, mouse.y

function getMouse(el){ //gets the mouse coordinates on the page
  client.x = el.pageX;
  client.y = el.pageY;
}
function getTouchPos(e){
  client.x = e.touches[0].clientX;
  client.y = e.touches[0].clientY;
}

function followMouse(){ //updates flower position so as to follow the mouse
  //1. find distance X , distance Y
  var distX = client.x - flowerpos.x;
  var distY = client.y - flowerpos.y;
  //Easing motion
   //Progressive reduction of distance
  flowerpos.x += distX/2;
  flowerpos.y += distY/2;

  flower.style.left = flowerpos.x + "px";
  flower.style.top = flowerpos.y + "px";
}
