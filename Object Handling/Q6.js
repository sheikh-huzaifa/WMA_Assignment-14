// 6. Write a Bubble Sort algorithm in JavaScript.
//
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
//
// Sample Data: [6,4,0, 3,-2,1]
//
// Expected Output : [-2, 0, 1, 3, 4, 6]

let data = [6, 4, 0, 3, -2, 1];

let sort = data.sort(function (a, b) {
  return a - b;
});
console.log(sort);
