// text content
let t = 'JS';
// canvas
function setup() {
  createCanvas(500, 500);
}
// draw 
function draw() {
  //background
  background(245);

  // call drawing function with size
  drawJSLogo(235); 
}
// logo function
function drawJSLogo(size) {
  // rectangle
  noStroke();
  fill(247,224,24);
  rect(size*0.375,size*0.375,size*1.25);
  
  // text
  textStyle(BOLD);
  textSize(size*0.7);
  textWidth(size);
  fill(50);
  text(t,size*0.7,size*0.95,size,size);
}

  