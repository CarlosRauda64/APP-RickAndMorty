//MANEJO DE EXCEPCIONES 
const divide = (a,b) => {
  if(b === 0)
  {
    throw new Error('Division entre cero no es posible')
  }
  return a/b
}
try{
  //Aqui corre todo lo que esta bueno
  console.log('resultado', divide(10,0))
}catch{
  //Aqui se manejan los errores
  console.log(error)
  console.log('Ocurrio un error dividiendo')
}finally{
  //Pase algo bueno o malo siempre se ejecuta
  console.log('Siempre funca este volado')
}