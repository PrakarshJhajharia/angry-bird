class Ground extends base {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/land.png");
    World.remove(world, this.body);
  }

};
