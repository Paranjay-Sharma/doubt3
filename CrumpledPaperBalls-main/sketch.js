
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, paper1, ground, dustbin1, dustbin2, dustbin3; 
function setup() {
    createCanvas(800, 1000);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new Paper(100,600, 15);
    ground = new Ground(400,680,800,20);
    dustbin1 = new dustbin(600,660,10, 15);
  
    

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background("aqua");
  
  //Engine.update(engine);
    
  paper1.display();

  dustbin1.display();

  ground.display();


  
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 20,y: -50})
    }
  }



