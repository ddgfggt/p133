status=""
objects=[];
img="";
function preload(){
img=loadImage("dog_cat.jpg");
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelloaded);
objectDetector.detect(img,gotResults);
document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function draw(){
image(img,0,0,640,420);
if(status!=""){


for(i=0;i<objects.length;i++){
    document.getElementById("status").innerHTML="Status:Object Dectected";
    Percent=floor(objects[i].confidence*100);
    fill("red");
    noFill();
stroke("red");
text(objects[i].label+" "+Percent+"%",objects[i].x,objects[i].y);
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}
function modelloaded(){
    console.log("model is loaded");
    status=true;
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
        objects=results;
    }
}