
class Circle2 extends Shape2 {
    private r: Number;

    constructor(R:Number) {
        super();
        this.r = R;
    }

    getR() : Number {
        return this.r;
    }

    draw(draw) : void {
        draw.beginPath();
        draw.arc(this.getCenter().getX(), this.getCenter().getY(), this.r, 0, 2*Math.PI);
        draw.stroke();
    }
}