var student = {
  firstName: "Anh",
  lastName: "Nguyen",
  score: 100,
};

console.log(student.firstName);
console.log(student.score);

for (const item in student) {
  // console.log(item);
  console.log(student[item]);
}

const { firstName,lastName,score } = student;
console.log(firstName);
console.log(lastName);
console.log(score);
