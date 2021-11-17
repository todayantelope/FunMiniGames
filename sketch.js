var num = 0;

let bg;
let ww;

function preload(){
  
  bg = loadImage('assets/backgrounfimage2.jpeg');
  ww = loadImage('assets/wheres waldo.jpeg');

  
}
function setup(){
  createCanvas(400, 500);
  
 
 

  
  let r = color(255, 0, 0);
  let y = color(255,255,0);
  let b = color(30,144,255);
  let o = color(173,255,47);
 
  background(220);
  imageMode(CORNER);
  image(bg, 0,0, 400, 500);
  fill(o);
  textSize(46);
  textFont('Copperplate')
  text('Fun Mini Games', 25, 100);
  
  fill(r);
  square(30, 175, 55, 20);
  textSize(32);
  text('Where\'s waldo?', 100, 215);
  
  fill(y);
  square(30, 250, 55, 20);
  textSize(32);
  text('Whack-A-Mole', 100, 290);
 
  fill(b);
  square(30, 325, 55, 20);
  textSize(32);
  text('Cool Math Games', 100, 365);

   
}



function mouseReleased() {
 
  let c = get(mouseX, mouseY);
  print(c);
 
 
  if(c == [255, 140, 0, 255].toString()){
   
    num = 0; 
   
  }
 
 if(c == [0, 0, 0, 255].toString()){
   
    num = 0;
      
  }
 
  if(c == [255, 0, 0, 255].toString()){
   
    num = 1;
     
  }
 
  if(c == [255, 255, 0, 255].toString()){
   
    num = 2;
   
  }
  if(c == [30, 144, 255, 255].toString()){
   
    num = 3;
   
  }
  
  if(c == [0,255,255,255].toString()){

    num = 4;

  }
  if(c == [220, 220, 220, 255].toString()){
    num = 5;

  }
}
  
  function draw(){
    
    let r = color(255, 0, 0);
    let y = color(255,255,0);
    let b = color(30,144,255);
    let o = color(255,140,0);
    let v = color(0,255,255);
    let s = color(192,192,192);
    
    if(num == 0){
   
  background(220);
  imageMode(CORNER);
  image(bg, 0,0, 400, 500);
  fill(o);
  textSize(46);
  textFont('Copperplate')
  text('Fun Mini Games', 25, 100);
  
  fill(r);
  square(30, 175, 55, 20);
  textSize(32);
  text('Where\'s waldo?', 100, 215);
  
  fill(y);
  square(30, 250, 55, 20);
  textSize(32);
  text('Whack-A-Mole', 100, 290);
 
  fill(b);
  square(30, 325, 55, 20);
  textSize(32);
  text('Cool Math Games', 100, 365);
           
    }
   
    
    if(num == 1){ 
      window.location = "waldoGame.html";
      
    
    }
    if(num == 2){
     
      window.location = "WackAMoleGame.html";
      
      }
    if(num == 3){
     
      window.location = "CoolMathGames.html";
      
    }
    if(num == 4){

      clear();

      background(220);
      fill(o);
      rect(30, 20, 55, 55, 20);
     
      fill(0,0,0)
      textSize(20);
      text('Home', 30, 50);

    }
  }
         
  