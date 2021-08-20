
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var wall1
var wall2
function preload()
{
	
}

function setup() {
	createCanvas(600,400);
	
	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution : 0.4
		}
	   
		ball = Bodies.circle(100,20,20,ball_options)
		World.add(world,ball);

        //Create the Bodies Here

		ground =new Ground(200,390,800,20);
		

        wall1 =new Ground(300,350,20,60);
	    wall2 = new Ground(430,350,20,60);
		
		
		btn1 = createImg("up.png")
		btn1.position(20,30)
		btn1.size(50,50)
		btn1.mouseClicked(hforce)
		rectMode(CENTER);
		ellipseMode(RADIUS);
		

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);

  
  background(0);

  ground.show();
  wall1.show();
  wall2.show();
  
	ellipse(ball.position.x,ball.position.y,20)
	

  drawSprites();
}

  function hforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:-0.05})
  }
 




