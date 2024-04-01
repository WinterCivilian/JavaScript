// A store is rising the price of a product and is not sure of the result.

// Create a program that calculates the result for them: have two variables, price and increase.
// Based on these, calculate the final price into a variable named result.

// Print the values of all of these variables on their own lines, with fitting explanations. For example, "Original price: 6.5".

// EXTRA: Print the whole calculation in a single line, like price + increase = result


const increase = 1.1;
const price = 10;

let result = price * increase;

console.log("Original price: " + price);
console.log("Price increase: " + increase);
console.log("New price: " + result);

console.log(price + " times " + increase + " = " + result);