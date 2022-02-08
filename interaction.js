//Canvas
  function setup() {
    createCanvas(cx, cy);
    background(200);

    //Draw text
    drawText()
    }
    
    //Cavas sizing
    let cx = 500;
    let cy = 500;

    //Square coordinates
    let x = 350;
    let y = 450;

    //Size x and y
    let sx = 20;
    let sy = 20;

    //Speed
    let sp = 3;
    
    //Colours
    let c = 255;
    let col = ['white','red','yellow','blue','black','pink','purple','green','orange'];
  
  
  function draw() {
      
      //Creating square
      noStroke();
      fill(c);
      rect(x,y,sx,sy)
      
      //Direction based on arrow keys
      if (keyCode === UP_ARROW) {
        x = x;
        y = y - sp;
      } 
      if (keyCode === DOWN_ARROW) {
        x = x;
        y = y + sp;
      } 
      if (keyCode === LEFT_ARROW) {
        x = x - sp;
        y = y;
      } 
      if (keyCode === RIGHT_ARROW) {
        x = x + sp;
        y = y;
      } 
      
      //Interaction with edges
      if (y <= 0){
        y = y + cy;
      } 
      if (y >= cy - sy) {
        y = y - cy;
      }
      if (x <= 0){
        x = x + cx;
      }
      if (x >= cx - sx){
        x = x - cx;
      }
      
  }
  
  //Change colour on mouse press
  function mousePressed(){
    c = random(col);
  }
  
  //Text
  let ta = 'Use the keys to change direction';
  let tb = 'Click to change colour';
  let tc = 'Use space bar to pause';
  let td = 'Enjoy drawing!';
    
  //Text style
  function drawText(){
    textStyle(BOLD);
    textAlign(CENTER);
    textSize(8);
    fill(50);
    text(ta,180,370,140,300);
    text(tb,180,390,140,300);
    text(tc,180,410,140,300);
    text(td,180,430,140,300);
  }
        