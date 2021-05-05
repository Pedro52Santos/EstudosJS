var numero = 1
{           // var só pertence a um escopo quando dentro de uma função
    var numero = 2
    console.log("Dentro", numero)
}

console.log("fora", numero)