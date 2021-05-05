const [a] = [10] // com o número no lado direito é um destructuring, e do lado direito é um array
console.log(a)

const [n1, , n3, n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

cont [[,nota]] = [[,8,8], [6, 6, 8]]
console.log(nota)