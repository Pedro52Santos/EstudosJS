//&& Pode ser usado em um caso onde sabemos que só existe uma hipótese verdadeira.
function getTipoDeTriangulo(a,b,c){
    return( a===b && b===c ) && 'Equilátero' ||
    (a===b || a===c || b===c) && 'Isoceles' ||
    'Escaleno'
}

/* && sempre retorna verdadeiro, ou seja
entre trÊs hipóteses, ele retornará a verdadeira.
"X" && "Y" && "Z"
*/


console.log(getTipoDeTriangulo(3,3,3))