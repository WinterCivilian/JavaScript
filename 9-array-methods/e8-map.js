const animals = ["horse", "cow", "dog", "hamster", "donkey", "cat", "parrot"];
console.log(animals);

//a
const animalNameLengths = animals.map(animal => animal.length);
console.log(animalNameLengths);

//b animal[1] == toLowerCase("o")

const hasOAsSecond = animals.map(animal => animal[1] == "o");

console.log(hasOAsSecond);