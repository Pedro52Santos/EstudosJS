function calculoSalario(salario, planoDeTrabalho){
    switch(planoDeTrabalho){
        case 'a':
            return salario + (salario * 0.1)
            break;
        case 'b':
            return salario + (salario * 0.15)
            break;
        case 'c': 
            return salario + (salario * 0.2)
            break
        default:
        return "Opção inválida"
    }
}

console.log(calculoSalario(1000, 'b'))