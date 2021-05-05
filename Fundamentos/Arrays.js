const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) //diz o tamanho do array

delete valores[0] // é possivel deletar elementos selecionados do array
console.log(valores)

console.log(typeof valores) // O array sempre será do tipo objeto