document.getElementById('botao').addEventListener('click', function(ev) {
    ev.preventDefault;
    if(senha.value == confSenha.value) {
        alert("Cadastrado com sucesso");
        const nome = document.getElementById("nome");
        localStorage.setItem('nome', nome.value);
        nome.value='';
        const email = document.getElementById("email");
        localStorage.setItem('email', email.value);
        email.value='';
        const senha = document.getElementById("senha");
        localStorage.setItem('senha', senha.value);
        const confSenha = document.getElementById("confSenha");
        localStorage.setItem('Confirmação de senha', confSenha.value);
    } else {
        alert("As senhas não coincidem. Tente novamente");
        senha.value='';
    }
});