var track, trackImg
var runner, runner_running
var invisibleBoundarie1, invisibleBoundarie2;
var wall1;
var edges;
function preload(){
  runner_running=loadAnimation("Runner-1.png","Runner-2.png");
  trackImg=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  edges=createEdgeSprites();
  track=createSprite(200,200);
  track.addImage(trackImg);
  track.velocityY=4;
  track.scale=1.2;
  runner=createSprite(200,200);
  runner.addAnimation("runner",runner_running);
  runner.scale=0.1;
  wall1=createSprite(40,200,10,400);
}

function draw() {
  if(track.y > 400){
    track.y=height/2;
  } 
 runner.x=World.mouseX;
  background(0);
  runner.bounceOff(wall1);
  drawSprites();
}
