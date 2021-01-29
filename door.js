class Door{
    constructor(x,y){
        //var options = {isStatic:true}
        //this.body=this.bodies.rectangle
        this.x=x
        this.y=y
this.image=loadImage("image/closed door.png")
    }
    display(){
    image(this.image,this.x, this.y, 100, 100)
    
    }
}