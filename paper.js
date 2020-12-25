class Paper
{
 constructor(x,y,r){
     var Op={
       isStatic:false,restitution:0.3,friction:0.5,density:1.2
     }
     this.body=Bodies.circle(x,y,r/2,Op);
      World.add(world,this.body);

    }   
    display()
    {
        var p=this.body.position;
         push();                        
        translate(p.x,p.y);            
        rectMode(CENTER)
        fill("red")
        ellipse(0,0,10,10);
        pop();
    }
};
