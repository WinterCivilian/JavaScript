const numbers = [5, 13, 2, 10, 8];


let product = 1;
numbers.forEach(number => product *= number);
console.log(product);

let sum = 0;
numbers.forEach(number => sum += number);
let average = sum/numbers.length;

console.log(average);