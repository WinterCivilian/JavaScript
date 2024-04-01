const number1 = 5;
const number2 = 5;
const number3 = 10;

if (number1 === number2 && number1 === number3){
    console.log("All are equal");
}
else if (number1 >= number2 && number1 >= number3){
    console.log(number1 + " is the biggest");
}
else if (number2 >= number1 && number2 >= number3){
    console.log(number2 + " is the biggest");
}
else if (number3 >= number1 && number3 >= number2){
    console.log(number3 + " is the biggest");
}


if (number1 <= number2 && number1 <= number3){
    console.log(number1 + " is the smallest");
}
else if (number2 <= number1 && number2 <= number3){
    console.log(number2 + " is the smallest");
}
else if (number3 <= number1 && number3 <= number2){
    console.log(number3 + " is the smallest");
}