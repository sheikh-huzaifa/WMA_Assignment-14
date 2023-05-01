// 13. Write a JavaScript function to retrieve all the names of object's own and inherited properties.

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

function getAllnames(obj) {
  let names = [];
  for (const key in obj) {
    if (typeof obj[key] != "function") {
      names.push(key);
    }
  }
  return names;
}
console.log(getAllnames(object));
