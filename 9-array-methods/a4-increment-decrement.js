//a
function incrementAll (arr){

  uusi = arr.map(unit => unit+1);
  return uusi;

}

const numbers = [ 4, 7, 1, 8, 5 ];
const newNumbers = incrementAll(numbers);
console.log(newNumbers); // prints [ 5, 8, 2, 9, 6 ]

//b
function decrementAll (arr2){

    uusi2 = arr2.map(unit => unit-1);
    return uusi2;
  }


const newNumbers2 = decrementAll(numbers);
console.log(newNumbers2); // prints [ 3, 6, 0, 7, 4 ]