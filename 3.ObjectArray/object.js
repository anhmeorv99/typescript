var student = {
    firstName: "Anh",
    lastName: "Nguyen",
    score: 100,
};
console.log(student.firstName);
console.log(student.score);
for (var item in student) {
    // console.log(item);
    console.log(student[item]);
}
var firstName = student.firstName, lastName = student.lastName, score = student.score;
console.log(firstName);
console.log(lastName);
console.log(score);
