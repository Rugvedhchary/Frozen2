class Hammer{
    constructor(x,y){
        var options = {
            'density': 2,
            'friction': 1.0,
            'restitution': 0.5
        }
        this.body = Bodies.rectangle(x, y, 150, 50, options);
        this.width = 150;
        this.height = 50;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("red");
        strokeWeight(3)
        stroke("blue");
        rectMode(CENTER);
       rect( 0, 0, this.width, this.height);
        pop();
      }
}