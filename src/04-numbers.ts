(()=> {
  let productPrice = 100
  productPrice = 105.50
  console.log('productPrice', productPrice)

  let customerAge: number = 25
  customerAge = customerAge + 1 // 26
  console.log('customerAge', customerAge)

  let productInStock: number
  console.log('productInStock', productInStock) // undefined

if(productInStock > 10) {
  console.log('Is greater')
}

})()
