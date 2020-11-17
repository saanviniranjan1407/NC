const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;

function setup() {
  createCanvas(800,650);

  engine = Engine.create();
  world = engine.world; 

  bobObject1 = new Bob(400,300,20);
  roof = new Roof(400,100,600,30);

  Engine.run(engine); 
}

function draw() {
  background(150);

  bobObject1.display();
  roof.display();
}