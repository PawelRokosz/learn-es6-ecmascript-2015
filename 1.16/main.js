//1.16.1
// function myFunc() {
//   arguments.forEach(function(v, i, a) {
//     console.log(v);
//   })
//   console.log(arguments);
// }
//
// myFunc(1, 2, 3);

//1.16.2
function Store() {
  var aisle = {
    fruit: [],
    vegetable: []
  }
  return {
    add: function(category, ...items) {
      // var items = [].splice.call(arguments, 1);
      console.log(items);
      items.forEach(function(value, index, array) {
        aisle[category].push(value);
      })
    },
    aisle: aisle
  }
}

var myGroceryStore = new Store();

myGroceryStore.add('fruit', 'apples', 'oranges');
console.log(myGroceryStore.aisle);
