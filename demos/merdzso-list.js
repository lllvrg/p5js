a = []
points = []

function mouseClicked() {
    points.push ([mouseX, mouseY])
    a.push (0)
}

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    background(255, 255, 255)
    noFill()
    strokeWeight(4)
    for (i = 0; i < points.length; i++) {
        a[i] = a[i] - 0.01
        merdzso(points[i][0], points[i][1], a[i], 50)
    }
  }

  function merdzso(x, y, alpha, size) {
    line (x, y, x+cos(PI/2+alpha)*size, y-sin(PI/2+alpha)*size)
    line (x, y, x+cos(PI/6-alpha)*size, y+sin(PI/6-alpha)*size)
    line (x, y, x-cos(PI/6+alpha)*size, y+sin(PI/6+alpha)*size)
    ellipse (x, y, size*2)
  }