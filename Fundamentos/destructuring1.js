// recurso de ES2015

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logadouro: 'rua rau',
        numero: 1000
    }
}

const {nome, idade} = pessoa // const {} o que ta dentro das chaves é extraido
console.log(nome, idade)
const {nome: n, idade: i} = pessoa //é possivel mudar o nome da variável com os ":"
console.log(n, i)
const {Sobrenome, bemhumorada = true} = pessoa // se não vier nada é atribuído true
console.log(Sobrenome, bemhumorada)

const{endereco} = pessoa // ele pega toda variável endereco
console.log(endereco)
const {endereco: {logadouro, numero, cep}} = pessoa // ele extraí e cria variaveis dentro de endereço
console.log(logadouro, numero)