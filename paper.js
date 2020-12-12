class Paper
{
 constructor(x,y,ellipse)
 {
    var options= 
    {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.x=x;
    this.y=y;
    this.ellipse=ellipse
    this.body = Bodies.circle(this.x,this.y,this.ellipse,options)
    this.image=loadImage("paper.png")
    World.add(world,this.body)
 
 }
   display()
 {
        var paperpos=this.body.position;
       image(this.image,100,280)
        push()
        translate(paperpos.x,paperpos.y)
        ellipseMode(CENTER);
        strokeWeight(3);
        fill(255,0,255)
        ellipse(0,0,this.ellipse,this.ellipse)
        pop();
 }
}