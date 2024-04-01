const numbers = [8, 12, 17, 9, 16, 24, 16, 25, 35, 27, 38, 50];

//a
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] > 20){
            console.log(numbers[i]);
            break;
    }
}

//b
const number20 = numbers.find(number => number > 20);
console.log(number20);

//c
const index = numbers.findIndex(number => number > 20);
console.log(index);

numbers.splice(index+1);
console.log(numbers); //prints 24 also
