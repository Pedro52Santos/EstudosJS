console.log('a = ', a) //Aconteceu o hoisting, a variável foi declarada, mas não tem valor atribuido
var a = 2
console.log('a = ', a)

// -------- NÃO USE OO HOISTING ----------

console.log('b = ', b) // quando a variável é let, não ocorre o içamento.
let b = 10
console.log('b = ', b)
