// Armazenar uma função em uma variável
const imprimiSoma = function(a,b){
    console.log(a + b)
}

imprimiSoma(2, 3)

// Armazenando uma função arrao em uma variável...

const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

// retorno implicito
const subtrair = (a, b) => a - b // Quando só tem uma linha é obrigado a retornar o resultado do que nela há
console.log(subtrair(2, 3))