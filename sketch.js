var on = false;
var x = 300;

function setup() {
  createCanvas(600, 400);

  let buttonRight = createButton('right');
  buttonRight.mousePressed(turnRight);

  let buttonLeft = createButton('left');
  buttonLeft.mousePressed(turnLeft);
}

function draw() {
  background(0);
  if(on === true){
    background(255,0,0)
  } else{
    background(0,255,0)
  }
  stroke(255);
  strokeWeight(4);
  fill(0,0,255);
  // if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){
  //   fill(255,0,200)
  // }
  rectMode(CENTER)
  rect(x,200,100,100, 50)
  console.log(mouseX)
}

function turnRight(){
  x += 100;
}

function turnLeft(){
  x -= 100;
}

// function mousePressed(){
//   if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){
//   //   if(on == true){
//   //      on = false;
//   //      } else{
//   //        on = true;
//   //      } 
//   //      console.log(x)
//   //  }
//   }
//   if(mouseX > 300){
//     x = 400;
//   } else if(mouseX < 300){
//    x = 300;
//   }

// }

// function mousePressed(){
//   if(mouseX > 350 && mouseX < 450 && mouseY > 150 && mouseY < 250){
//     on = !on
//     x = 300;
//    }
// }

// if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){
//   if(mouseIsPressed){
//     background(0,255,0)
//   }
//   fill(255,0,200)
// }

// if(on){
//   on = false;
// } else{
//   on = true;
// }