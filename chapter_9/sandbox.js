const products = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
  ];

//const filteredProd = products.filter(product => product.price > 20);

const promos = products
    .filter(product => product.price > 20)
    .map(product => {
    return `the ${product.name} price is ${product.price} euros`;});

console.log(promos);
