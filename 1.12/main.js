//1.12.1
var d = new Promise((resolve, reject) => {
  // throw new Error('error thrown!');
  setTimeout(() => {
    if (true ) {
      resolve('hello world');
    } else {
      reject('no bueno');
    }
  }, 2000);
});

// d.then((data) => console.log('success: ', data)
// // , (error) => {
// //   console.error('new error msg: ', error);}
// );
//
// d.catch((error) => console.log('error: ', error));

d.then((data) => {
  console.log('success: ', data);
  throw new Error('error thrown!');
  return 'foo bar';
  })
  .then((data) => {
    console.log('succes 2: ', data);
    // throw new Error('error thrown!');
  })
  .catch((error) => console.log('error: ', error));
