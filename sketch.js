var fixedRect, movingRect;
var gobj1, gobj2, obj3, obj4;
var robj1, robj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gobj1 = createSprite (100,100,50,50);
  gobj1.shapeColor = "green";
  gobj2 = createSprite (200,100,50,50);
  gobj2.shapeColor = "green";
  gobj3 = createSprite (300,100,50,50);
  gobj3.shapeColor = "green";
  gobj3 = createSprite (400,100,50,50);
  gobj3.shapeColor = "green";

  robj1 = createSprite(800, 100, 50, 80);
  robj1.shapeColor = "green";
  robj1.debug = true;
  robj2 = createSprite(800, 800,80,30);
  robj2.shapeColor = "green";
  robj2.debug = true;

  robj2.velocityY = -5;
  robj1.velocityY = +5;

}

function draw() {
  background("PINK");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gobj3)){
    movingRect.shapeColor = "blue";
    gobj3.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gobj3.shapeColor = "green";
  }

  if (robj2.x - robj1.x < robj1.width/2 + robj2.width/2
    && robj1.x - robj2.x < robj1.width/2 + robj2.width/2) {
  robj2.velocityX = robj2.velocityX * (-1);
  robj1.velocityX = robj1.velocityX * (-1);
}
if (robj2.y - robj1.y < robj1.height/2 + robj2.height/2
  && robj1.y - robj2.y < robj1.height/2 + robj2.height/2){
    robj2.velocityY = robj2.velocityY * (-1);
    robj1.velocityY = robj1.velocityY * (-1);
}

  drawSprites();
}

function isTouching (obj1,obj2){

  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
  return true;
}
else {
  return false;
}

}