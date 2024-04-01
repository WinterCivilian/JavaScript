isAnimal = true;
isCat = true;

if (isCat && isAnimal){
    console.log("Both are true");
}
else if (isCat && !isAnimal) {
    console.log("first is true, second is false");
}
else if (!isCat && isAnimal) {
        console.log("first is false, second is true");
} else {
    console.log("both are false");
}
