// 9. Write a JavaScript program to calculate the area and perimeter of a circle.
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

// calculate Area of circle

let radius = 10;
let pI = 3.14;
// Now to creating two methods to calculate the area and perimeter
const areAndParameter = {
  area: function (r, pi) {
    return pi * Math.pow(r, 2);
  },
  perimeter: function (r, pi) {
    return 2 * pi * r;
  },
};

console.log(
  `Area of Circle is: ${areAndParameter.area(radius, pI).toFixed(2)}`
);
console.log(
  `Parameter of Circle ${areAndParameter.perimeter(radius, pI).toFixed(2)}`
);
