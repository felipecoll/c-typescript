(() => {
  let userId: string | number

  userId = 12121
  userId = 'dadas'

  function greeting(myText: string | number) {
    if(typeof myText === 'string') {
      console.log(`string ${myText.toLocaleLowerCase()}`
     )
    }else {
      console.log(`number ${myText.toFixed(1)}`)
    }
  }

  greeting('ada')
  greeting(12121)

})()
