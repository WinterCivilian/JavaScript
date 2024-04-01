const animals = ["horse", "cow", "dog", "hamster", "donkey", "cat", "parrot"];

//a
const withoutO = animals.filter(animal => !animal.toLowerCase().includes("o"));
console.log(withoutO);
//b
const withoutOorH = animals.filter(animal => !animal.toLowerCase().includes("o") && !animal.toLowerCase().includes("h"));
console.log(withoutOorH);
