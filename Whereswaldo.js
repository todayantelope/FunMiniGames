var num =1;
let help;
let radius = 15;
 
function preload(){
    bg = loadImage('assets/backgrounfimage2.jpeg');
    ww = loadImage('assets/wheres waldo.jpeg');
    help = loadImage('assets/helpButton.png')
 }
 function mouseReleased() {
   let c = get(mouseX, mouseY);
   print(c);
   if(c == [255, 140, 0, 255].toString()){
 
     num = 0;
   
   }
   
   if(c == [0,255,255,255].toString()){

    num = 4;

  }
  
  
  
  }
function setup(){
   createCanvas(400, 500);

}
function draw(){
 
 
   let r = color(255, 0, 0);
   let y = color(255,255,0);
   let b = color(30,144,255);
   let o = color(255,140,0);
   let v = color(0,255,255);
   
 
   if(num == 0){
 
     window.location = "index.html";
         
   }
   if(num == 4){
    window.location = "waldoGame.html";
  
  }

  
 if(num == 1){
 
 imageMode(CORNER);
 image(ww, 0,0, 400, 500); 
 fill(o);
 rect(30, 20, 55, 55, 20);
 fill(0,0,0)
 textSize(20);
 text('Home', 30, 50);
 
 
 fill(v);
 rect(150, 250, 100, 50, 20);
 fill(0,0,0);
 textSize(32);
 text('PLAY', 160,285);
 
 imageMode(CENTER);
 image(help, 40, 450, 40,40);
 }


}

function mouseReleased() {
  let z = dist(mouseX, mouseY, 40, 450);
  

  if(z < radius)
    window.location = "helpScreen.html";

  
  
 }
 
