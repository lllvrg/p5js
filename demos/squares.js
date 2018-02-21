a = 0

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    background(255, 255, 255)
    noFill()
    strokeWeight(4)
    a = a + 0.004
    size = 50
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            x = size*2 + i * size*(1+sin(PI/6))
            y = size*2 + j * size*cos(PI/6)*2
            if (i % 2 == 0) {
                y += size*cos(PI/6)
            } 
            merdzso(x, y, a, size)
        }
        for (j = 0; j < 5; j++) {
            x = size*2 + i * size*(1+sin(PI/6))+size
            y = size*2 + j * size*cos(PI/6)*2
            if (i % 2 == 0) {
                y += size*cos(PI/6)
            } 
            merdzso(x, y, a, size)
        }
    }
    console.log(a)

}

function merdzso(x, y, alpha, size) {
    line(x, y, x + cos(PI / 2 + alpha) * size, y - sin(PI / 2 + alpha) * size)
    line(x, y, x + cos(PI / 6 - alpha) * size, y + sin(PI / 6 - alpha) * size)
    line(x, y, x - cos(PI / 6 + alpha) * size, y + sin(PI / 6 + alpha) * size)
//    ellipse (x, y, size*2)
}