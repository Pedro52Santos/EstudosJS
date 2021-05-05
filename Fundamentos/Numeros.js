const peso1 = 1.0
const peso2 = Number('2.0')

console.log(1, 2)
console.log(Number.isInteger(peso1))

const Avaliacao1 = 9.871
const Avaliacao2 = 6.871

const total = Avaliacao1 * peso1 + Avaliacao2 * peso2
const media = total / (peso2 + peso1)
console.log(media.toFixed(1 ))