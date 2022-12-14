/*2 - Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido 
e continue pedindo até que o usuário informe um valor válido.*/

let nota = -1;

do {
    nota = parseFloat(window.prompt("Informe uma nota[1-10]:"));
    if (nota < 0 || nota > 10) {
        window.alert("Informe um valor válido");
    } else {
        window.alert("Nota: " + nota);
    }
} while (nota < 0 || nota > 10);

