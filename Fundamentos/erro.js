function tratarErroELancar(erro){
    throw new Error('..TESTE DE AVISO...')
}

function imprimirNomeGritando(obj){
    try{
    console.log(obj.nome.toUppercase() + '!!!!!')
    }catch(e){
        tratarErroELancar(e)
    } finally{
        console.log('FIM')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritando(obj)
