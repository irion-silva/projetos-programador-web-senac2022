// Função com return
function retorno() {
    n1 = parseInt(prompt("Me informe o primeiro número: "));
    n2 = parseInt(prompt("Me informe o segundo número: "));
    resultado = n1 + n2;

    if(resultado >= 20) {
        return alert("O número é igual ou maior que 20");
    } else {
        return alert("O número é menor que 20");
    }
}