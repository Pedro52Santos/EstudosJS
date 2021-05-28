const fabricantes = ['mercedes', 'audi', 'bmw']

function imprimir(nome, indice){
    console.log(`${indice +1}. ${nome}`)
}
//Callback é passar uma função e ela é ativada quando ocorre um evento
fabricantes.forEach(imprimir)
fabricantes.forEach(function(a){
    console.log(a)
})