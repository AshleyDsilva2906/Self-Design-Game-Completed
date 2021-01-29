//const Engine = Matter.Engine
//const World = Matter.World
//const Bodies= Matter.Bodies
var boy,question,answer,count=0,mark=0,score=0

function preload(){
doorimage=loadImage("image/closed door.png")
boy1=loadAnimation("image/front 1.png","image/front 2.png")
boy2=loadAnimation("image/left 1.png","image/left 2.png")
boy3=loadAnimation("image/Untitled.png","image/right 2.png")
treasure=loadImage("image/treasure-chest-open-ancient-trunk-glowing-magic-lights-dark-154769850.jpg")
boy4=loadAnimation("image/down 1.png","image/down 2.png")


}
function setup() {
  
  createCanvas(displayWidth,displayHeight);
  door1=new Door(displayWidth/4-100,100)
  door2=new Door(displayWidth/2-80,100)
  door3=new Door(3*displayWidth/4,100)
  boy=createSprite(800,500)
  boy.addAnimation("front",boy1)
  boy.addAnimation("left",boy2)
  boy.addAnimation("right",boy3)
  boy.addAnimation("down",boy4)
 
  question=[]
  count=0
  mark=0
 
}

function draw() {
  background("green");
  textSize(20)
  text("score "+ score,1200,400)  
  console.log(count)
  door1.display()
  door2.display()
  door3.display()
  if(keyDown("Up_arrow")){
    boy.y=boy.y-15
    boy.changeAnimation("front",boy1)
  }
  if(keyDown("Left_arrow")){
    boy.x=boy.x-15
    boy.changeAnimation("left",boy2)
  }
  if(keyDown("Right_arrow")){
    boy.x=boy.x+15
    boy.changeAnimation("right",boy3)
  }
  if(keyDown("Down_arrow")){
    boy.y=boy.y+15
    boy.changeAnimation("down",boy4)

  }

question.push("Who is the current President of America?")
question.push("How many letters are there in the English Alphabet?")
question.push("Which month of the year has the least number of days?")
question.push("Which virus became a pandemic and caused deaths in 2020?")
question.push("How much water is present of Earth") 
answer=[["1.Donal Trump","2.Joe Biden","3.George Washington"],["26","23","30"],["April","November","February"],["SARS","H1N1","Coronavirus"],["71%","76%","68%"]]


  
 
 if(mark<5)
    for(var q in question)
    {
  if(count===mark)
  {
    textSize(20)
    var pos=250
    text(question[count],600,50)
    
    
    for(var i=0;i<3;i++)
    {
    text(answer[count][i],pos,250) 
    pos+=420
    }

    if((boy.x>displayWidth/2-60 && boy.x<displayWidth/2+10)&& (boy.y>100 && boy.y<200)&& count===0)
    {
     boy.x=800
    boy.y=500
    textSize(20)
    text("Correct Answer",750,500)
    
    mark=1
    }
    /*else if((boy.x<displayWidth/2-60 || boy.x>displayWidth/2+10) && (boy.y>100 && boy.y<150)&& count===0){
      boy.x=800
      boy.y=500
    }*/
    if((boy.x>250 && boy.x<350)&& (boy.y>100 && boy.y<200)&& count===1)
    {
      boy.x=800
      boy.y=500
    textSize(20)
    text("Correct Answer",750,500)
    mark=2
    }
    else if((boy.x<250 || boy.x>350) && (boy.y>100 && boy.y<200)&& count===1){
      boy.x=800
      boy.y=500
    }
    if((boy.x>1100 && boy.x<1200)&& (boy.y>100 && boy.y<200)&& count===2)
    {
      boy.x=800
      boy.y=500
    textSize(20)
    text("Correct Answer",750,500)
    mark=3
    }
    else if((boy.x<1100 || boy.x>1200)&& (boy.y>100 && boy.y<200)&& count===2){
      boy.x=800
      boy.y=500
    }
    if((boy.x>1100 && boy.x<1200)&& (boy.y>100 && boy.y<200)&& count===3)
    {
      boy.x=800
      boy.y=500
    textSize(20)
    text("Correct Answer",750,500)
    mark=4
    }
    else if((boy.x<1100 || boy.x>1200)&& (boy.y>100 && boy.y<200)&& count===3){
      boy.x=800
      boy.y=500
    }
    
    if((boy.x>250 && boy.x<350)&& (boy.y>100 && boy.y<200)&& count===4)
    {
      boy.x=800
      boy.y=500
    textSize(20)
    text("Correct Answer",750,500)
    mark=5

    }
    else if((boy.x<250 || boy.x>350)&& (boy.y>100 && boy.y<200)&& count===4){
      boy.x=800
      boy.y=500
    }
    
    
    
  }

  count=mark
  score=mark
  
  if(mark===5){
    count=0
    
  }
  
}
if(mark===5){
  background("Blue")
    image(treasure,600,400,300,300)
    boy.destroy()
}


/*if(count===1)
{
  textSize(20)
  var pos=250
  text(question)
}*/
  drawSprites();
}


/* 
1.Donal Trump
2.Joe Biden
3.George Washington

*/
//opt 3 1172 x axis