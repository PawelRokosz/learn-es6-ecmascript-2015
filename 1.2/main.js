//1.2.1
// var message = 'hi';
//
// {
//   var message = 'bye';
// }
//
// console.log(message);

// let message = 'hi';
//
// {
//   let message = 'bye';
// }
//
// console.log(message);

//1.2.2
// var fs = [];
//
// for (var i = 0; i < 10; i++) {
//   fs.push(function() {
//     console.log(i);
//   })
// }
//
// fs.forEach(function(f) {
//   f();
// })

// var fs = [];
//
// for (let i = 0; i < 10; i++) {
//   fs.push(function() {
//     console.log(i);
//   })
// }
//
// fs.forEach(function(f) {
//   f();
// });

//1.2.3
// function varFunc() {
//   var previous = 0;
//   var current = 1;
//   var i;
//   var temp;
//
//   for (i = 0; i < n; i += 1) {
//     temp = previous;
//     previous = current;
//     current = temp + current;
//   }
// }

function letFunc(n) {
  let previous = 0;
  let current = 1;

  for (let i = 0; i < n; i += 1) {
    let temp = previous;
    previous = current;
    current = temp + current;
    console.log(current);
  }
}

console.log(letFunc(10));
