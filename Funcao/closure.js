// é o escopo criado ao definir a função 
// permite acessar e manipular variáveis externas á função

//contexto lexico em ação
const x = 'global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())