// Par nome/ Valor
const Saudacao = 'opa' // Contexto léxico1 (em que nivel a variável foi definida)

function exec(){
    const Saudacao = 'faaala' // Contexto 2
    return Saudacao
}
// Objetos são grupos de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 20,
    peso:90,
    endereco: {
        logradouro: 'Rua Antonio adriano',
        numero: 123
    }
}

console.log(Saudacao)
console.log(exec())
console.log(Cliente)

/*É de suma importância entender em que contexto a variável/função/objeto se encaixam */
