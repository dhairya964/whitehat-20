var fixedR,movingR;
 function setup() {
 createCanvas(800,400);
fixedR = createSprite(400, 200, 50, 50);
fixedR.shapeColor = "green"; 
movingR = createSprite(200,200,10,40); 
movingR.shapeColor = "green"; 
 }
function draw(){
  background(255,255,255);
   movingR.x = mouseX; 
   movingR.y=mouseY;

   if(movingR.x-fixedR.x < movingR.width/2 + fixedR.width/2 &&
     fixedR.x-movingR.x < movingR.width/2 + fixedR.width/2&&
     movingR.y-fixedR.y < movingR.height/2 + fixedR.height/2 &&
     fixedR.y-movingR.y < movingR.height/2 + fixedR.height/2
     ) {
     fixedR.shapeColor="Black";
     movingR.shapeColor="Black";
     }else {
     fixedR.shapeColor = "green"; 
     movingR.shapeColor = "green"; 

}

   drawSprites();
}