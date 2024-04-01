const fruits = ["banana", "apple", "grapefruit", "pear", "pineapple", "lemon"];

let index = fruits.indexOf("pear"); 

fruits.splice(index, 1);
console.log(fruits);