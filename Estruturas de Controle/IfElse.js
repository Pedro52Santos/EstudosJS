const imprimirResultadp = function(nota){
    if(nota >= 7) console.log('Aprovado')
    else console.log('Reprovado')
}

imprimirResultadp(10)
imprimirResultadp(4)
imprimirResultadp('Opa!') // cuidado ao trabalhar com linguagem fracamente tipada
