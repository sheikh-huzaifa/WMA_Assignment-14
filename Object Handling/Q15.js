// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
let object = {
  name: "Hassan",
  age: 12,
  class: "BScs",
  Experience: "MERN Stack developer",
};

function keyValue(obj) {
  let pairs = [];
  for (const keys in obj) {
    pairs.push([keys, obj[keys]]);
  }
  return pairs;
}
console.log(keyValue(object));
