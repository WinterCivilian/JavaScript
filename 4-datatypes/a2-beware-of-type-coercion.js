//a
let number;
const result1 = 10 + number;

console.log(typeof(number));

number = null;
const result2 = 10 + number;

console.log(result1);
console.log(result2);

// number's type is undefined
// result1 is the sum of a number and undefined
// result2 is the sum of a number and an empty value, null is not undefined even though it's empty


const a = true;
const b = false;

const c = a + b;
const d = 10 + a;
const e = 10 + b;

console.log(c);
console.log(d);
console.log(e);

// c = 1
// d = 11
// e = 10
// "true" is probably counted as 1 and false as 0.
// boolean is a binary value, as in either 1 or 0.
