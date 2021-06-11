let stringPontuacoes = "10, 20, 20, 8, 25, 3, 0, 30, 1"

function avaliaPontuacoes(stringPontruacoes){
    let pontuacoes = stringPontruacoes.split(", ")
    let recordsQuebrados = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for(let i; i < pontuacoes.lenght; i++){
        if(pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            recordsQuebrados =+ 1
        }else if(pontuacoes[i] < menorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1
        }
    }
    return [recordsQuebrados, piorJogo]
}

console.log(avaliaPontuacoes(stringPontuacoes))
