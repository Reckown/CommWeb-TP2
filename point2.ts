
class Point2 {
    // Attributs
    private x: Number;
    private y: Number;

    // Constructeur
    constructor(X:Number, Y:Number) {
        this.x = X;
        this.y = Y;
    }

    // Méthodes

    getX() : Number {
        return this.x;
    }

    getY() : Number {
        return this.y;
    }

    setX(X : Number) : void {
        this.x = X;
    }

    setY(Y : Number) : void {
        this.y = Y;
    }

}