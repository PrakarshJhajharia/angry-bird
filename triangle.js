class Triangle extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,height,height,angle);
      var qw = random(0,3)
      if(qw <= 1){
        this.image = loadImage("sprites/triangle1.png");
        
        }
        else if(qw <= 2){
          this.image = loadImage("sprites/triangle2.png");
          
          }
          else if(qw <= 3){
            this.image = loadImage("sprites/triangle3.png");
            
            }
     
      Matter.Body.setAngle(this.body, angle);
    }
  }