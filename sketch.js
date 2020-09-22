var trex,trex_running,trex_collided;
var ground,ground2
var play=1,over=0,gamestate=play;



function preload() {
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png"); 
  ground2=loadImage("ground2.png");
  
}

function setup() {
  createCanvas(400,400);
  trex = createSprite (100,300,20,20) ;
  trex.addAnimation("running",trex_running);
  trex.scale=0.45;
  
  ground = createSprite (200,322,400,5);
  ground.addImage (ground2);
  
}

function draw() {
  background(220);
    
  if (gamestate===play){

    ground.velocityX=-6;                         
  
    if (ground.x<0)    
    ground.x=200  
         
    if (keyDown("space")) {
     trex.velocityY=-6; 
     
    }   
       
    trex.velocityY=trex.velocityY+0.5;
         
    trex.collide(ground);      
  }  
  
  
  
  drawSprites ();
}