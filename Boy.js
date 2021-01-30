class Boy{
    
    constructor(x,y){

        var options={
            'isStatic':true           
        }

        this.body = Bodies.rectangle(x,y,300,300,options);
        this.width = 300;
        this.height = 300;
        this.image = loadImage("boy.png");
        World.add(world,this.body);

    }
    display(){

        var pos = this.body.position;

        fill(0);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);

    }

    
}