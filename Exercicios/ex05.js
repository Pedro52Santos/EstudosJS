const arredondar = (valor) => `${valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`

console.log(arredondar( 0.30000000000000004 ))


// 267-92