// estratégia 1 para gerar valor padrão
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0)) // no caso o zero retorna falso e troca por 1

//estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a,b,c){
    a = a !== undefined ? a : 1 //se a for diferente de undefined usará o valor, se não usará 1
    b = 1 in arguments ? b : 1 // dentro de arguments existe algo ocupando o indice 1? se não b : 1
    c = isNaN(c) ? 1 : c // Se a variável C não é um número o valor torna-se o padrão 1.
    return a + b + c
}

console.log(soma2(), soma2(1,2,3), soma2(0,0,0))

// valor padrão do es2015
function soma3(a = 1, b = 2, c = 1){ //Por ser padrão, é preferivel que essa seja usada.
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3))
