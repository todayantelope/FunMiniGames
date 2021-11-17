function preload(){

    bg = loadImage('assets/background2.jpg');
    ww = loadImage('assets/wheres waldo.jpeg');

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

function setup(){
    background(220);
    createCanvas(400,500)

}
function draw(){
    let r = color(255, 0, 0);
    let y = color(255,255,0);
    let b = color(30,144,255);
    let o = color(255,140,0);
    let v = color(0,255,255);
    let s = color(192,192,192);
    
if(num ==0){
    background(220);
    
      imageMode(CORNER);
      image(bg, 0,0, 400, 500);
      fill(o);
      textSize(46);
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
}
