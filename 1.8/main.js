//1.8.1
// var salutation = 'Hello';
// var place = 'planet';
// //es5
// // var greeting = salutation + ', World';
// //es6
// var greeting = `
// ${salutation}
// ,
//  You,   this
//           ${place}      and
// World`;
//
// console.log(greeting);

//1.8.2
// var x = 1;
// var y = 2;
// var equation = `${x} + ${y} = ${x+y}`;
//
// console.log(equation);

//1.8.3
function tag(strings, ...values) {
  // console.log(strings);
  // console.log(values);

  if (values[0] < 20) {
    values[1] = 'awake';
  }

  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}

// var message = tag`It's ${new Date().getHours()} I'm sleepy`;
var message = tag`It's ${new Date().getHours()} I'm ${''}`;


console.log(message);
