(()=> {

let prices = [1,2,2,2,1,123,43,5,2, 'hoja', true]
// prices.push('asas')
// prices.push(true)
prices.push(12121)

let products = ['hoja', true]
products.push(false)

let mixed: (number | string | boolean )[] = ['hola', true]
mixed.push('as')
mixed.push(false)

let numbers = [1,2,2,2,1,123,43,5,2]

numbers.map(item => item * 2)

})()
