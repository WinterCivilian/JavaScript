let distance = 200;
let speed = 80;

let time = distance/speed;
let modulus = time%1;

let hours = time - modulus;
let minutes = modulus * 60;

console.log(modulus + " modulus i.e. anything other than full hours");
console.log(hours + " hours");
console.log(minutes + " minutes");
console.log("The distance of " + distance + " km at the speed of " + speed + " km/h takes " + hours + " hours and " + minutes + " minutes");


distance = 50;
speed = 30;
time = distance/speed;
modulus = time%1;
hours = time - modulus;
minutes = modulus * 60;

console.log("The distance of " + distance + " km at the speed of " + speed + " km/h takes " + hours + " hours and " + minutes + " minutes");

distance = 10;
speed = 100;
time = distance/speed;
modulus = time%1;
hours = time - modulus;
minutes = modulus * 60;

console.log("The distance of " + distance + " km at the speed of " + speed + " km/h takes " + hours + " hours and " + minutes + " minutes");


distance = 15;
speed = 40;
time = distance/speed;
modulus = time%1;
hours = time - modulus;
minutes = modulus * 60;

console.log("The distance of " + distance + " km at the speed of " + speed + " km/h takes " + hours + " hours and " + minutes + " minutes");
