var num = 2;
let mbg;
function preload(){
   mbg = loadImage('assets/moleBackground.jpeg');
     
   } 
   function mouseReleased() {
  
     let c = get(mouseX, mouseY);
     print(c);
     if(c == [255, 140, 0, 255].toString()){
    
       num = 0; 
      
     }
     if(c == [0,255,255,255].toString()){

      num = 5;
  
     }
    }
    
    
   
 function setup(){
     createCanvas(400, 500);
         
 
 }

function setup(){
    createCanvas(400,500);
}
function draw(){
    let r = color(255, 0, 0);
    let y = color(255,255,0);
    let b = color(30,144,255);
    let o = color(255,140,0);
    let v = color(0,255,255);
    let s = color(192,192,192);


    if(num == 0){
   
        window.location = "index.html";
             
      }

    if(num == 5){

      window.location = "WackAMoleGame.html";


    }
   if(num == 2){
    
      imageMode(CORNER);
      image(mbg,0,0, 400, 500);
      fill(o);
      rect(190, 420, 100, 50);
     
      fill(0,0,0)
      textSize(32);
      text('Home', 200, 450);
     
      

      fill(v);
      rect(150, 250, 100, 50, 20);
      fill(0,0,0);
      textSize(32);
      text('PLAY', 160,285);

}

}

