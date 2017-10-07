/**
 * This is our "Entry Point"
 */

 // console.log('Hello');

// function sumTwo(a, b) {
//   return a + b;
// }

// import {sumTwo, sumThree} from 'math/addition';

// import {
//   sumTwo as addTwoNumbers,
//   sumThree
// } from 'math/addition';

import * as _ from 'lodash';

import * as addition from 'math/addition';
import {users} from 'data/users';

// console.log(users);
console.log(_.where(users, {age: 36}));

console.log(
  '2 + 3',
  // sumTwo(2, 3)
  // addTwoNumbers(2, 3)
  addition.sumTwo(2, 3)
)

console.log(
  '2 + 3 + 4',
  // sumThree(2, 3, 4)
  addition.sumThree(2, 3, 4)
)
