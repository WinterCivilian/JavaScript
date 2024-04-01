const numbers = [10,2,3,4,5];

console.log(numbers);

function myArray (array1){
    array1[0] = 1;
    return array1;
}

console.log(myArray(numbers));

const n = {
	henkilö : "Paulus"
};

console.log(n);

function change(object){
    n.harrastus = "lenkkeily";
    return object;
}

change(n);

console.log(n);
