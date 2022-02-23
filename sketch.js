var quadrado
function setup() {
  createCanvas(400,400);
  quadrado=createSprite(200, 130, 50, 50)

}

function draw() {
  background(30);
drawSprites()
if(keyIsDown(RIGHT_ARROW)){
quadrado.x+=5

}
if(keyIsDown(LEFT_ARROW)){
quadrado.x-=5

}
if (keyIsDown(UP_ARROW)){
quadrado.y-=5

}
if (keyIsDown(DOWN_ARROW)){
  quadrado.y+=5
}




}




