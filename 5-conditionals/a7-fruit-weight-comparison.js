const pear = {
    name: "pear",
    weight: 178,
};

const lemon = {
    name: "lemon",
    weight: 120, 
};

const apple = {
    name: "apple",
    weight: 90,
};

const mango = {
    name: "mango",
    weight: 150,
};

averageWeight = (pear.weight + lemon.weight + apple.weight + mango.weight)/4
console.log(averageWeight);

let pearDifference = averageWeight - pear.weight;
let lemonDifference = averageWeight - lemon.weight;
let appleDifference = averageWeight - apple.weight;
let mangoDifference = averageWeight - mango.weight;

if (Math.abs(pearDifference) < Math.abs(lemonDifference) && Math.abs(pearDifference) < Math.abs(appleDifference) && Math.abs(pearDifference) < Math.abs(mangoDifference)){
    console.log(pear.name);
}
else if (Math.abs(lemonDifference) < Math.abs(pearDifference) && Math.abs(lemonDifference) < Math.abs(appleDifference) && Math.abs(lemonDifference) < Math.abs(mangoDifference)){
    console.log(lemon.name);
}
else if (Math.abs(appleDifference) < Math.abs(pearDifference) && Math.abs(appleDifference) < Math.abs(lemonDifference) && Math.abs(appleDifference) < Math.abs(mangoDifference)){
    console.log(apple.name);
}
else if (Math.abs(mangoDifference) < Math.abs(pearDifference) && Math.abs(mangoDifference) < Math.abs(appleDifference) && Math.abs(mangoDifference) < Math.abs(lemonDifference)){
    console.log(mango.name);
}
else {console.log("Nothing was closest to the average");}
    
