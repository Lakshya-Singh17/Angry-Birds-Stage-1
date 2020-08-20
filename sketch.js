const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var ground,red;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,730,80,80);
    box2 = new Box(1000,730,80,80);
    box3 = new Box(800,635,80,80);
    box4 = new Box(1000,635,80,80);
    box5 = new Box(900,535,80,80);

    red = new Bird(200,200);

    pig1 = new Pig(900,750);
    pig2 = new Pig(900,650);

    log1 = new Log(900,700,285,PI/2);
    log2 = new Log(900,600,285,PI/2);
    log3 = new Log(850,450,150,PI/7);
    log4 = new Log(950,450,150,-(PI/7));

    ground = new Ground(600,790,1200,20);
}

function draw(){
    background(200);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    red.display();
    ground.display();
}