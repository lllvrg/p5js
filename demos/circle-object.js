//c = new circle(100, 100, 1, 1)
list = []

function setup() {
    createCanvas(windowWidth, windowHeight)
    for (i = 0; i < 200; i++) {
        x = random(windowWidth/2 - 10, windowWidth/2 + 10)
        y = random(windowHeight/2 - 10, windowHeight/2 + 10)
        list.push(new circle(x, y, (x - windowWidth/2)/10, (y - windowHeight/2)/10))
    }
    colorMode(RGB, 255, 255, 255, 1)
    noStroke()
}

function draw() {  
    background(0, 0, 0)
    for (i = 0; i < list.length; i++) {
        list[i].draw()
        list[i].step()
    }
}

function circle(x, y, a, b) {
    this.x = x
    this.y = y
    this.a = a
    this.b = b
    this.draw = function() {
        ellipse(this.x, this.y, random(0, 20))
        fill(255-this.y, 255-this.y, 255-this.y, 0.5)        
    }
    this.step = function() {
        this.x = this.x + a
        this.y = this.y + b
        if(this.x > windowWidth || this.x < 0 || this.y > windowHeight || this.y < 0) {
            this.x = random(x-10, x+10)
            this.y = random(y-10, y+10)
        }
    }
    
}