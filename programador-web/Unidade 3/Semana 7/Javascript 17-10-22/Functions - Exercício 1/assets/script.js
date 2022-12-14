/* 1 - Crie uma função simples que peça para o usuário dois valores do tipo int, faça
a soma e retorne em um alert com o resultado*/

function soma(){
    let valor1 =parseInt(prompt("qual o valor 1?"));
    let valor2 = parseInt(prompt("qual o valor 2?"));
    
    let resultado = valor1 + valor2;
    alert(resultado);
}

soma()