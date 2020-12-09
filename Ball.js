class Ball{
    constructor(x,y,r){
    var options={
   
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
    }

this.x=x;
this.y=y;
this.r=r;
this.body =Bodies.circle(this.x , this.y ,this.r,options);
    //this.weidth - 30
    //this.height - 30

    World.add(world,this.body);
    }



    
  
    display(){
     var ball=this.body.position ;
    push();
    translate(ball.x, ball.y);
rectMode(CENTER);
strokeWeight(3)
    ellipse(0,0,this.r)
    pop();
    }

  }
  