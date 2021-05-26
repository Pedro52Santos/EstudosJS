let comparacomThis = function(param){
    console.log(this === param)
}

comparacomThis(global)

const obj = {}
comparacomThis = comparacomThis.bind(obj)
comparacomThis(global)
comparacomThis(obj)

let comparaComThisArow = param => console.log(this === param)
comparaComThisArow(global)
comparaComThisArow(module.exports)

comparaComThisArow = comparaComThisArow.bind(obj)
comparaComThisArow(obj) 