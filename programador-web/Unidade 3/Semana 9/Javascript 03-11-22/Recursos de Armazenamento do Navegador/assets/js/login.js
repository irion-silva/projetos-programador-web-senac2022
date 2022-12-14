document.getElementById('botao').addEventListener('click', function(ev){
    ev.preventDefault;
    const email1 = document.getElementById("email").value;
    const senha1 = document.getElementById("senha").value;
    if(email1 === localStorage.getItem('email') && senha1 === localStorage.getItem('senha')) {
        alert("Logado com sucesso.");
    } else {
        alert("Senha incorreta");
    }
})