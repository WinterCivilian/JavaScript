function increment(n){
    console.log(n)

    increment(n-1);
}

increment(100);

// the program went from 100 to -11186