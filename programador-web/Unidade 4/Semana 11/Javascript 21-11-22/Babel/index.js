function cadastrar(element){
    const nome = element.children.nome.value
    const sobrenome = element.children.sobrenome.value
    const nascimento = element.children.nasc.value
    const email = element.children.email.value
    const senha = element.children.senha.value
    const confirmacaoSenha = element.children.confirmacao.value


    if(senha === confirmacaoSenha) {
        console.log({nome, sobrenome, nascimento, email, senha})
        alert("Usuario " + nome + " registrado!")
    } else {
        alert("As senhas não conferem")
    }
}