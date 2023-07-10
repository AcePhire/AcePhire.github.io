let canvWidth = 800; 
let canvHeight = 800;
let numOfPoints = 500;
let Points = [numOfPoints];
let started = false;

function setup(){
    createCanvas(canvWidth, canvHeight);
}

function start() {
    let eq = document.getElementById("mom").value;
    console.log(eq);
    for (let i = numOfPoints/2; i >= 0; i--){
        Points[i] = new Point(-i, eq);
    }
    for (let i = 0; i < numOfPoints/2; i++){
        Points[i+numOfPoints/2] = new Point(i, eq);
    }
    
    started = true;
}

function draw() {
    translate(canvWidth/2, canvHeight/2);
    background(0);
    stroke(255);
    strokeWeight(2);
    line(0, -canvHeight/2, 0, canvHeight/2);
    line(-canvWidth/2, 0, canvWidth/2, 0);

    if (started){
        for (let i = 0; i < Points.length; i++){
            Points[i].show();
        }
    
        for (let i = 0; i < Points.length; i++){
            if (!Points[i+1].x){
                return;
            }else{
                line(Points[i].x, Points[i].y, Points[i+1].x, Points[i+1].y);
            }
        }
    }
}