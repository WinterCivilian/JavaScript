const animals = ["horse", "cow", "dog", "hamster", "donkey", "cat", "parrot"];

for (let animal of animals) {
    if (animal.toLowerCase().includes("e")){
        console.log(animal);
    }
}

animals.forEach(animal => {
    if (animal.toLowerCase().includes("e")) {
        console.log(animal);
    }
});
