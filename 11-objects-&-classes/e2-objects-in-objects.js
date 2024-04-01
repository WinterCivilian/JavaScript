const student = {
    name: "Aili",
    credits: 45,
    courseGrades: {
        "Intro to Programming": 4,
        "JavaScript Basics": 3,
        "Functional Programming": 5
    }
}


console.log(student);

student.courseGrades["Program design"] = 3;

console.log(student);

student.courseGrades["JavaScript Basics"] = 4;

console.log(student);