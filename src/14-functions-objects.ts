(() => {
  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password);
  }

  login({
    email: 'cjp90@mail.com',
    password: 'lalala'
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
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
