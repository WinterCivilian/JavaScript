const students = [ { name: "Sami", score: 24.75 },
                   { name: "Heidi", score: 20.25 },
                   { name: "Jyrki", score: 27.5 },
                   { name: "Helinä", score: 26.0 },
                   { name: "Maria", score: 17.0 },
                   { name: "Yrjö", score: 14.5  } ];


function getGrades(studentList){
    
    let grades = [];

    for (let i = 0; i < studentList.length; i++){
        if (studentList[i].score < 14){
            grades.push(0)
        }
        else if (studentList[i].score <= 17){
            grades.push(1)
        } 
        else if (studentList[i].score <= 20 ){
            grades.push(2)
        }
        else if (studentList[i].score <= 23 ){
            grades.push(3)
        }
        else if (studentList[i].score <= 26){
            grades.push(4)
        }
        else {
            grades.push(5)
        }
    }

    return grades;

}


console.log(getGrades(students));