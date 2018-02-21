a = 0

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    background(255, 255, 255)
    noFill()
    strokeWeight(4)
    a = a + 0.01
    for (i=0; i<5; i++){
        for (j=0; j<5; j++){
            merdzso(100+i*110, 100+j*110, a, 50)

        }

    }
    console.log (a)

  }

  function merdzso(x, y, alpha, size) {
    line (x, y, x+cos(PI/2+alpha)*size, y-sin(PI/2+alpha)*size)
    line (x, y, x+cos(PI/6-alpha)*size, y+sin(PI/6-alpha)*size)
    line (x, y, x-cos(PI/6+alpha)*size, y+sin(PI/6+alpha)*size)
    ellipse (x, y, size*2)
  }