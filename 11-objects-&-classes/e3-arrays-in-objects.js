const student = {
    name: "Aili",
    credits: 45,
    courses: [
        {name: "Intro to Programming", grade: 3},
        {name: "JavaScript Basics", grade: 3},
        {name: "Functional Programming", grade: 5}]
}

const myGrade = student.courses.find(course => course.name == "Intro to Programming").grade;
const myName = student.courses.find(course => course.name == "Intro to Programming").name;

console.log(student.name + " got " + myGrade + " from " + myName);


function addCourse (name1, grade1){

    let myObject = { name: name1, grade: grade1 };
    student.courses.push(myObject);
}

addCourse("Testing", 5);

console.log(student);

addCourse("Finances", 4);

console.log(student);