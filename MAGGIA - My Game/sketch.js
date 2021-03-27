var ironMan;
var bg;
var ground;
var ironManAnimation;
var enemy;
var enemyGroup;
var repulsor;
var count=30;


function preload(){
    ironManAnimation=loadAnimation("Images/IRON MAN FLYING 1.png");
}



function setup(){

  createCanvas(1200,500);
  enemyGroup=new Group();
  repulsorGroup=new Group();
  ironMan=createSprite(900,270,30,30);
  ironMan.addAnimation("Iron Man",ironManAnimation);
  ironMan.scale=0.2;
  ground=createSprite(width/2,460,width*2,10);
  ground.velocityX=2;
}
function draw(){
  background(05,250,255);
  if(ground.x>1200){
    ground.x=width/2;
  }

  console.log(count)
  
  

  if(keyDown(UP_ARROW)){
    ironMan.y-=10;
  }

  if(keyDown(DOWN_ARROW)){
    ironMan.y+=10;
  }

  Repulsor()
  Enemy()
  drawSprites();
  
  textSize(30);
  stroke("black");
  text(count,width/2,40)
}





function Enemy(){
  if(frameCount%50===0){
    enemy = createSprite(0,random(100,400),50,80);
    enemy.velocityX=2;
    enemyGroup.add(enemy);
  }
}

function Repulsor(){
  if(keyDown("space")){
    repulsor=createSprite(900,ironMan.y,20,20);
    repulsor.velocityX=-10
    count=count-1
    repulsor.lifetime=120;
    repulsorGroup.add(repulsor)
    }


}