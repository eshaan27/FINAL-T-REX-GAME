class Ground{
    constructor(x,y,width,height){
      var options={
        
IsStatic:true
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
    }
    display(){
      var pos=this.body.position;
      
      
       
      rectMode(CENTER);
      fill ("red");
      rect (pos.x,pos.y,this.width,this.height);
    }
  }