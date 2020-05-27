class Platform extends base {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/plan.png");
      World.remove(world, this.body);
    }
  
  };
  