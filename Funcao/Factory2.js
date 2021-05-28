 function criarProduto(nome, preco){
     return{
         nome,
         preco,
         desconto: preco*0.90
     }
 }

 console.log(criarProduto('notebook', 3700.99))
 console.log(criarProduto('ipad', 1199.49))
 