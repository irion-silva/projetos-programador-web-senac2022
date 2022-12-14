/*Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário,
mostrando uma mensagem de erro e voltando a pedir as informações*/

let senha = 0;
let usuario = "0";

while(senha == usuario) {
    usuario = window.prompt("Nome de usuário:");
    senha = window.prompt("Senha:")
    if(senha === usuario) {
        window.alert("Erro: A senha não pode ser igual ao nome de usuário.")
    }
} 