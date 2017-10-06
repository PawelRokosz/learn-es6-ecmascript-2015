//1.3.1
// function greet(greeting, name = 'John') {
//   console.log(greeting + ', ' + name);
// }
//
// greet("Hello");

//1.3.2
// function receive(complete) {
//   complete();
// }
//
// receive();

// function receive(complete) {
//   complete();
// }
//
// receive(function() {
//   console.log('complete');
// })

// function receive(complete = function() {console.log('complete')}) {
//   complete();
// }
//
// receive();

function receive(complete = () => console.log('complete')) {
  complete();
}

receive();
