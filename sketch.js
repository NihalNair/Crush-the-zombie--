const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


var base1,base2,bridge;
var jointLink


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base1 = new Base(75, windowHeight/2+200, 150, 100);
  base2 = new Base(windowWidth-75, windowHeight/2+200, 150, 100);


  //Matter.Composite.add(bridge.body,jointPoint);
  bridge = new Bridge(15, width/4);


  Matter.Composite.add(bridge.body,base2);
  //jointLink = new Link(bridge,base2);
}

function draw() {
  background(51);

  base1.show();
  base2.show();
  bridge.show();

  Engine.update(engine);

}
