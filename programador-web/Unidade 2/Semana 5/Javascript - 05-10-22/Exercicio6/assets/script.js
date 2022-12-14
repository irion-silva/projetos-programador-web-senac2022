/*7. Faça um programa, que permita o usuário fazer contas de adição enquanto quiser.*/

let continuar = '';
let numero1 = 0;
let numero2 = 0;

do {
    numero1 = parseFloat(window.prompt("Informe o primeiro número:"));
    numero2 = parseFloat(window.prompt("Informe o segundo número:"));
    let resultado = numero1 + numero2;
    window.alert(numero1 + " + " + numero2 + " = " + resultado);
    continuar = window.prompt("Deseja continuar?[S~N]");
} while(continuar === 'S')