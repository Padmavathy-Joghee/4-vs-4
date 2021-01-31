var secondPage,secondPageImg ;
var gameState=1;

var button,buttonImg;
var f1,f2,f3,f4;
var f1img;
var r1,r2,r3,r4;
var r1img;

function preload(){
  buttonImg=loadImage("Clickhere.png");
  secondPageImg=loadImage("4vs4image.png");
  f1img=loadImage("Fighter1.png")
  r1img=loadImage("R1.png");
  
}

function setup(){
createCanvas(800,800);
      secondPage=createSprite(400,400,800,800);
      secondPage.addImage(secondPageImg);
      secondPage.scale=2;
      secondPage.visible=false;

      button=createSprite(400,520);
      button.addImage(buttonImg);
      button.scale=0.7;
      
      f1=createSprite(70,130);
      f1.addImage(f1img);
      f1.scale=0.25;
      f1.visible=false;

      f2=createSprite(70,280);
      f2.addImage(f1img);
      f2.scale=0.25;
      f2.visible=false;

      f3=createSprite(70,460);
      f3.addImage(f1img);
      f3.scale=0.25;
      f3.visible=false;

      f4=createSprite(70,610);
      f4.addImage(f1img);      
      f4.scale=0.25;
      f4.visible=false;
      f4.debug=true 
      
      r1=createSprite(730,130);
      r1.addImage(r1img);
      r1.scale=0.25;
      r1.visible=false;

      r2=createSprite(730,280);
      r2.addImage(r1img);
      r2.scale=0.25;
      r2.visible=false;

      r3=createSprite(730,460);
      r3.addImage(r1img);
      r3.scale=0.25;
      r3.visible=false;

      r4=createSprite(730,610);
      r4.addImage(r1img);
      r4.scale=0.25;
      r4.visible=false;
      r4.debug=true;

}
function draw(){
  background("#1D7DE8");

  if(keyDown("right")){
    f1.velocityX=2;
    f2.velocityX=2;
    f3.velocityX=2;
    f4.velocityX=2;
  }
  if(keyDown("left")){
    r1.velocityX=-2;
    r2.velocityX=-2;
    r3.velocityX=-2;
    r4.velocityX=-2;
  }
    
    textSize(30);
    fill ("black");
    text("Welcome to 4 VS 4",270,50);

    textSize(30);
    fill ("white");
    text("Use Left & Right Arrow to Play",190,600);

    if(mousePressedOver(button)){
      button.visible=false;

      secondPage.visible=true;
      f1.visible=true;
      f2.visible=true;
      f3.visible=true;
      f4.visible=true;

      r1.visible=true;
      r2.visible=true;
      r3.visible=true;
      r4.visible=true;

    }
    
  
  if(r1.isTouching(f1)){
    gameState=2;

    f1.velocityX=0;
    f2.velocityX=0;
    f3.velocityX=0;
    f4.velocityX=0;

    r1.velocityX=0;
    r2.velocityX=0;
    r3.velocityX=0;
    r4.velocityX=0;

    if(keyDown("space")){
      r1.x=730;
      r1.y=130;
      r2.x=730;
      r2.y=280;
      r3.x=730;
      r3.y=460;
      r4.x=730;
      r4.y=610;

      f1.x=70;
      f1.y=130;
      f2.x=70;
      f2.y=280;
      f3.x=70;
      f3.y=460;
      f4.x=70;
      f4.y=610;
    }
  }

  

  drawSprites();
 
  if(gameState==2 && (730-r1.x)>(f1.x-70)){
    textSize(33);
    fill ("yellow");
    text("Team2 Won",330,30);
    textSize(23);
    text("Press Space to Start Again",265,55);
    gameState=1;
  }
  else if(gameState==2 && (730-r1.x)<(f1.x-70)){
    textSize(33);
    fill ("yellow");
    text("Team1 Won",330,30);
    textSize(23);
    text("Press Space to Start Again",265,55);
    gameState=1;
  }
  else if(gameState==2 && (730-r1.x)==(f1.x-70)){
    textSize(33);
    fill ("yellow");
    text("Draw",300,30);
    textSize(23);
    text("Press Space to Start Again",265,55);
    gameState=1;
  }
  
}
