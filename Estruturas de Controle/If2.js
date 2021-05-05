function teste1(num){
    if(num>7) // sem as {} a sentesnça aplica só o primeiro comando
        console.log(num)
        console.log('final')
}
teste1(6)
teste1(8)

function teste2(num){
    if(num > 7);  // não use ;
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)