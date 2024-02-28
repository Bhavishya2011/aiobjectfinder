objects = [];
status = "";

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 380,380);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}