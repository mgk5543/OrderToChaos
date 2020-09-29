function setup() {
  createCanvas(400, 400);
}

let time = 0;
let colorP = 0;
let colorN = 0;

function draw() {
  background(220, 230, 244);
  time += 0.01;
  
  let bx = map(cos(time), -1, 1, 100, width-100);
  
  let chaos = map(bx, 100, width, 0, 8);
  
  chaos = max(0, chaos);
  
  let rVal = map(bx, 100, width, 20, 340);
  let gVal = map(bx, 100, width, 300, 0);
  let bVal = map(bx, 100, width, 300, 0);
  
  
  strokeWeight(0);
  //head
  fill(63, 11, 11);
  ellipse(bx-5, height/2-20, 150, 150);
  ellipse(bx+5, height/2-20, 150, 150);
  rectMode(CENTER);
  rect(bx, height/2+20, 160, 80);
  //ears
  ellipse(bx-80, height/2-10, 40, 40);
  ellipse(bx+80, height/2-10, 40, 40);
  //mouth
  fill(255);
  rect(bx, height/2 +30, 40,8);
  fill(63, 11, 11);
  rect(bx, height/2 +30, 2,10);
  rect(bx+10, height/2 +30, 2,10);
  rect(bx-10, height/2 +30, 2,10);
  //hat
  
  
  noFill();
  stroke(250, 200, 50);
  strokeWeight(17);
  ellipse(bx-20, height/2-140, 40, 40);
  ellipse(bx+20, height/2-140, 40, 40);
  fill(250, 200, 50);
  strokeWeight(0);
  rect(bx, height/2-120, 10, 50);
  
  
  //eyes
  fill(rVal, gVal, bVal);
  ellipse(bx - 40, height/2, 60, 60);
  fill(63, 11, 11);
  ellipse(bx - 40, height/2, 40, 40);
  fill(255);
  ellipse(bx + random(-chaos, chaos) - 40, height/2, 20, 20);
  //other eye
  fill(rVal, gVal, bVal);
  ellipse(bx + 40, height/2, 60, 60);
  fill(63, 11, 11);
  ellipse(bx + 40, height/2, 40, 40);
  fill(255);
  ellipse(bx + random(-chaos, chaos) + 40, height/2, 20, 20);
  
}