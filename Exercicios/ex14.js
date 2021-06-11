function frutaria(fruta){
    switch(fruta){
        case 'maçã':
            return "Não vendemos maçãs aqui..."
            break;
        case 'kiwi':
            return "Estamos com escassez de kiwi no momento"
            break;
        case 'melancia':
            return "Aqui está, são 3 reais o quilo..."
            break;
            default: return 'erro'
    }
}

console.log(frutaria(''))