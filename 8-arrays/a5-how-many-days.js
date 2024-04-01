months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


function tellMonth (number){

    console.log("There are " + months[number-1] + " days in that month");

}


tellMonth(1);
tellMonth(2);
tellMonth(5);
tellMonth(9);
tellMonth(12);