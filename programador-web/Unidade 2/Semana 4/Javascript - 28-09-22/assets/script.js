let nome = window.prompt("Informe o seu nome:");
let escola = window.prompt(nome + ", em qual instituição você estuda?");

let nota1 = window.prompt("Insira o 1ª valor:")
let nota2 = window.prompt("Insira o 2ª valor:")
let nota3 = window.prompt("Insira o 3ª valor:")
let nota4 = window.prompt("Insira o 4ª valor:")
let nota5 = window.prompt("Insira o 5ª valor:")

n1 = parseFloat(nota1)
n2 = parseFloat(nota2)
n3 = parseFloat(nota3)
n4 = parseFloat(nota4)
n5 = parseFloat(nota5)


let media = (n1 + n2 + n3 + n4 + n5) / 5

window.alert("Escola: " + escola + "\nNome: " + nome + "\nMédia das notas: " + media)