const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var world;
var bgImg;
var snowflake1,snowflake2,snowflake3,snowflake4,snowflake5,snowflake6,snowflake7,snowflake8,snowflake9;

function setup() {
  createCanvas(800,400);
	engine = Engine.create();
	world = engine.world;

  snowflake1=new Snow(10,50,30);
  snowflake2=new Snow(110,50,30);
  snowflake3=new Snow(210,50,30);
  snowflake4=new Snow(310,50,30);
  snowflake5=new Snow(410,50,30);
  snowflake6=new Snow(510,50,30);
  snowflake7=new Snow(610,50,30);
  snowflake8=new Snow(710,50,30);
  snowflake9=new Snow(550,50,30);

  Engine.run(engine);
}

function preload(){
  bgImg = loadImage("snow1.jpg");
}

function draw() {
  //background(255,255,255);  

  if(bgImg)
    background(bgImg);

  snowflake1.display();
  snowflake2.display();
  snowflake3.display();
  snowflake4.display();
  snowflake5.display();
  snowflake6.display();
  snowflake7.display();
  snowflake8.display();
  snowflake9.display();

  drawSprites();
}