const numbers = [5, 14, 7, 25, 16, 1, 100];

let sum = 0;
numbers.forEach(number => sum += number)
console.log(sum);

const sumReduce = numbers.reduce((accumulator, current) => accumulator + current);
console.log(sumReduce);

const newNumbers = [1, 2, "abc", 56, true, 13]


// Extra, filter NaNs aways
const newSum = newNumbers.filter(number => typeof(number) === 'number');
console.log(newSum);

sum = 0;
newSum.forEach(number => sum += number)
console.log(sum);
