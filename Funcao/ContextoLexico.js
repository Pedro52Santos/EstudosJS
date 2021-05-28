const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'local'
    minhaFuncao() // Ela procura o "valor" onde foi definida
}
exec()