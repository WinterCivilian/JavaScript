function minimum (a,b,c){

if (a <= b && a <= c){
    return a;
}
else if (b <= a && b <= c){
    return b;
}
else {
    return c;
}
}

console.log(minimum(1,2,3));
console.log(minimum(1,-1,0));
console.log(minimum(100,0,0));
console.log(minimum(25,16,8));
console.log(minimum(3,0.1,13));
console.log(minimum(2500,-10,-10));
console.log(minimum(4000,5000,10000));
