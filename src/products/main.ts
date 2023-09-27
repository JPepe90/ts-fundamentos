import { addProduct, calcStock, products} from './product.service';

addProduct({
  title: 'producto 1',
  createdAt: new Date(),
  stock: 42,
  size: 'L'
});
addProduct({
  title: 'producto 2',
  createdAt: new Date(),
  stock: 17
});
addProduct({
  title: 'producto 3',
  createdAt: new Date(),
  stock: 9,
  size: 'XL'
});

console.log(products);

const total = calcStock()
console.log(total);
