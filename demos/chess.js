function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  noStroke()
  var r = 10
  var n = 200
  background(0,0,0)
  for(j=0; j<50; j++){
    for(i=0; i<50; i++) {
        if(j%2==i%2){
          if((j+i)%4==0){
            fill(0,0,255)
          } else {
            fill(255,0,0)
          }
          rect(50+j*10, 50+i*10, r, r)
         }  
        }
      }
}