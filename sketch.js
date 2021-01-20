var particle;

function setup() {
    createCanvas(600, 600);
    particle = new particle(100, 100);
}

function draw() {
    background(200);
    particle.update();
    particle.show();
}

function particle(x, y){
    this.x = x;
    this.y = y

    this.history = [];

    this.update = function(){
        this.x += random(-15, 15);
        this.y += random(-15, 15);

        var v = createVector(this.x, this.y);
        this.history.push(v);

        if(this.history.length > 25){
            this.history.splice(0, 1);
        }
    }

    this.show = function(){
        stroke(0);
        fill(0,150);
        ellipse(this.x, this.y, 24, 24);

        for (var i = 0; i < this.history.length; i++){
            var pos = this.history[i];
            fill(random(255));
            ellipse(pos.x, pos.y, 8, 8)
        }
    }
}