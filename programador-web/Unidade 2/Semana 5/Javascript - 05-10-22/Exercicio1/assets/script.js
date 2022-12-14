/*1. Faça um script que verifique se uma letra digitada num campo de input é vogal ou
consoante. */

let letra = '';

do {
    letra = window.prompt("Informe uma letra:");
    do {
        if (letra.length > 1) {
            letra = window.prompt("Informe APENAS uma letra:");
        }
    } while (letra.length > 1)
    if (letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U') {
        window.alert("A letra " + letra + " é uma vogal.");
    } else {
        window.alert("A letra " + letra + " é uma consoante.");
    }
} while (letra.lenght > 1)