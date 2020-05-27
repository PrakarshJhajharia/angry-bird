const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var  a;
var wer = 0;
var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var level = 1;
var gameState = "onSling";
var bg = "sprites/backgroundmain.jpg";
var score = 0;
var invi,inv,invis;
var reset;
var res;
var c = 0;
var opt;
var lev = 1;
var dis = 0;
var le = 0;
function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
   
    world = engine.world;

    reset = new Reset(150,30,50,50)
    bird = new Bird(200,200);
    slingshot = new SlingShot(bird.body,{x:150, y:180});
    ground = new Ground(850,500,550,200);
    platform = new Platform(200, 680, 500, 800);
    invi = new Invisible(200,400,100,10)
    inv = new Invisible(830,420,470,10)
    invis = new Invisible(630,470,10,100)
    
    

   /*
   //LEVEL 1
    box53 = new Box(810,285,70,70);
    box5 = new Box(810,365,70,70);
    pig1 = new Pig(920, 400);
    pig2 = new Pig(700, 400);
    pig11 = new Pig(920, 295);
    pig21 = new Pig(700, 295);
    pig12 = new Pig(920, 215);
    pig22 = new Pig(700, 215);
    box52 = new Box(810,205,70,70);
    log2 = new Log(810,10,350,PI/2)
    log1 = new Logy(650,320,70, PI);
   log11 = new Logy(650,250,65, PI);
   log111 = new Logy(650,120,60, PI);
   log1111 = new Logy(650,50,60, PI);
   log11111 = new Logy(970,320,70, PI);
   log111111 = new Logy(970,250,65, PI);
   log1111111 = new Logy(970,120,60, PI);
   log11111111 = new Logy(970,50,60, PI);
   log5 = new Log(810,330,270, PI/2);
   log51 = new Log(810,240,270, PI/2);

   */
  /*
  //LEVEL 2
    box1 = new Box(650,320,70,70);
    box2 = new Box(970,320,70,70);
    pig1 = new Pig(920, 400);
    log1 = new Log(910,260,195, PI/2);
   
   log12 = new Log(705,260,210, PI/2);
    pig2 = new Pig(700, 400);
    box3 = new Box(720,240,70,70);
    box4 = new Box(900,240,70,70);
   pig3 = new Pig(810, 220);
    box6 = new Box(810,320,70,70)
    log3 =  new Log(810,180,260, PI/2);

    box5 = new Box(810,160,70,70);
   
   tri = new Triangle(655,240,70,-PI/2)
    tri1 = new Triangle(950,240,65,0)
    tri3 = new Triangle(740,160,70,-PI/2)
    tri2 = new Triangle(885,160,65,0)
*/
/*
//LEVEL 3
  box1 = new Boxy(650,320,70,70);
  box2 = new Boxy(970,320,70,70);
  pig1 = new Boxy(900, 390,70,70);
  log1 = new Log(810,260,400, PI/2);

  pig2 = new Boxy(720, 390,70,70);
  box3 = new Boxy(720,240,70,70);
  box4 = new Boxy(900,240,70,70);
 pig3 = new Pig(810, 400);
  box6 = new Boxy(810,210,70,70)
  log3 =  new Log(810,180,260, PI/2);

 
 tri = new Triangle(655,240,70,-PI/2)
  tri1 = new Triangle(950,240,65,0)
*/
}

function draw(){
    
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text( score, 1100, 50)
    
    Engine.update(engine);
    strokeWeight(4);
   
   
   
   
   
   
   
   
   
   
   
   
   
    
    if(score == 0 ){
        lev = 1;
    }
    else if(score == 1200 ){
        lev = 2;
    }
    else if(score == 1800 ){
        lev = 3;
    }
    else if(score == 2000){
        lev = 4;
    }

    if(lev ==  1 && le!=1){
        gameState = "onSling";
        
           //LEVEL 1
    box53 = new Box(810,285,70,70);
    box5 = new Box(810,365,70,70);
    pig1 = new Pig(920, 400);
    pig2 = new Pig(700, 400);
    pig11 = new Pig(920, 295);
    pig21 = new Pig(700, 295);
    pig12 = new Pig(920, 215);
    pig22 = new Pig(700, 215);
    box52 = new Box(810,205,70,70);
    log2 = new Log(810,10,350,PI/2)
    log1 = new Logy(650,320,70, PI);
   log11 = new Logy(650,250,65, PI);
   log111 = new Logy(650,120,60, PI);
   log1111 = new Logy(650,50,60, PI);
   log11111 = new Logy(970,320,70, PI);
   log111111 = new Logy(970,250,65, PI);
   log1111111 = new Logy(970,120,60, PI);
   log11111111 = new Logy(970,50,60, PI);
   log5 = new Log(810,330,270, PI/2);
   log51 = new Log(810,240,270, PI/2);
        le = 1;
   
    dis = 1;
    
    
    }
    
    if(lev == 2 && le!=2){
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body,{x:200, y:200});
        slingshot.attach(bird.body);    
        gameState = 'onSling';
       
       World.remove(world,box53)
       
       World.remove(world,box5)
       World.remove(world,pig1)
       World.remove(world,pig2)
       World.remove(world,pig11)
       World.remove(world,pig22)
       World.remove(world,pig21)
       World.remove(world,pig12)
       World.remove(world,box52)
       World.remove(world,log2)
       World.remove(world,log1)
       World.remove(world,log11)
       World.remove(world,log111)
       World.remove(world,log1111)
       World.remove(world,log11111)
       World.remove(world,log111111)
       World.remove(world,log11111111)
       World.remove(world,log1111111)
       World.remove(world,log5)
       World.remove(world,log51)
       
        //LEVEL 2
    box1 = new Box(650,320,70,70);
    box2 = new Box(970,320,70,70);
    pig1 = new Pig(920, 400);
    log1 = new Log(910,260,195, PI/2);
   
   log12 = new Log(705,260,210, PI/2);
    pig2 = new Pig(700, 400);
    box3 = new Box(720,240,70,70);
    box4 = new Box(900,240,70,70);
   pig3 = new Pig(810, 220);
    box6 = new Box(810,320,70,70)
    log3 =  new Log(810,180,260, PI/2);

    box5 = new Box(810,160,70,70);
   
   tri = new Triangle(655,240,70,-PI/2)
    tri1 = new Triangle(950,240,65,0)
    tri3 = new Triangle(740,160,70,-PI/2)
    tri2 = new Triangle(885,160,65,0)

        
        le = 2;
        dis = 2;
    }

    if(lev == 3 && le!=3){
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body,{x:200, y:200});
        slingshot.attach(bird.body);    
        gameState = 'onSling';
        
        World.remove(world,box1)
        World.remove(world,box2)
        World.remove(world,pig1)
        World.remove(world,log1)
        World.remove(world,log12)
        World.remove(world,pig2)
        World.remove(world,box3)
        World.remove(world,box4)
        World.remove(world,pig3)
        World.remove(world,box6)
        World.remove(world,log3)
        World.remove(world,box5)
        World.remove(world,tri)
        World.remove(world,tri1)
        World.remove(world,tri2)
        World.remove(world,tri3)

        //LEVEL 3
  box1 = new Boxy(650,320,70,70);
  box2 = new Boxy(970,320,70,70);
  pig1 = new Boxy(900, 390,70,70);
  log1 = new Log(810,260,400, PI/2);

  pig2 = new Boxy(720, 390,70,70);
  box3 = new Boxy(720,240,70,70);
  box4 = new Boxy(900,240,70,70);
 pig3 = new Pig(810, 400);
  box6 = new Boxy(810,210,70,70)
  log3 =  new Log(810,180,260, PI/2);

 
 tri = new Triangle(655,240,70,-PI/2)
  tri1 = new Triangle(950,240,65,0)

        le = 3;
        dis = 3;
    }
if(lev == 4){
    World.remove(world,box1)
    World.remove(world,box2)
    World.remove(world,pig1)
    World.remove(world,log1)
    World.remove(world,pig2)
    World.remove(world,box3)
    World.remove(world,box4)
    World.remove(world,pig3)
    World.remove(world,box6)
    World.remove(world,log3)
    World.remove(world,tri)
    World.remove(world,tri1)
    World.remove(world,bird)
    World.remove(world,slingshot)
    World.remove(world,ground)
    World.remove(world,platform)
    World.remove(world,invi)
    World.remove(world,invis)
    World.remove(world,inv)
        bg = "sprites/background.jpg";
        backgroundImg = loadImage(bg);
        dis =4
    }
    if(dis == 1){

        //LEVEL1
   
    box52.display();
    box53.display();
    log11.display();
    log111.display();
    log1111.display();
    log11111.display();
    log111111.display();
    log11111111.display();
    log1111111.display();
    log1.display();
    log2.display();
    pig1.display();
    pig1.score();
    pig2.display();
    pig2.score();
    pig11.display();
    pig11.score();
    pig21.display();
    pig21.score();
    pig12.display();
    pig12.score();
    pig22.display();
    pig22.score();
    box5.display();
    log5.display();
    log51.display();

    }

    if(dis == 2){
        //LEVEL 2
     box1.display();
     box2.display();
     log12.display();
     tri.display();
     tri2.display();
     tri3.display();
     tri1.display();
     log1.display();
     pig1.display();
     pig1.score();
     pig2.display();
     pig2.score();
     box3.display();
     box4.display();
     pig3.display();
     pig3.score();
     log3.display();
    log1.display
     box5.display();
    box6.display();
    }
    if(dis == 3){
        //LEVEL 3
box1.display();
box2.display();
tri.display();
tri1.display();
log1.display();
pig1.display();
pig2.display();
box3.display();
box4.display();
pig3.display();
pig3.score();
log3.display();
box6.display();
    }
















   /*
   //LEVEL1
   
    box52.display();
    box53.display();
    log11.display();
    log111.display();
    log1111.display();
    log11111.display();
    log111111.display();
    log11111111.display();
    log1111111.display();
    log1.display();
    log2.display();
    pig1.display();
    pig1.score();
    pig2.display();
    pig2.score();
    pig11.display();
    pig11.score();
    pig21.display();
    pig21.score();
    pig12.display();
    pig12.score();
    pig22.display();
    pig22.score();
    box5.display();
    log5.display();
    log51.display();

    */
    
   /*
    //LEVEL 2
     box1.display();
    box2.display();
    log12.display();
    tri.display();
    tri2.display();
    tri3.display();
    tri1.display();
    log1.display();
    pig1.display();
    pig1.score();
    pig2.display();
    pig2.score();
    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();
   log1.display
    box5.display();
   box6.display();
*/
/*
//LEVEL 3
box1.display();
box2.display();
tri.display();
tri1.display();
log1.display();
pig1.display();
pig2.display();
box3.display();
box4.display();
pig3.display();
pig3.score();
log3.display();
box6.display();
*/
if(dis!= 4){
    bird.display();
    ground.display();
    platform.display();
    //log6.display();
    reset.display();
    slingshot.display();}
    //console.log(bird.body.speed);
    if(mouseX>125 && mouseX<175 && mouseY<50 && gameState == 'launched'){
        /*console.log('hi')
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body,{x:200, y:200});
        slingshot.attach(bird.body);    
        gameState = 'onSling'*/
        gameState = 'onSling'
        location.reload()
        
     }
    // drawSprites();  
    
}

function mouseDragged(){
    if (gameState =="onSling"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}


    


async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=2200){
        bg = "sprites/bg.jpg";
    }
    else{
        bg = "sprites/backgroundmain.jpg";
    

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
    }}