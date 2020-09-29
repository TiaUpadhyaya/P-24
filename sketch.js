
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground,bas1,bas2,bas3,paper;


function setup() {
	var canvas =createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
  
  ground = new Ground(400,50,800,20)
  bas1 = new Basket(100,70,50,20);
  bas2 = new Basket(80,120,20,80);
  bas3 = new Basket(120,120,20,80);
  paper = new Paper(680,120,25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  bas1.display();
  bas2.display();
  bas3.display();
  paper.display();
  
  drawSprites();
 
}



