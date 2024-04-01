let number = 1;
let factorial = 1;

while(true){

if(factorial % 600 === 0){
    console.log(number);
    break;
}

factorial *= number;
number++;

}