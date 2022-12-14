/*Faça uma programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue
pedindo até que o usuário informe um valor válido*/

let nota = -1;

while(nota < 0 || nota > 10) {
    nota = window.prompt("Informe uma nota:");
    window.alert("Nota: " + nota);
}