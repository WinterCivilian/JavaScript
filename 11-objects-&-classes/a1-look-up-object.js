//A
const scoreLookupObject = {
    "S": 8,
    "A": 6,
    "B": 4,
    "C": 3,
    "D": 2,
    "F": 0,
};

function calculateTotalScore (grades){

    score = 0;
    
    for (let i = 0; i < grades.length; i++){
        score += scoreLookupObject[grades[i]];
    }

    return score;
}

const totalScore = calculateTotalScore("DFCBDABSB");
console.log(totalScore); // prints 33

//B
function calculateAverageScore (grades){

   return calculateTotalScore(grades)/grades.length;
}


const averageScore = calculateAverageScore("DFCBDABSB");
console.log(averageScore); // prints 3.6666666666666665

const myArray = ["AABAACAA", "FFDFDCCDCB", "ACBSABA", "CCDFABABC"];

const newArray = myArray.map(arr => calculateAverageScore(arr));

console.log(newArray);
