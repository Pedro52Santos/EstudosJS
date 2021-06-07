const calculadora = function(valorA = 0, valorB = 0){
    return `
    A soma é: ${valorA + valorB} \n 
    A subtração é: ${valorA - valorB} \n
    A multipicação é: ${valorA * valorB} \n
    A divisão é: ${ valorA / valorB}
    `
}

console.log(calculadora(3, 2))
