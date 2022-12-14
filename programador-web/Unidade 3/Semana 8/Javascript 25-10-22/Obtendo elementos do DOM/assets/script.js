/* 1 - Monte uma estrutura para a realização de cadastro de um usuário, pedindo
o nome, sobrenome, data de nascimento, email, uma senha e um botao para realizar o cadastro
(A estrutura deve ser feita no html).

Após ter criado a estrutura monte um script lógico para
realização do cadastro, armazenando os dados em uma variável
(pode ser em um objeto), e com uma condição que pergunte
se o usuário deseja mesmo realizar o cadastro.

OBS: A ESTRUTURA DEVE ESTAR ESTILIZADA E VALERÁ NOTA.*/


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