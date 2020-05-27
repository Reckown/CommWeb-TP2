abstract class Shape2 {
    // Attributs
    private center: Point2;

    // Méthodes
    abstract draw(draw) : void;

    setCenter(C : Point2) : void {
        this.center = C;
    }

    getCenter() : Point2 {
        return this.center;
    }
}