class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }

}

const rectangle1 = new Rectangle(10, 5);
const rectangle2 = new Rectangle(7, 7);
const rectangle3 = new Rectangle(1, 2);
const rectangle4 = new Rectangle(10, 10);

console.log(rectangle1.getArea());
console.log(rectangle2.getArea());
console.log(rectangle3.getArea());
console.log(rectangle4.getArea());
