
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball; 

function setup() {

  var canvas = createCanvas(400,400);
 
  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic: true 
  }

  ground = Bodies.rectangle(300,390,400,10,option);

  World.add(world,ground);

  var bounce = {
    restitution: 1
  }
  ball = Bodies.circle(200,100,25,bounce);
  World.add(world,ball);

}

function draw() {

background(0); 

Engine.update(engine);

rectMode(CENTER);
rect(ground.position.x,ground.position.y,600,10);

ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y, 20,20);

}