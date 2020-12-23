class Paper
{
 constructor(x,y,w,h){
     var Op={
       isStatic:false,restitution:0.3,friction:0.5,density:1.2
     }
     this.body=Bodies.circle(x,y,w,h);
     Matter.Bodies.circle(100,200,10);
    World.add(world,this.body);

    }   
    display()
    {
        var p=this.body.position;
        var a=this.body.angle;
        push();                        
        translate(p.x,p.y);            
        rotate(a);                     
        fill("red")
        ellipse(0,0,10);
        pop();
    }
};