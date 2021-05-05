console.log(typeof Object)
console.log(typeof new Object) //é como instanciar uma função, mas pode ocultar os parenteses


const Client = function(){}
console.log(typeof Client)
console.log(typeof new Client)

class Produto {} // ES2015 (ES6)
// Classe é só um detalhe de Sintaxe
console.log(typeof Produto) 
console.log(typeof new Produto())