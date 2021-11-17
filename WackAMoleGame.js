
var nums = 1;
const radius = 27;
let scores = 0;
let ll;
let i = 70;
let j = 30;



 
function preload(){
  ll = loadImage('assets/MoleBG.png');


}

function setup(){
   createCanvas(400, 500);

   
}

function draw(){

    imageMode(CORNER);
    image(ll, 0, 0, 400, 500);
 

   textSize(50);
   text("Score: " + scores, 0, 75);
   newMole();

}

function newMole(){


    fill('white');
    circle(100, 125, 50);
    circle(300, 125, 50);
    circle(200, 225, 50);
    circle(100, 325, 50);
    circle(300, 325, 50);
    circle(200, 425, 50);

    if(nums == 1){
        i = 100;
        j = 125;
        fill('black');
        circle(i, j, 50);
    }
    else if(nums == 2){
        i = 300;
        j = 125;
        fill('black');
        circle(i,j,50);
    }
    else if(nums == 3){
        i = 200;
        j = 225;
        fill('black');
        circle(i,j,50);
    }
    else if(nums == 4){
        i = 100;
        j = 325;
        fill('black');
        circle(i,j,50);
    }
    else if(nums == 5){
        i = 300;
        j = 325;
        fill('black');
        circle(i,j,50);
    }
    else{
        i = 200;
        j = 425;
        fill('black');
        circle(i,j,50);
    }



}

function mouseReleased() {
    let r = dist(mouseX, mouseY, i, j);
 
   if(r < radius){
    scores++;
    
   }

   if(scores < 15){
    nums = Math.floor(random(1,7));
    print(nums);
    newMole();
   }
    else{
        window.location = "winScreen.html";
    }



}

