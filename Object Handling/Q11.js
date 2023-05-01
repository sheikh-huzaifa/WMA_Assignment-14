// 11. Write a JavaScript function to print all the methods in an JavaScript object.
//
// Test Data :
//
// console.log(all_properties(Array));
//
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]

let allMethods = [];

let obj = {
  name: "Hassan",
  className: 12,

  area: function (r, pi) {
    return pi * Math.pow(r, 2);
  },

  perimeter: function (r, pi) {
    return 2 * pi * r;
  },
};

function all_properties(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "function") {
      allMethods.push(key);
    }
  }
}

all_properties(obj);
console.log(allMethods);
