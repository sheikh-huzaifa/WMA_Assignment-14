// 10. Write a JavaScript program to sort an array of JavaScript objects.
// Sample Object :
//
// var library = [
//    {
//        title:  'The Road Ahead',
//
//        author: 'Bill Gates',
//
//        libraryID: 1254
//
//    },
//    {
//        title: 'Walter Isaacson',
//
//        author: 'Steve Jobs',
//
//        libraryID: 4264
//
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//
//        author: 'Suzanne Collins',
//
//        libraryID: 3245
//
//    }];
// Expected Output:
//
// [[object Object] {
//
//   author: "Walter Isaacson",
//
//   libraryID: 4264,
//
//   title: "Steve Jobs"
//
// }, [object Object] {
//
//   author: "Suzanne Collins",
//
//   libraryID: 3245,
//
//   title: "Mockingjay: The Final Book of The Hunger Games"
//
// }, [object Object] {
//
//   author: "The Road Ahead",
//
//   libraryID: 1254,
//
//   title: "Bill Gates"
//
// }]

var library = [
  {
    title: "The Road Ahead",

    author: "Bill Gates",

    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",

    author: "Steve Jobs",

    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",

    author: "Suzanne Collins",

    libraryID: 3245,
  },
];
let sort = library.sort((l1, l2) => {
  if (l1.libraryID < l2.libraryID) {
    return 1;
  } else if (l1.libraryID > l2.libraryID) {
    return -1;
  } else {
    return 0;
  }
});
console.log(sort);
