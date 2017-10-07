//1.7.1
// console.log([1, 2, 3]);
// console.log(...[1, 2, 3]);

//1.7.2

// let first = [1, 2, 3];
// let second = [4, 5, 6];
//
// // first.push(second);
// first.push(...second);
// first.push(...second);
//
// console.log(first);

//1.7.3
let first = [1, 2, 3];
let second= [4, 5, 6];

function addThreeThings(a, b, c) {
  let result = a + b + c;
  console.log(result);
}

addThreeThings(...first);
addThreeThings(...second);
