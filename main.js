const myPromise = new Promise((resolve, reject) =>{

  setTimeout(() => {
    let operationSucces = false
    if (operationSucces){
      resolve('operacion exitosa')
    }else{
      reject('operacion fallida')
    }

  }, 3000);

})

console.log(myPromise)
//Resolver la promesa
myPromise.then((message => {
  console.log(message)
})).catch((error) => {
  console.log(error)
})
