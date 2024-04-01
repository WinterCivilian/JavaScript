const animals = ["horse", "cow", "dog", "hamster", "donkey", "cat", "parrot"];

const withoutO = animals.filter(animal => !animal.toLowerCase().includes("o"));

for (let i = 0; i < withoutO.length; i++){
    console.log(withoutO[i]);
}

