let num1 = 1
let num2 = 2

num1++ //forma pós fixada
console.log(num1)
--num1 //forma pré fixada
console.log(num1)

console.log(++num1 === num2--) 
// repare que a subtração ocorreu somente após a comparação
// então nesse momento era verdadeira, e após a subtração tornou-se falsa
console.log(num1 === num2)
