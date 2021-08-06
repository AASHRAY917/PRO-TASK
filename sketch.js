var sea,ship,bird;
var seaImg,shipImg;
var birdImg;


function preload()
{
    seaImg = loadImage("sea.png");
    birdImg = loadImage("bird.jpg");

}

function setup()
{ 
  createCanvas(400,400);
  background("blue");

  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale = 0.3;

  
   bird = createSprite(130,200,30,30);
   bird.addAnimation("movingBird",birdImg);
   bird.scale = 0.25;
   




  

}

function draw() 
{

  background(0);
  sea.velocityX = -3;
  bird.velocityX = 3;

  if(sea.x<0)
  {
     sea.x = sea.width/8;

  }

  if(bird.x<400)
  {
     bird.x = bird.width/20;

  }
  drawSprites();
}