// 17. Write a JavaScript function to check whether an object contains given property.
let object = {
  name: "Hassan",
  age: 12,
  class: "BScs",
  Experience: "MERN Stack developer",
};
function hasOwnproperty(obj, property) {
  if (property in obj) {
    return `it exists`;
  } else {
    return `not exists`;
  }
}
console.log(hasOwnproperty(object, "Experience"));
