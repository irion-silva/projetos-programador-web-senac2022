/*3. Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo.*/
let numero = parseFloat(window.prompt("Informe um número:"))

if(numero > 0) {
    window.alert("O número " + numero + " é positivo.")
} else if (numero == 0){
    window.alert("O número não é positivo e nem negativo.")
} else {
    window.alert("O número " + numero + " é negativo.")
}