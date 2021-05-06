function soma() //o fato de não solicitar parâmetros não indica que não é possivel passar...
{
let soma = 0
for(i in arguments){ //Arguments são os argumentos dentro de parametros, tudo que fica dentro dos parênteses da função.
    soma += arguments[i]
}
return soma
}

console.log(soma()) //enfatizando a primeira nota, aqui mesmo não solicitando parâmetros eu posso ou não passá-los.
console.log(soma(3, 5.4, 6, 45, 2))
console.log(soma(2, "Dois")) //também é possivel passar parametros que não são números, mesmo que resultem em concatenação.
console.log(soma('A', 'B', 'C'))
