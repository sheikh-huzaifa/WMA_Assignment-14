// 8. Write a JavaScript program to create a Clock.
//
// Note: The output will come every second.
//
// Expected Console Output :
//
// "14:37:42"
//
// "14:37:43"
//
// "14:37:44"
//
// "14:37:45"
//
// "14:37:46"
//
// "14:37:47"

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
console.log(`${hours}:${minutes}:${seconds}`);
