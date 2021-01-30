class Stone{

    constructor(x,y){

        var options={

            'isStatic':false,
            'restitution':0,
            'friction':0,
            'density':1.2
        }

        this.body = Bodies.circle(x,y,20,options);
        this.image = loadImage("stone.png");
        this.radius = 20;

        World.add(world,this.body);

    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(23);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image,0,0,this.width,this.height);
        pop();

    }
}