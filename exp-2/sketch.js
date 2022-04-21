let x = 0;

// Set framerate
let fr = 1;

// Set canvas size
x_max = 600;
y_max = 600;

// Colour array
let colors = {
  red: (202, 5, 77),
  purple: (59, 28, 50),
  turquoise: (164, 212, 180),
  champagne: (255, 207, 156),
  brown: (185, 109, 64)
}

function setup() {
  createCanvas(x_max, y_max);
  frameRate(fr);
  //Stop Looping
  noLoop();
}

function draw() {

  // Colour Generator
  const c_white = color(255, 255, 255);
  const c_red = color(202, 5, 77);
  const c_purple = color(59, 28, 50);
  const c_turq = color(164, 212, 180);
  const c_champ = color(255, 207, 156);
  const c_brown = color(185, 109, 64);
  const c_pink = color(212, 160, 167);
  const c_green = color(31, 39, 27);

  const colors = [c_red, c_purple, c_turq, c_brown, c_pink]

  const num_lines = random(20);
  const num_rects = random(10);
  const num_quads = random(7);
  const num_circles = random(100);
  
  // Create background
  background(c_champ); //champagne

  // Create background grid

  // Create lines with random strokeweight & start/end points. 
  for (let i=0; i < num_lines; i++) {
    strokeWeight(random(3))
    line(random(x_max), random(y_max), random(x_max), random(y_max));
  }

  // Create randomly coloured(using pre-defined)rects.
  for (let i=0; i < num_rects; i++) {
    strokeWeight(0)
    fill(random(colors))
    rect(random(x_max), random(y_max), random(250), random(250))
  }

  // Create randomly coloured(using pre-defined) circles.
  for (let i=0; i < num_circles; i++) {
    strokeWeight(0)
    fill(random(colors))
    circle(random(x_max), random(y_max), random(50))
  }

  // Create randomly coloured(using pre-defined)quads.
  for (let i=0; i < num_quads; i++) {
    strokeWeight(0)
    fill(random(colors))
    quad(random(x_max), random(x_max), random(y_max),random(y_max), random(150), random(150))
  }

  x=10; y=32;
  textSize(24);
  fill(c_green)
  text('lemma', x, y)
  
  // Create & colour custom shape
  fill(c_green)
  translate(width / 2, height / 4);
  rotate(PI / random(4) )
  createLShape();

  // saveCanvas() 
}

function createLShape() {
  beginShape();
  vertex(250, 500);
  vertex(200, 500);
  vertex(200, 100);
  vertex(100, 100);
  vertex(100, 50);
  vertex(250, 50);
  vertex(250, 500);  
  endShape(); 
}

function createGrid() {
  strokeWeight(3);
  beginShape(LINES);
  vertex(10, 35);
  vertex(90, 35);
  vertex(10, 65);
  vertex(90, 65);
  vertex(35, 10);
  vertex(35, 90);
  vertex(65, 10);
  vertex(65, 90);
  endShape();
}

function keyPressed() {
  if (keyCode === ENTER) {
  loop()  
  } 
  if (keyCode === BACKSPACE) {
    noLoop()  
  }
}

function SaveImage() {
  saveCanvas(c, 'png')
}
