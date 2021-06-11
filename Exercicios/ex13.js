function verificaDia(diaDasemana) {
    switch(diaDasemana){
        case 1:
            return 'Não útil'
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia útil'
            break;
        case 7 || 'domingo':
            return 'Não útil'
            break;
            default: return 'erro'
    }
}

console.log(verificaDia(1))