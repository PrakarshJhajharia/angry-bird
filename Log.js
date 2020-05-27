class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    var qw = random(0,3)
    if(qw <= 1){
      this.image = loadImage("sprites/wood21.png");
      
      }
      else if(qw <= 2){
        this.image = loadImage("sprites/wood22.png");
        
        }
        else if(qw <= 3){
          this.image = loadImage("sprites/wood23.png");
          
          }
   
    Matter.Body.setAngle(this.body, angle);
  }
}