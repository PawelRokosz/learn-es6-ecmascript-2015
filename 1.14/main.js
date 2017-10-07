//1.14.1

// var myMap = new Map();

//API

// set()
// get()
// size
// clear()
// has()

// myMap.set('foo', 'bar');
// myMap.set('hello', 'world');

// console.log(myMap.get('foo')); //bar
// console.log(myMap.get('something')); //undefined
// console.log(myMap.size); //2

// myMap.clear();
// console.log(myMap.size); //0

// console.log(myMap.has('foo')); //true
// console.log(myMap.has('something')); //false

//Iterators
//keys()
//entries()
//values

// for (var key of myMap.keys()) {
//   console.log(key); //foo hello
// }
//
// for (var val of myMap.values()) {
//   console.log(val); //bar world
// }
//
// for (var [key, value] of myMap.entries()) {
//   console.log(key + ' = ' + value); //foo = bar hello = world
// }

//1.14.2

// var myMap = new Map();
//
// var myObj = {};
// var myFunc= function(){};
//
// myMap.set(myObj, 'bar');
// myMap.set(myFunc, 'world');
// myMap.set('string', 2);
//
// for (var [key, value] of myMap.entries()) {
//   console.log(key + ' = ' + value);
// }

//1.14.3

var myMap = new WeakMap();

var myObj = {};
var myFunc= function(){};

myMap.set(myObj, 'bar');
myMap.set(myFunc, 'world');
// myMap.set('string', 2);

for (var [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value);
}
