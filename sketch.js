var gameState="start";
var Collide=1;
var bgState=0;
var i=0;
var x=0;
var hiding=2;
var level=1;
function preload() {
  arrrows=loadImage("Images/arrows.png");
  spacebar=loadImage("Images/space.png");
  onoff=loadImage("Images/off.png");
  ninja1=loadAnimation("Images/1.png","Images/2.png","Images/3.png","Images/4.png","Images/5.png","Images/6.png");
  ninja=loadAnimation("Images/stand.png");
  star=loadImage("Images/star.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
   form();
   
  }

function draw() {
  if(bgState==0){
    background("white"); 
  }
else{
  background(30,30,30)
}  
  drawSprites();
  if(gameState==="play"){
    
    if(keyDown("right")){
      NinjaHattori.x=NinjaHattori.x+20;
      NinjaHattori.addAnimation("NinjaHattori",ninja1);
      NinjaHattori.changeAnimation("NinjaHattori",ninja1);
    }
    else{
      NinjaHattori.changeAnimation("Ninja",ninja);
    }
    if(keyDown("left")){
      NinjaHattori.x=NinjaHattori.x-20;
  
    }
    if(keyDown("up")&&NinjaHattori.y>212){
      NinjaHattori.velocityY=-15;
      
    } 
   console.log(hiding)
     if(level==2){ 
   if (keyWentDown("space")&&i===0) {
    x=1;
    
   }
   if(x===1){
     if(hiding==2){
      Bar1.y=-100
      Bar2.y=height/2+50
      Bar3.y = -150
     }
    bgState=1
      if(keyWentUp("space")){
       i=1;
      
      hiding=1
     }
     }
   
   if (keyWentDown("space")&&i===1) {
     x=0; 
   
   }
   
   if(x===0){
    if(hiding==1){
       Bar2.y=-100
      Bar1.y=height/2-150
      Bar3.y=height/2+250
    
    }
    bgState=0;
     if(keyWentUp("space")){
       i=0;
       
       hiding=2
     }
   }

  }
    NinjaHattori.velocityY=NinjaHattori.velocityY+1.5;
    NinjaHattori.collide(Block1.block);
    NinjaHattori.collide(Block2.block);
     if(NinjaHattori.isTouching(Star)){
       Block1.block.destroy();
       Block2.block.destroy();
       Bar1=createSprite(width/2,height/2-150,1000,15);
       Bar2=createSprite(width/2,height/2+50,1000,15);
       Bar3=createSprite(width/2,height/2+250,1000,15);
       Bar1.shapeColor=color(30,30,30);
       Bar2.shapeColor=color(225,225,225);
       Bar3.shapeColor=color(30,30,30);
       Star.y=height/2+200
       NinjaHattori.x = width/2-100;
       NinjaHattori.y=height/2-200;
       Collide=2;
    level=2;
       
     
      
      }
      if(Collide==2){
        NinjaHattori.collide(Bar1);
        NinjaHattori.collide(Bar2);
        NinjaHattori.collide(Bar3);
      }


  }
  



}