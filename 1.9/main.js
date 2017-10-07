//1.9.1
// var obj = {
//   color: 'blue'
// }
//
// console.log(obj.color);

// var {color} = {
//   color: 'blue'
// }
//
// console.log(color);

//1.9.2

// var {color, position} = {
//   color: 'blue',
//   name: 'John',
//   state: 'New York',
//   position: 'Forward'
// }
//
// console.log(color);
// console.log(position);

//1.9.3
// function generateObj() {
//   return {
//     color: 'blue',
//     name: 'John',
//     state: 'New York',
//     position: 'Forward'
//   }
// }
//
// // generateObj();
// // var {name, state} = generateObj();
// var {name:firstName, state:location} = generateObj();
//
// // console.log(name);
// // console.log(state);
// console.log(firstName);
// console.log(location);

//1.9.4
// var [first,,,,fifth] = ['red', 'yellow', 'green', 'blue', 'orange'];
// console.log(first);
// console.log(fifth);

//1.9.5

var people = [
  {
    "firstName": "Clinton",
    "lastName": "Ruiz",
    "phone": "1-403-985-0449",
    "email": "pharetra@facilisislorem.org",
    "address": "Ap #829-3443 Nec St."
  },
  {
    "firstName": "Skyler",
    "lastName": "Carroll",
    "phone": "1-429-754-5027",
    "email": "Cras.vehicula.alique@diamProin.ca",
    "address": "P.O. Box 171, 1135 Feugiat St."
  },
  {
    "firstName": "Kylynn",
    "lastName": "Madden",
    "phone": "1-637-627-2810",
    "email": "mollis.Duis@ante.co.uk",
    "address": "993-6353 Aliquet, Street"
  },
  {
    "firstName": "Chaney",
    "lastName": "Edwards",
    "phone": "1-397-181-4501",
    "email": "rutrum@Nullamlobortis.net",
    "address": "P.O. Box 342, 9574 Egestas Street"
  }
]

// people.forEach(({firstName}) => console.log(firstName));

var [,Skyler] = people;

function logEmail({email}) {
  console.log(email);
}

logEmail(Skyler);
