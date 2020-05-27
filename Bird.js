class Bird extends seClass {
  constructor(x,y){
    super(x,y,50,50);
   
    
    console.log(a)
     if(a <= 1){
     this.image = loadImage("sprites/bird1.png");
     c = 1;
     }
     else if(a <= 2){
       this.image = loadImage("sprites/bird2.png");
       c = 2;
       }
       else if(a <= 3){
         this.image = loadImage("sprites/bird6.png");
         c = 3;
         }
         
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
   
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      
    }
  }
}
