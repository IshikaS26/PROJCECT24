const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1 , rubber2 ;
var iron1 ;
var stone1 , stone2 , stone3 , stone4 ;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    rubber1 = new Rubber (400,400,50);
    rubber2 = new Rubber (600,400,50);

    iron1 = new Iron (500,400);

    stone1 = new Stone (700,400,PI/2);
    stone2 = new Stone (750,400,PI/2);
    stone3 = new Stone (800,400,PI/2);
    stone4 = new Stone (850,400,PI/2);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();

    hammer.display();

    rubber1.display();
    rubber2.display();

    iron1.display();

    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
 
}