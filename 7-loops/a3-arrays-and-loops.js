const ages = [20, 35, 27, 44, 24, 32];
console.log(ages);

let sum = 0;

for (let number = 0; number < ages.length; number++){
    sum += ages[number];
}

const average = sum/ages.length;
console.log(average);