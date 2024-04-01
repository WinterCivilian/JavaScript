const score = 5;
const hoursPlayed = 80;
const price =  40;

if (score >= 4 && price === 0 || score === 4 && (hoursPlayed/price) >=4 || score === 5 && (hoursPlayed/price) >=2){
    console.log("The game is worth playing when the price is " + price + ", score is " + score + " and there are at least " + hoursPlayed + " hours played");
}
else{
    console.log("The game is not worth playing when the price is " + price + ", score is " + score + " and there are at least " + hoursPlayed + " hours played");
}