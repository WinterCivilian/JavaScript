let candy = 100;
const people = 6;

//reduce modulus from the division to get an integer number
//const candyPerPerson = division - division%1;

//console.log("Everyone gets " + candyPerPerson + " candies");

const extraCandy = candy%people;
console.log("There are " + extraCandy + " extra candies");

candy = candy - extraCandy;

const division = candy/people;

console.log("Everyone gets " + division + " candies");