// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

let radius = 10;
let height = 10;

let valueIndecimal = {
  volumeOfcylinder: function (r, h) {
    let fullA = Math.PI * Math.pow(r, 2) * h;
    return fullA.toFixed(4);
  },
};

console.log(valueIndecimal.volumeOfcylinder(radius, height));
