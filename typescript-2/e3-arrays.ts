const grades: Array<number | string> = [1, "5", 3, "3", 2, 4, "5", "4", 2, "1"];

for (let grade of grades) {
  if (Number(grade) > 3) {
    console.log(grade);
  }
}