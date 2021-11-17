var num = 3;


function preload(){
  
    bg = loadImage('assets/backgrounfimage2.jpeg');
     ww = loadImage('assets/wheres waldo.jpeg');
   } 
   

function mouseReleased(){
    let c = get(mouseX, mouseY);
        print(c);

        if(c == [255, 140, 0, 255].toString()){
   
            num = 0;
           
          }


}


function setup(){
    
    
    createCanvas(400,500)
}  
function draw(){   
    let r = color(255, 0, 0);
    let y = color(255,255,0);
    let b = color(30,144,255);
    let o = color(255,140,0);
    let v = color(0,255,255);
    let s = color(192,192,192);
    
    clear();
 
 
    if(num == 0){
   
        window.location = "index.html";
             
      }

    if(num == 3){
    
    clear();
        fill(o);
    rect(190, 420, 100, 50);
   
    fill(0,0,0)
    textSize(32);
    text('Home', 200, 450);
   
    fill(o)
    textSize(46);
    text("Cool Math Games", 25, 100);


 }

    




}