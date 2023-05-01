// 14. Write a JavaScript function to retrieve all the values of an object's properties.
let object = {
  name: "Hassan",
  age: 19,
  method1: function (a, b) {
    return a + b;
  },
  method2: function (a, b) {
    return a * b;
  },
  method3: function (a, b) {
    return a / b;
  },
};
function getAllpro(obj) {
  let allValues = [];
  for (const key in obj) {
    if (typeof obj[key] != "function") {
      allValues.push(obj[key]);
    }
  }
  return allValues;
}
console.log(getAllpro(object));
