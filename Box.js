class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    var qww = random(0,3)
    if(qww <= 1){
      this.image = loadImage("sprites/wood11.png");
      
      }
      else if(qww <= 2){
        this.image = loadImage("sprites/wood12.png");
        
        }
        else if(qww <= 3){
          this.image = loadImage("sprites/wood13.png");
          
          }
  }

};
