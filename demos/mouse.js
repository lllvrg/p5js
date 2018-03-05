var cat
var mouseimg
mouseList = []
W = 500
H = 500

function preload() {
  cat = loadImage('assets/cat.png')
  mouseimg = loadImage('assets/mouse.png')
  sleepingMouse = loadImage('assets/sleepingMouse.png')
}

function setup() {
    noCursor()
    createCanvas(windowWidth, windowHeight)
    for (i=0; i<10; i++) {
        mouseList.push(new mouse(random(W), random(H), 2))
    }
}

function draw() {  
    background(255, 255, 255)
    image(cat, mouseX, mouseY)
    for (i=0; i<mouseList.length; i++) {
        mouseList[i].step()
        mouseList[i].draw()
    }    
}

function mouse(x, y, speed) {
    this.x = x
    this.y = y
    this.speed = speed
    this.draw = function () {
        image(mouseimg, this.x, this.y)    
    }
    this.step = function () {
        var dx, dy
        if(this.x >= mouseX) {
            dx = random(0, speed)
        } else {
            dx = random(-speed, 0)            
        }
        if(this.y >= mouseY) {
            dy = random(0, speed)
        } else {
            dy = random(-speed, 0)            
        }
        if(this.x + dx >= 0 && this.x + dx <= W) {
            this.x += dx
        }
        if(this.y + dy >= 0 && this.y + dy <= H) {
            this.y += dy
        }
    }
}