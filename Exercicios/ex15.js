function revendedora(carro) {
    switch(carro){
        case "hatch":
            return "Compra efetuada com sucesso"
            break;
        case "sedan":
        case "motocicleta":
        case "caminhonete":
            return "Tem certeza que não prefere este modelo?"
            break;
        default:
            return "Não trabalhamos com este automóvel aqui."
    }
    
}

console.log(revendedora("      "))