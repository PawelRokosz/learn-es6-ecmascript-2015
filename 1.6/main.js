//1.6.1
// var color = 'red';
// var speed = 10;
//
// function go() {
//   console.log('vroom');
// }
//
// //es5
// // var car = {color: color, speed: speed};
//
// //es6
// var car = {color, speed, go};
//
// console.log(car.color);
// console.log(car.speed);
//
// car.go();

//1.6.2

// var color = 'red';
// var speed = 10;
//
// var car = {
//   color,
//   speed,
//   go() {
//     console.log('vroom');
//   }
// };
//
// console.log(car.color);
// console.log(car.speed);
//
// car.go();

//1.6.3

var color = 'red';
var speed = '10';
var drive = 'go';

var car = {
  color,
  speed,
  [drive]: function() {
    console.log('vroom');
  }
};

console.log(car.color);
console.log(car.speed);

car.go();
