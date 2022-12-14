let solicitacaoSenha = window.prompt("Cadastre uma senha:");
let senha = solicitacaoSenha;

do {
    senha = window.prompt("Digite a sua senha:");
    if (senha === solicitacaoSenha) {
        alert("Entrando no sistema...");
    } else {
            alert("Senha invalida, tenta novamente!");
    }
} while (senha != solicitacaoSenha);