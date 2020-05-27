function drawShapes2(shapes, context){
    for(let shape of shapes){
        shape.draw(context);
    }
}

function main2(){
    let circle = new Circle2(50);
    circle.setCenter(new Point2(100,75));

    let rectangle = new Rectangle2(150, 100);
    rectangle.setCenter(new Point2(150,30));

    let shapes = [circle, rectangle];
    let canvas: any = document.getElementById("drawing");
    let context: CanvasRenderingContext2D = canvas.getContext("2d");
    drawShapes2(shapes, context);
}
main2();