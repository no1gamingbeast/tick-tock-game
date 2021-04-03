var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(400,400); 
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw(){
    background("cyan");

    //Translation and rotation 
    translate(200,200);
    rotate(-90);

    //Calculating time using predefined func from p5.js
    hr = hour();
    mn = minute();
    sc = second();

    //To create ab iterative rotation
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

    //drawing seconds hand
    push();
    rotate(scAngle); //rotate the hand based on angle calculated
    //red
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    //drawing mins hand
    push();
    rotate(mnAngle);
    //green
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    //drawing hr hand
    push();
    rotate(hrAngle);
    //blue
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    //stroke(255,0,255);
    //point(0,0);

    //drawing the arcs
   // arc(x, y, w, h, start, stop, [mode], [detail])
  // mode and detail are optional
  // Parameters
   //x Number: x-coordinate of the arc's ellipse
   //y Number: y-coordinate of the arc's ellipse
    //w Number: width of the arc's ellipse by default
     //h Number: height of the arc's ellipse by default
    //start Number: angle to start the arc, specified in radians
    //stop Number: angle to stop the arc, specified in radians
   //mode Constant: optional parameter to determine the way of drawing the arc. either CHORD, PIE or OPEN (Optional)
    //detail Number: optional parameter for WebGL mode only. This is to specify the number of vertices that makes up the perimeter of the arc. Default value is 25. (Optional)

    strokeWeight(10);
    noFill();
    //Seconds
    stroke(255,0,0);
    arc(0,0,300,300,0,scAngle);
    //Minutes
    stroke(0,255,0);
    arc(0,0,280,280,0,mnAngle);
    //Hour
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);
}