// 3. Write a JavaScript program to get the length of a JavaScript object.
//
// Sample object :
//
// var student = {
//
// name : "David Rayy",
//
// sclass : "VI",
//
// rollno : 12
// };

let students = {
  name: "David Rayy",

  sclass: "VI",

  rollno: 12,
};
let length = 0;
for (const key in students) {
  if (students.hasOwnProperty(key)) {
    length++;
  }
}
console.log(length);
