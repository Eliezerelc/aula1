fetch('viacep.com.br/ws/01001000/json/').then(response => {
  console.log('response')
})
 then(corpo => {
     console.log(corpo);
 })
 caches(erro =>{
     console.log('DEU ERRADO')
 })