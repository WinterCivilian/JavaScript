class Shape {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);  
    }  

    getArea(){
        return this.width * this.height;
    }
}    

class Ellipse extends Shape {
        constructor(width, height) {
            super(width, height);     
        }  
    
        getArea(){
            return Math.PI * (this.width / 2) * (this.height / 2)    ;
        }
}

class Triangle extends Shape {
    constructor(width, height) {
        super(width, height);   
    }  

    getArea(){
        return this.width * this.height / 2   ;
    }
}


class Square extends Rectangle {
    constructor(width) {
        super(width);  
    }  

    getArea(){
        return this.width * this.width;
    }
}  

class Circle extends Ellipse {
    constructor(width) {
        super(width);  
    }  

    getArea(){
        return Math.PI * this.width**2;
    }
}


const square1 = new Square(10);
const circle1 = new Circle(1);

const square2 = new Square(5);
const circle2 = new Circle(2);

const square3 = new Square(9);
const circle3 = new Circle(0.5);


console.log(square1.getArea());
console.log(circle1.getArea());

console.log(square2.getArea());
console.log(circle2.getArea());

console.log(square3.getArea());
console.log(circle3.getArea());