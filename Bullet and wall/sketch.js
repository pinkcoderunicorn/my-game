

var you;
var food1,food2,food3,food4,food5,food6,food7,food8,food9,food10;

function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);
    food1 = createSprite(random(displayWidth/2,displayWidth),displayHeight-200,10,20);
    food2 = createSprite(random(displayWidth/8,displayWidth/6),displayHeight-100,10,20);
    food3 = createSprite(random(displayWidth/4,displayWidth),displayHeight-400,10,20);
    food4 = createSprite(random(displayWidth/10,displayWidth/6),displayHeight-500,10,20);
    food5 = createSprite(random(displayWidth/8,displayWidth),displayHeight-100,10,20);
    food6 = createSprite(random(displayWidth/5,displayWidth/2),displayHeight-600,10,20);
    food7 = createSprite(random(displayWidth/2,displayWidth/6),displayHeight-250,10,20);
    food8 = createSprite(random(displayWidth/8,displayWidth/7),displayHeight-300,10,20);
    food9 = createSprite(random(displayWidth/5,displayWidth/2),displayHeight-550,10,20);
    food10 = createSprite(random(displayWidth/10,displayWidth),displayHeight-150,10,20);

    you = new You();
    
}

function draw(){
    background("black");

    you.display();

    if(keyDown("up")){
   you.y= you.y-5;
    }

    drawSprites(); 
}
