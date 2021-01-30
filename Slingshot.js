class Slingshot{

    constructor(bodyA,pointB){

        var options={

            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:10
        }

        this.pointB = pointB;
        this.ching = Constraint.create(options);
        World.add(world,this.ching);
    }

    fly(){

        this.ching.bodyA = null;
        
    }
    display(){

        if(this.ching.bodyA){

        var A = this.ching.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(2);

        line(A.x,A.y,pointB.x,pointB.y);

        }
    }
}
