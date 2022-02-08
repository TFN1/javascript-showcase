/*
    Paste the code for your week 4 exercise below.
*/

// canvas
function setup() {
    createCanvas(500, 500);
    // change angle modes to degrees
    angleMode(DEGREES);
  }

  // variable for rotation of cube
  let rot = 0;

  // variables for cubes position
  let tx = 0;
  let ty = 0;

  //set colours for the cube
  let c = 255;
  let col =['red','green','yellow','blue','pink','white','black','purple','orange','brown','gray'];

  //draw
  function draw() {
    background(150);

    //create 'stairs' 
    let x = 0;
    while (x <= width){
    fill(40);
    rect(0,x,x,50);
    x = x + 50;
    }

    //set first rotation point of cube
    translate(tx,ty);

    //create cube
    noStroke()
    fill(c);
    rotate(rot);
    rect(-50,-50,50,50);

    //rotate and change rotation point of cube
    for (rot=rot+3;rot==180;rot=0){
    tx = tx+50;
    ty = ty+50;
    c = random(col);
    }
    
    //reset cube when out of screen
    if(ty>450&&rot>90){
    tx=0;
    ty=0;
    }
  }