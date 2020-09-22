var fixedRect, movingRect;
var rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect1 = createSprite(350,500,50,80);
  rect1.shapeColor = "red";
  rect1.velocityX = -2;
  
  rect2 = createSprite(200,500,50,80);
  rect2.shapeColor = "red";
  rect2.velocityX = 2;

  rect3 = createSprite(450,600,50,80);
  rect3.shapeColor = "yellow";
  rect3.velocityY = -2;

  rect4 = createSprite(450,500,50,80);
  rect4.shapeColor = "yellow";
  rect4.velocityY = 2;
}

function draw() {
  background(0,0,0);  
   Bounceoff(movingRect,fixedRect);
   Bounceoff(rect1,rect2);
   Bounceoff(rect3,rect4);
   if(isTouching(rect1,rect2)){
     rect1.shapeColor = "blue";
     rect2.shapeColor = "white";
   }
   
    else{
      rect1.shapeColor = "red";
      rect2.shapeColor = "red";
    }
    
  drawSprites();
}

function Bounceoff(object1,object2){
  if(object1.x - object2.x <object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2)
    {
      object1.velocityX = object1.velocityX *(-1);
      object2.velocityX = object2.velocityX *(-1);
    }
  if(object1.y - object2.y <object1.height/2 + object2.height/2 &&
    object2.y - object1.y <object1.height/2 + object2.height/2 ) 
    {
      object1.velocityY = object1.velocityY *(-1);
      object2.velocityY = object2.velocityY *(-1);
    }  
   

}

function isTouching(object1,object2){
  if(object1.x - object2.x <object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2 &&
    
   object1.y - object2.y <object1.height/2 + object2.height/2 &&
    object2.y - object1.y <object1.height/2 + object2.height/2 ) 
   {
     return true;
   }  
   else
     return false;
}