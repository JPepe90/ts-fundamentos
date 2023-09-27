(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

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

  console.log(products);
})();
