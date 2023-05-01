// 16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

let object = {
  name: "Hassan",
  age: 19,
  class: "BScs",
  Experience: "MERN Stack developer",
};
function keyBecomevalue(obj) {
  let newObject = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObject[obj[key]] = key;
    }
  }
  return newObject;
}

console.log(keyBecomevalue(object));
