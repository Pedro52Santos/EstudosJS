const arredondar5 = (valor) => {
    if(valor < 35 || valor > 39){
    return Math.round(valor/5)*5
    }
    else return valor
}

let avaliador = (nota) => {
    let notaNivelada = arredondar5(nota)
    if(nota < 40 && nota > 0){
        return "reprovado"
    }else if(nota >= 40 && nota < 101){
        return 'Aprovado'
    }else{
        return 'Valor inválido'
    }
}

console.log(avaliador(54))

function classificaAluno(nota){
    let notaCorrigida = arredondar(nota)
    if(notaCorrigida >= 40){console.log(`Aprovado com nota ${nota}`)}
    else{ console.log(`Reprovado com ${nota}`)}
}

function arredondar(nota) {
    if(nota % 5 > 2){return nota +(5-(nota %  5))}
    else{ return nota}
}