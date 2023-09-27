// inferencia
let myProductName = 'Product 1';
let myProductPrice = 100;

myProductName = 'change';
myProductName.toLowerCase();

myProductPrice.toFixed();

const myProductStock = 500; // no infiere el tipo porque no es modificable
const myProductName2 = 'Product 2'; // no infiere el tipo porque no es modificable

// explicito
let myProductName3: string = 'Product 3';
let myProductPrice3: number = 1000;
