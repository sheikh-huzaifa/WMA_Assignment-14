// 7. Write a JavaScript program which returns a subset of a string.
//
// Sample Data: dog
//
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

let string = "eye";
let slice = 1;
let slice2 = 1;
let subSet1 = [];
for (let i = 0; i < string.length; i++) {
  subSet1.push(string.slice(0, slice));
  slice++;
}
for (let i = 0; i < string.length - 1; i++) {
  subSet1.push(string.slice(slice2, string.length));
  slice2++;
}
console.log(subSet1);
