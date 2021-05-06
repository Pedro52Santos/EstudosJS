// função em JS é first-class object (citizens)
//Higher-order function

//criar forma literal
function fun1() { }

//Armazenar em uma varável
const fun2 = function() {}

// Armazenar em um array
const array = [function(){}, fun1, fun2] 
// é possivel criar uma função no array, puxar uma função literal e puxar uma variável que armazena uma função.

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return 'Opa'}
console.log(obj.falar())

//Passar uma função como parametro de outra função
function run(fun){
    fun()
}

// Passando a função que vai ser executada depois
run(function(){console.log('Executando....')}) 

//Uma função pode retornar/ conter utra função
function Soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
Soma(2,3)(4) //parametro de soma e logo após parametro de C


