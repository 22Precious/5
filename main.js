status="";
object=[];

function setup(){
canvas=createCanvas(480,380);
canvas.center();

}

function preload(){
  video=createVideo();
  video.size(480,380);
  video.hide();
}

function start(){
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
document.getElementById("input").value;

if(object[i].label==object_name){
  variable_name_holds_webcamLiveView.stop()
  objectDetector.detect(gotResult);
  document.getElementById("object_status").innerHTML=object_name + "Found";
  utterThis=SpeechSynthesisUtterance("Object mentioned Found");
  utterThis.speak()
} else{
  document.getElementById("object_status").innerHTML=object_name + "Not g#found";
}

}

function modelLoaded(){
console.log(modelLoaded);
status=true;
}

function draw(){
  if (status != ""){
    for(i=0;i<objects.length;i++){
      Fill("#ff0000");
      percent=floor(objects.confidence*100);
      text(objects[].label)+ " "+ percent + "%" + object[i].x+15 ,object[i].y+15);
      noFill();
      stroke("#ff0000");
      rect(object[i].x ,object[i].y, object[i].width, object[i].height);

    }
  }

image(video,0,0,480,380);
}

function gotResult(error,results){
if(error){
    console.log(error);

}
console.log(results);
object=results;
}