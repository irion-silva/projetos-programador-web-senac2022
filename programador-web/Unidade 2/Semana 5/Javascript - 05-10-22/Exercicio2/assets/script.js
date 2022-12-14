/*2. Faça um programa que peça dois números e imprima o maior deles. */

let numero1 = parseFloat(window.prompt("Informe um número:"))
let numero2 = parseFloat(window.prompt("Informe outro número:"))

if(numero1 > numero2) {
    window.alert(numero1 + " é maior.")
} else if(numero1 == numero2) {
    window.alert("Os números são iguais.")
} else {
    window.alert(numero2 + " é o maior.")
}