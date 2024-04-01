class Room{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    furniture = [];

    addFurniture(furni){
        this.furniture.push(furni);
    }

    getArea(){
        return this.width * this.height;
    }
}

const room = new Room(4.5, 6.0);
console.log(room); // Room { width: 4.5, height: 6 }

const area = room.getArea();
console.log(area); // prints 27

room.addFurniture("sofa");
room.addFurniture("bed");
room.addFurniture("chair");
console.log(room); // prints Room { width: 4.5, height: 6, furniture: [ 'sofa', 'bed', 'chair' ] }
