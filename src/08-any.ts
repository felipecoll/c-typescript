(() => {
  let myDynamicVar: any

  myDynamicVar = 100
  myDynamicVar = false
  myDynamicVar = {}

  myDynamicVar = 'Hola'
  const rta = (myDynamicVar as string).toLocaleLowerCase()
  console.log(rta)


})()
