(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }
  const product1 = createProductToJson('p1', new Date(), 12, 'XL');
  console.log(product1);
  console.log(product1.title);
  console.log(product1.stock);
  console.log(product1.size);

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };
  const product2 = createProductToJsonV2('p1', new Date(), 12);
  console.log(product2);
  console.log(product2.title);
  console.log(product2.stock);
  console.log(product2.size);
})();

//(() => {  type Sizes = 'S' | 'M' | 'L' | 'XL';  function createProductToJson(    title: string,    createdAt: Date,    stock: number,    size: Sizes  ) {    return {      title,      createdAt,      stock,      size,    };  }  const product1 = createProductToJson('p1', new Date(), 12, 'XL');  console.log(product1);  console.log(product1.title);  console.log(product1.stock);  console.log(product1.size);
//&#x20; const createProductToJsonV2 = (    title: string,    createdAt: Date,    stock: number,    size?: Sizes  ) => {    return {      title,      createdAt,      stock,      size,    };  };  const product2 = createProductToJsonV2('p1', new Date(), 12);  console.log(product2);  console.log(product2.title);  console.log(product2.stock);  console.log(product2.size);})();
