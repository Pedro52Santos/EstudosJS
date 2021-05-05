// A variável devinida com VAR é vista fora do escopo pois é global, quando não pertence a uma função
{{{{
    var sera = "Será???"
}}}}
console.log(sera)

// Qunado dentro de uma função, ela pertence somente ao escopo da mesma
function teste(){
    var local = 123
    console.log(local)
}
teste()
console.log(local)

