function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho2 && trabalho1
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // Operador Unario
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} 
    // ao colocar somente o valor é criada uma constante de nome igual que recebe o valor passado
}

console.log(compras(true, false))