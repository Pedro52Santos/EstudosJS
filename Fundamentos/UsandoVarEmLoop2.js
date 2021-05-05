const funcs = []

    for (var i = 0; i<10 ; i++){
        funcs.push(function(){
            console.log(i)
        })
    }

    funcs[2]()
    funcs[8]()

    // A var não respeita o escopo e retorna 10 que é o valor de I no momento final