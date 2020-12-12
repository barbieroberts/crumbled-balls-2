
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var leftwall
var rightwall 
var bottomwall;
var ground;
var dustbinImage;


function preload(){
	dustbinImage=loadImge("dustbin.png")
	
}
function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paper=new Paper(100,280,50)
	 
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	//creating ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  leftwall = createSprite(580,290,20,100);
	 leftwall.shapeColor="red";
	 rightwall = createSprite(720,290,20,100);
	 rightwall.shapeColor="red";
	 bottomwall = createSprite(650,350,160,20);
	 bottomwall.shapeColor="red";
  drawSprites();
  paper.display();
 dustbinImage.display();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85})
}
}

