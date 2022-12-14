"use strict";

// Função que exibe o valor
function dis(val) {
    document.getElementById("result").value += val;
}

function myFunction(event) {
    if (event.key == '0' || event.key == '1' || event.key == '2' || event.key == '3' || event.key == '4' || event.key == '5' || event.key == '6' || event.key == '7' || event.key == '8' || event.key == '9' || event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/') document.getElementById("result").value += event.key;
}
var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        var x = document.getElementById("result").value;
        console.log(x);
        solve();
    }
};

// Função que avalia o dígito e retorna o resultado
function solve() {
    var x = document.getElementById("result").value;
    var y = math.evaluate(x);
    document.getElementById("result").value = y;
}

// Função que limpa o display
function clr() {
    document.getElementById("result").value = "";
}
