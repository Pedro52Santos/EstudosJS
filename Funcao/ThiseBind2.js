function Pessoa(){
    this.idade = 1

    const self = this // Criando a constante self que sempre vai apontar pro this do objeto pessoa.
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa