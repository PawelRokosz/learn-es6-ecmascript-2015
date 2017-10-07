//1.11.1

// const products = document.querySelectorAll('.product');

const products =
  Array.from(document.querySelectorAll('.product'));

  products
    .filter(product => parseFloat(product.innerHTML) < 10)
    .forEach(product => product.style.color = 'red');

console.log(products);
