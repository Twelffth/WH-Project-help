function preload() {


}

function setup() {
    canvas = createCanvas(480, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 480);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}



function onClick() {

}

function modelLoaded() {
    console.log("modelisloaded");

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nosex=" + results[0].pose.nose.x);
        console.log("nosey=" + results[0].pose.nose.y);
    }

}

function draw() {
    image(video, 0, 0, 480, 480);
}