let balance = 500;
isActive = true;
checkBalance = true;

if (checkBalance === false){
    console.log("Have a nice day!");
}
else if(checkBalance === true && isActive === true && balance > 0){
    console.log(balance);
}
else if(checkBalance === true && isActive === false){
    console.log("Your account is not active");
}
else if(checkBalance === true && isActive === true && balance === 0){
    console.log("Your account is empty");
}
else if(checkBalance === true && isActive === true && balance != 0){
    console.log("Your account is negative");
}
