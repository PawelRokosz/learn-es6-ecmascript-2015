//1.13.1
// function* greet() {
//   console.log(`You called 'next()'`);
//   yield 'hello';
// }
//
// // greet();
// let greeter = greet();
// console.log(greeter);
// let next = greeter.next();
// console.log(next);
// let done = greeter.next();
// console.log(done);

//1.13.2
// function* greet() {
//   console.log(`Generatorsare "lazy"`);
//   yield 'How';
//   console.log(`I'm not called until the second next`);
//   yield "are";
//   console.log(`Called me before "you?"`);
//   yield "you?";
//   console.log(`Called when "done"`);
// }
//
// var greeter = greet();
// console.log(greeter.next());
// console.log(greeter.next());
// console.log(greeter.next());
// console.log(greeter.next());

// for (let word of greeter) {
//   console.log(word);
// }

// console.log(greeter.next().value);
// console.log(greeter.next().value);
// console.log(greeter.next().value);
// console.log(greeter.next().value);

//1.13.3
// function* greet() {
//   let friendly = yield "How";
//   // console.log(friendly);
//   friendly = yield friendly + " are";
//   yield friendly + "you?";
// }
//
// var greeter = greet();
// console.log(greeter.next('First').value);
// console.log(greeter.next('the heck').value);
// console.log(greeter.next('silly ol').value);

//1.13.4
function* graph() {
  let x = 0;
  let y = 0;
  while (true) {
    yield {x:x, y:y}
    x += 2;
    y += 1;
  }
}

var graphGenerator = graph();
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
