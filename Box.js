class Box{
  constructor(x, y, width, height){
    var options={
      'restitution':0,
      'friction':1.5,
      'density':3.0
      //'isStatic':true
    }
    //this.visibility=225;
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    
  }

  display(){
    var pos = this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    fill("red");
  }


}
