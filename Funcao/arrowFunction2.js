function pessoa(){
    this.idade = 0
     
    setInterval(() =>{ //compare ao exemplo thisBind2 ..... é possível ver que o this fica fixo, não é necessário chamar o bind
        this.idade++
        console.log(this.idade)
    }, 1000)
}