"use strict";

function cadastrar(element) {
  var nome = element.children.nome.value;
  var sobrenome = element.children.sobrenome.value;
  var nascimento = element.children.nasc.value;
  var email = element.children.email.value;
  var senha = element.children.senha.value;
  var confirmacaoSenha = element.children.confirmacao.value;
  if (senha === confirmacaoSenha) {
    console.log({
      nome: nome,
      sobrenome: sobrenome,
      nascimento: nascimento,
      email: email,
      senha: senha
    });
    alert("Usuario " + nome + " registrado!");
  } else {
    alert("As senhas não conferem");
  }
}