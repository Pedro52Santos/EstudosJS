let dobro = function(a){
    return 2*a
}
dobro = (a) =>{
    return 2*a
}

dobro = a => 2*a //Pode ser usada assim quando tem apenas um parâmetro
// o retorno da função arrow quando sem parênteses é implicito.
console.log(dobro(20))

let ola = function(){
    return 'ola'
}

ola = () => 'Ola'
console.log(ola())