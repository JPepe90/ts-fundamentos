(() => {
  let productTitle = 'My amazing product';
  console.log('productTitle', productTitle);

  let productDescription = "blablablabla";
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew: boolean = true;
  let summary = `resumen:
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;
  console.log('summary', summary);
})();
