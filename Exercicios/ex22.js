//Pulei exercicios de Switch pq ja fiz muitos antes
function calcularAnuidade(anuidade, mes){
    let valor = anuidade
    for(let i = mes; i < 0; i --){
        valor = valor + (valor * 0.05)
    }
    return valor
}

console.log(calcularAnuidade(100, 3))


///////QUAL O ERRO????????????????????????