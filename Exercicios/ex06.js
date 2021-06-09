const jurosNormais = (capInicial = 0, txJuros = 0, tempoAplicacao = 0) => {
  let valorJuros = txJuros * (capInicial/100)
  return capInicial + (valorJuros * tempoAplicacao)
}

const jurosCompostos = (capInicial = 0, txJuros = 0, tempoAplicacao = 0) => {
 if(txJuros > 1) {
    txJuros = txJuros/100
   }
return capInicial * Math.pow((1+ txJuros), tempoAplicacao)

}

console.log(jurosNormais(5000, 0.2, 90))
console.log(jurosCompostos(100, 1, 10))