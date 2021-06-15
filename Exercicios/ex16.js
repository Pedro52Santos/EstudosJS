function calculadora(a = 0, operacao, b = 0){
    switch(operacao){
        case '+':
            return a + b
            break;
        case '-':
            return a - b
            break;
        case "*":
            return a * b
            break;
        case '/':
            return a / b
            break;
        default:
            return "Operação inválida"
    }
}

console.log(calculadora(12, '*', 2))