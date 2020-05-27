class seClass{
    constructor(x, y, width, height, angle) {
    option = {
            'restitution':0.8,
            'friction':1,
            'density':3.5
        }
        
        a = random(0,3)
         if(a>=1 ){
            var option = {
              'restitution':0.8,
              'friction':0.7,
              'density':13.5
          }}
          else if(a>=2 ){
            var option = {
              'restitution':0.8,
              'friction':0.01,
              'density':3.0
          }
            console.log(1)
          }
          else if(a>=3 ){
           var option = {
              'restitution':0.8,
              'friction':2,
              'density':5.0
          }
            console.log(2)
          }
        this.body = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}