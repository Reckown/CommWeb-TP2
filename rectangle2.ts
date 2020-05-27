class Rectangle2 extends Shape2 {
    // Attributs
    private l: Number;
    private h: Number;

    // Constructeur
    constructor(L:Number, H:Number) {
        super();
        this.l = L;
        this.h = H;
    }

    // Méthodes
    getL() : Number {
        return this.l;
    }

    getH() : Number {
        return this.h;
    }

    draw(draw) : void {
        draw.beginPath();
        draw.rect(this.getCenter().getX(), this.getCenter().getY(), this.l, this.h);
        draw.stroke();
    }
}