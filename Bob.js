class Bob{
  constructor(x,y,r){
    var options = {
      isStatic: true
    }

    this.body = Bodies.circle(x,y,r);
    this.x = x;
    this.y = y;
    this.r = r;

    World.add(world,this.body);
  }

  display(){
    //bn = this.body.position;
    //angle = this.body.angle;
    
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    fill("pink");
    ellipseMode(CENTER);
    ellipse(0,0,this.r);
    pop();
  }
}