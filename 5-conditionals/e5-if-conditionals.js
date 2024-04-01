let playerCount = 4;

if (playerCount === 4){
    console.log("We can play!");
}

let isStressed = false;
let hasIceCream = true;

if (!isStressed || hasIceCream){
    console.log("Mark is happy!");
}

let sunShine = true;
let raining = false;
let temperature = 25;

if (sunShine && !raining && temperature >= 20){
    console.log("It is a beach day!")
}

let isTuesday = true;
let seeDan = false;
let seeSuzy = true;

if (isTuesday && (!seeDan && seeSuzy) || (seeDan && !seeSuzy)){
    console.log("Arin is happy!");
}