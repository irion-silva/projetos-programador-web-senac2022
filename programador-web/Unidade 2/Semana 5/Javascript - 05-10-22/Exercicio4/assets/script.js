/*4. Crie um programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra
escrever: F - Feminino, M - Masculino, Sexo Inválido.*/

let letra = window.prompt("Informe uma letra:");
if(letra === 'F') {
    window.alert(letra + " - Feminino");
} else if (letra === 'M') {
    window.alert(letra + " - Masculino");
} else {     
    window.alert("Sexo Inválido"); 
}