//1.1.1
// var createGreeting = function(message, name) {
//   return message + name;
// }
//
// var arrowGreeting = (message, name) => {
//   return message + name;
// }
//
// var arrowGreeting2 = message => message;
//
// var squared = x => x * x;

//1.1.2
// var deliveryBoy = {
//   name: 'John',
//
//   handleMessage: function(message, handler) {
//     handler(message);
//   },
//
//   receive: function() {
//     var that = this;
//     this.handleMessage('Hello, ', function(message) {
//       that.name;
//
//       console.log(message + that.name);
//     })
//   }
// }
//
// deliveryBoy.receive();

var deliveryBoy = {
  name: 'John',
  handleMessage: function(message, handler) {
    handler(message);
  },
  receive: function() {
    this.handleMessage('Hello, ', message => console.log(message + this.name));
  }
}

deliveryBoy.receive();
