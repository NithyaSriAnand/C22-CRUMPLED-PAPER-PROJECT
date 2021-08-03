const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine , world;
var ground, ground1, left, right, ball, btn1 , btn2;


createEdgeSprites();

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95
  }

  btn1 = createImg('right.png');
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce);
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
  ground =new Ground(600,360,250,20);
  right = new Ground(465,310,20,120);
  left = new Ground(730,310,20,120);
 
  ground1 =new Ground(300,390,1200,20);

  

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);

  ground.show();
  ground1.show();
  
  left.show();
  right.show();
  
  

}


function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
if(ball.isTouching(ground1)){
  ball.velocityX = 0
  ball.velocityY = 0
  }
