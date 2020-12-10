class Paper {
    constructor (x,y,radius){
        //super(x,y,70);
        var options ={
            'isStatic' : false,
            'restitution' :0.5,
            'friction' : 0.5,
            'density' : 1.2
        }
        
       
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        this.image = loadImage("Sprites/paper.png")
        World.add(world, this.body);
    }

    display(){
    
    var pos = this.body.position
    push ();
    
    ellipseMode(RADIUS);
    fill("pink");
    stroke("pink");
    circle(pos.x, pos.y, this.radius, this.radius);

    pop ();
    

    }
    
};

