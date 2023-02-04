song1="";
song2="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;

function preload(){
 song1= loadSound("music.mp3");
 song2= loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("model is initialised");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftwristx=results[0].pose.leftwrist.x;
        leftwristy=results[0].pose.leftwrist.y;
        console.log("leftwristX="+leftwristx+"leftwristY="+leftwristy);

        rightwristx=results[0].pose.rightwrist.x;
        rightwristy=results[0].pose.rightwrist.y;
        console.log("rightwristX="+rightwristx+"rightwristY="+rightwristy);
    }
}

function draw(){
    image(video,0,0,600,500);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}