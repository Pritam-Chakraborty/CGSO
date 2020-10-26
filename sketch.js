var wall,car;
var speed,height;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}