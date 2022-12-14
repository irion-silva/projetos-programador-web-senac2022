const numero = parseFloat(prompt("De qual número você deseja calcular a tabuada?"));
let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
    resultado += " -> " + numero + " x " + fator + " = " + (numero * fator ) + "\n"
}

window.alert("Resultado da tabuada de " + numero + "\n\n" + resultado)