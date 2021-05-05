var numero = 1 
{
    let numero = 2 //fica restrita ao menor escopo
    console.log('dentro = ', numero)
}
console.log("fora = ", numero)

/* A variável de LET tem escopo global, escopo de função e escopo de bloco. */