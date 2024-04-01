let incomeOne = 100;
let incomeTwo = 10;
console.log("Before exponentation: " + incomeOne);
console.log("Before exponentation: " + incomeTwo);


let incomeDifference = incomeOne - incomeTwo;
console.log("Difference: " + incomeDifference);

incomeOne = incomeOne ** 0.9;
incomeTwo = incomeTwo ** 0.9;
console.log("After exponentation: " + incomeOne);
console.log("After exponentation: " + incomeTwo);

incomeDifference = incomeOne - incomeTwo;
console.log("New difference: " + incomeDifference);
