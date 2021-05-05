let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
/* Os valores numéricos se comportam como verdadeiros e falsos,
é preciso análisar pra saber se é verdadeiro ou falso */ 

console.log(!!isAtivo) // negando duas vezes vai mostrar o valor lógico dele

console.log('os verdadeiros.....') //todos números inteiros são verdadeiros EXCETO 0
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // um espaço em branco é verdadeiro, significa que tem algo preenchendo ela!
console.log(!!"texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
// Os de verdade eu sei quem são.....

console.log("Os falsos....")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

// Também é possível fazer testes lógicos com isso

let Nome = ''
console.log(nome || 'desconhecido') // como não tem nada preenchendo, vai retornar o desconhecido
Nome = 'Pedro'
console.log(nome || 'desconhecido') // como é verdadeiro, pois tem algo preenchendo o espaçõ vazio, retorna nome.

