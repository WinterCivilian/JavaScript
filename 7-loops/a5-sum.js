let number = 0;
let index = 1;
while (true){

    number += index;
    index++;
    console.log(number);


    if(number > 100000){
        console.log(index);
        break;
    }

}