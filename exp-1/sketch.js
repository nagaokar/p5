let x = 0;
let fr = 2;
x_max = 1500;
y_max = 700;

function setup() {
  createCanvas(x_max, y_max);
  frameRate(fr);
}

function draw() {

  let colors = ['#7FB069', '#fffbbd', '#e6aa68', '#ca3c25', '#1d1a05'];

  r_50 = random(50)
  r_200 = random(200)
  r_500 = random(500)

  background(random(colors));
  x = x + 0.1;
  if (x > width) {
    x = 0;
  }
  line(random(x_max), random(y_max), random(x_max), random(y_max))
  line(random(x_max), random(y_max), random(x_max), random(y_max))
  line(random(x_max), random(y_max), random(x_max), random(y_max))
  line(random(x_max), random(y_max), random(x_max), random(y_max))
  line(random(x_max), random(y_max), random(x_max), random(y_max))
  line(random(x_max), random(y_max), random(x_max), random(y_max))
  line(random(x_max), random(y_max), random(x_max), random(y_max))
  line(random(x_max), random(y_max), random(x_max), random(y_max))
  line(random(x_max), random(y_max), random(x_max), random(y_max))
  line(random(x_max), random(y_max), random(x_max), random(y_max))
  line(random(x_max), random(y_max) , random(x_max), random(y_max))
  line(random(x_max), random(y_max), random(x_max), random(y_max))
  line(random(x_max), random(y_max), random(x_max), random(y_max))
  line(random(x_max), random(y_max), random(x_max), random(y_max))

  rect(random(x_max), random(y_max), r_500, r_500)
  rect(random(x_max), random(y_max), r_500, r_500)
  rect(random(x_max), random(y_max), r_500, r_500)
  rect(random(x_max), random(y_max), r_500, r_500)
  rect(random(x_max), random(y_max), r_500, r_500)
  rect(random(x_max), random(y_max), r_500, r_500)
  rect(random(x_max), random(y_max), r_500, r_500)
  
  let c = random(colors)
  fill(c)
  
  rect(random(x_max), random(y_max), r_200, r_200)
  rect(random(x_max), random(y_max), r_200, r_200)
  rect(random(x_max), random(y_max), r_200, r_200)
  rect(random(x_max), random(y_max), r_200, r_200)
  rect(random(x_max), random(y_max), r_200, r_200)
  rect(random(x_max), random(y_max), r_200, r_200)
  rect(random(x_max), random(y_max), r_200, r_200)
  rect(random(x_max), random(y_max), r_200, r_200)

  rect(random(x_max), random(y_max), r_50, r_50)
  rect(random(x_max), random(y_max), r_50, r_50)
  rect(random(x_max), random(y_max), r_50, r_50)
  rect(random(x_max), random(y_max), r_50, r_50)
  rect(random(x_max), random(y_max), r_50, r_50)



}

function keyPressed() {
  if (keyCode === ENTER) {
  loop()  
  } 
  if (keyCode === BACKSPACE) {
    noLoop()  
  }
}