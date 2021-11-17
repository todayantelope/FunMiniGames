const timeLeft = document.querySelector('#time-left');

var num = 2;
const radius = 15;
let score = 0;
let lives = 3;
let wf;
let ww;
let currentTime = 20;
let timeId = null;
 
function preload(){
  wf = loadImage('assets/waldo.jpeg');
  ww = loadImage('assets/waldoLevel2.jpeg');
   
  }
 
function setup(){
   createCanvas(400, 500);
   x = random(100 , 300);
   y = random(100, 400);
   newWaldo();
}
 
function draw(){
    
      
 }
 
function mouseReleased() {
    let z = dist(mouseX, mouseY, x, y);
 
   if(z < radius){
    score++;

   }
    else{
        lives --;
    }



    if(score == 3){
 
        window.location = "waldo2.html";
     
       }

    newWaldo();
       
   }
 


    if(lives == 0){
 
        window.location = "loseScreen.html";
   }
 
    newWaldo();

   
   



 
function newWaldo(){
    x = random(100, 400);
    y = random(200, 400);
    imageMode(CORNER);
    image(ww, 0, 0, 400, 500);
    fill('grey');
    circle(x, y, 20);
    
    
    fill("black");
    textSize(25);
    text('YOUR SCORE IS: ' + score, 10, 100);

    fill("black");
    textSize(25);
    text('LIVES LEFT: ' + lives, 10, 50);



}

 function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;
    if(currentTime == 0){
        window.location = "loseScreen.html";
        clearInterval(countDownTimerId);
        clearInterval(timerId);

        


    }




 }

 let countDownTimerId = setInterval(countDown, 1000);


