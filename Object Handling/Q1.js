// 1. Write a JavaScript program to list the properties of a JavaScript object
//
// var student = {
//
// name : "David Rayy",
//
// sclass : "VI",
//
// rollno : 12 };
//
// Sample Output: name,sclass,rollno

var student = {
  name: "David Rayy",

  sclass: "VI",

  rollno: 12,
};
let studentData;
for (const key in student) {
  studentData = `My name is ${student.name} I study in ${student.sclass} and my roll number is ${student.rollno}`;
}
console.log(studentData);
