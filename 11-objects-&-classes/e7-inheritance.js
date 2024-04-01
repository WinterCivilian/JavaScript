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



const rectangle1 = new Rectangle(10, 5);
const ellipse1 = new Ellipse(2,2);
const triangle1 = new Triangle(10,15);

const rectangle2 = new Rectangle(1, 8);
const ellipse2 = new Ellipse(7,9);
const triangle2 = new Triangle(3,3);

console.log(rectangle1.getArea());
console.log(ellipse1.getArea());
console.log(triangle1.getArea());

console.log(rectangle2.getArea());
console.log(ellipse2.getArea());
console.log(triangle2.getArea());