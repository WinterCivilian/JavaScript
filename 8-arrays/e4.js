newArray = ["the", "quick", "brown", "fox"] 

newArray[2] = "gray";

newArray.push("over");
newArray.push("lazy");
newArray.push("dog");

newArray.unshift("pangram:");

console.log(newArray);

newArray.splice(5, 0, "jump");

newArray.splice(7, 0, "the");


console.log(newArray);
