console.log(soma(2, 3)) // válido só em function expression
 //O interpretador lê todas as funções antes de executar o código

// function declaration
function soma(x, y){
    return x + y
}

// function expression 
const sub = function(x, y){
    return x - y
}
console.log(sub(10, 7))

//named function expression
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3,4))