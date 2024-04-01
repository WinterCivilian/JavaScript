const animals = ["horse", "cow", "dog", "hamster", "donkey", "cat", "parrot"];

const index = animals.findIndex(animal => animal.length >= 6);

console.log(index);
console.log(animals[index]);