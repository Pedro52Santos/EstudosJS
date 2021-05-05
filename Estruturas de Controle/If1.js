function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovdo com '+ nota)
    }
}
soBoaNoticia(8.0)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade, acreditem nele....')
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo('')
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo(0)