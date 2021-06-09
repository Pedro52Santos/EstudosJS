const bhaskara = (aX = 0, bX = 0, c = 0) => {
    let delta = bX*bX - 4*aX*c;
    if(delta < 0) {
        return "Sinto muito mas o delta é negativo"
    }
    let resultado = []
    resultado[0] = (-bX + Math.sqrt(delta)) / (2*aX)
    resultado[1] = (-bX - Math.sqrt(delta)) / (2*aX)
    return resultado
}

console.log(bhaskara(2,6,1))