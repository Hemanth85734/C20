var object1,object2;
 
function setup() { 
  createCanvas(800,400);
  
  //object1
 object1=createSprite(200,100,20,90);
 object1.shapeColor="green";

 //object2
 object2=createSprite(400,100,20,90);
 object2.shapeColor="green" 
} 



function draw() {
 
  background(0);
 object2.x=mouseX;
 object2.y=mouseY; 
console.log(object2.x-object1.x);
if(object2.x -object1.x <object1.width/2+object2.width/2
   && object1.x-object2.x<object1.width/2+object2.width/2
&& object2.y-object1.y<object1.height/2+object2.height/2 
&&object1.y-object2.y<object1.height/2+object2.height/2){


  //object colours
  object1.shapeColor="red"; 
  object2.shapeColor="red"; 
}

 else{ 
   object1.shapeColor="green"; 
      object2.shapeColor="green"; 
    } 

drawSprites();
}
