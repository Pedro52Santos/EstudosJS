console.log(Math.floor(12.9))


const obj1 = {}
obj1.nome = 'bola'
console.log(obj1.nome)

function Obj (nome) {
    this.nome = nome
    this.exec = function(){
        console.log('Qual foi menor')
    }
}

const obj2 = new Obj('josias')
const obj3 = new Obj('Cadeira')
console.log(obj1.nome)
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()