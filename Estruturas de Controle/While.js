function getInteiroAleatórioEntre(min, max){
    const valor = Math.random() * (max, min) + min
        return Math.floor(valor)
}
let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatórioEntre(-1, 10)
    console.log(`A opoção escolhida foi ${opcao}.`)
}