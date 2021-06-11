function fatorial(valor){
    let valorTotal = 1
    for(let i = valor; i > 0; i--){
        valorTotal = valorTotal * i      
    }
    return valorTotal
}

console.log(fatorial(5))
