class Animal{
    constructor(weight, cuteness){
        this.weight = weight;
        this.cuteness = cuteness;
    }
    makeSound(){
        console.log("silence");
    }
}


class Cat extends Animal {
    constructor(weight, cuteness) {
        super(weight, cuteness);   
    }  
    makeSound(){
        console.log("meow");
    }
}

class Dog extends Animal {
    constructor(weight, cuteness, breed) {
        super(weight, cuteness);
        this.breed = breed;   
    }  
    makeSound(){
        if (this.cuteness > 4){
            console.log("awoo")
        }
        else{
            console.log("bark")
        }
    }
}

const animal = new Animal(6.5, 4.0);
animal.makeSound();  // prints "silence"
console.log(animal); // prints "Animal { weight: 6.5, cuteness: 4 }"

const kitten = new Animal(1, 10);
const puppy = new Animal(2, 8);
console.log(kitten);
console.log(puppy);


const cat = new Cat(4.5, 3.0);
cat.makeSound();  // prints "meow"
console.log(cat); // prints "Cat { weight: 4.5, cuteness: 3 }"

const dog1 = new Dog(7.0, 4.5, "kleinspitz");
const dog2 = new Dog(30.0, 3.75, "labrador");
console.log(dog1);
console.log(dog2);
dog1.makeSound(); // prints "awoo"
dog2.makeSound(); // prints "bark"