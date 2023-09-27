(() => {
  let productPrice = 100;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number;
  console.log('productInStock', productInStock);
  productInStock = 50;
  if (productInStock > 10) {
    console.log('is grater');
  }

  let discount = parseInt('20');
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  let hex = 0xfff;
  console.log('hex', hex);

  let bin = 0b10100010;
  console.log('bin', bin);
})();
