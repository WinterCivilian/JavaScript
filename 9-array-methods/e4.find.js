const animals = ["horse", "cow", "dog", "hamster", "donkey", "cat", "parrot"];


const endsWithT = animals.find(animal => animal.toLowerCase().endsWith("t"));

const endsInY = animals.find(animal => animal.toLowerCase().endsWith("y"));

const startsWithD = animals.find(animal => animal.toLowerCase().startsWith("d"));

console.log(endsWithT);
console.log(endsInY);
console.log(startsWithD);